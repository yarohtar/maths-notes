"""Backend for the "Something looks off?" button on maths.iammerlin.fyi.

Public:
  POST /api/report        {"slug": "<page slug>"}   -> increments that page's counter
Admin (Cloudflare Access + verified JWT, only ADMIN_EMAIL):
  GET  /admin             dashboard
  GET  /admin/api/counters
  POST /admin/api/reset   {"slug": "<slug>"} or {"all": true}
"""
import hashlib
import hmac
import json
import os
import time
from functools import wraps

import jwt
from flask import Flask, abort, jsonify, render_template, request

import db

ADMIN_EMAIL = os.environ.get("ADMIN_EMAIL", "").strip().lower()
CF_TEAM_DOMAIN = os.environ.get("CF_TEAM_DOMAIN", "").strip()  # e.g. jolly-darkness-3e98.cloudflareaccess.com
CF_AUD = os.environ.get("CF_AUD", "").strip()  # Application Audience (AUD) tag of the Access app
SITE_ORIGIN = os.environ.get("SITE_ORIGIN", "https://maths.iammerlin.fyi")
CONTENT_INDEX = os.environ.get("CONTENT_INDEX", "/var/www/maths/static/contentIndex.json")
IP_SALT = os.environ.get("IP_SALT", "")

app = Flask(__name__)
_jwks = jwt.PyJWKClient(f"https://{CF_TEAM_DOMAIN}/cdn-cgi/access/certs") if CF_TEAM_DOMAIN else None

# ---------------------------------------------------------------- page index
_index_cache = {"mtime": None, "pages": {}}


def published_pages():
    """slug -> title for every page on the site, read from Quartz's contentIndex.json."""
    try:
        mtime = os.path.getmtime(CONTENT_INDEX)
    except OSError:
        return _index_cache["pages"]
    if mtime != _index_cache["mtime"]:
        with open(CONTENT_INDEX, encoding="utf-8") as f:
            data = json.load(f)
        _index_cache["pages"] = {slug: (v.get("title") or slug) for slug, v in data.items()}
        _index_cache["mtime"] = mtime
    return _index_cache["pages"]


def client_ip():
    # nginx only forwards /api and /admin from the Cloudflare tunnel (127.0.0.1),
    # and sets X-Client-IP from Cloudflare's CF-Connecting-IP header.
    return request.headers.get("X-Client-IP") or request.remote_addr or ""


def same_origin():
    origin = request.headers.get("Origin")
    return origin is None or origin == SITE_ORIGIN


# ---------------------------------------------------------------- public API
@app.post("/api/report")
def report():
    if not same_origin():
        abort(403)
    payload = request.get_json(silent=True) or {}
    slug = str(payload.get("slug", ""))[:300]
    if slug not in published_pages():
        return jsonify(ok=False, error="unknown page"), 400
    ip_hash = hmac.new(IP_SALT.encode(), client_ip().encode(), hashlib.sha256).hexdigest()
    result = db.record_report(slug, ip_hash)
    if result == "rate_limited":
        return jsonify(ok=False, error="too many reports, try again later"), 429
    # "duplicate" is reported as success: the page is already on the list
    return jsonify(ok=True)


# ---------------------------------------------------------------- admin
def admin_only(view):
    @wraps(view)
    def wrapper(*args, **kwargs):
        token = request.headers.get("Cf-Access-Jwt-Assertion") or request.cookies.get("CF_Authorization")
        if not (token and _jwks and CF_AUD and ADMIN_EMAIL):
            abort(403)
        try:
            key = _jwks.get_signing_key_from_jwt(token).key
            claims = jwt.decode(
                token,
                key,
                algorithms=["RS256"],
                audience=CF_AUD,
                issuer=f"https://{CF_TEAM_DOMAIN}",
            )
        except jwt.PyJWTError:
            abort(403)
        if str(claims.get("email", "")).lower() != ADMIN_EMAIL:
            abort(403)
        if request.method != "GET" and not (same_origin() and request.headers.get("X-Requested-With") == "fetch"):
            abort(403)
        return view(*args, **kwargs)

    return wrapper


@app.get("/admin")
@app.get("/admin/")
@admin_only
def dashboard():
    return render_template("dashboard.html", site=SITE_ORIGIN)


@app.get("/admin/api/counters")
@admin_only
def counters():
    pages = published_pages()
    rows = db.nonzero_counters()
    for r in rows:
        r["title"] = pages.get(r["slug"], r["slug"])
        r["published"] = r["slug"] in pages
        r["url"] = f"{SITE_ORIGIN}/{'' if r['slug'] == 'index' else r['slug']}"
    return jsonify(counters=rows, now=int(time.time()))


@app.post("/admin/api/reset")
@admin_only
def reset():
    payload = request.get_json(silent=True) or {}
    if payload.get("all") is True:
        db.reset(None)
    elif payload.get("slug"):
        db.reset(str(payload["slug"]))
    else:
        abort(400)
    return jsonify(ok=True)
