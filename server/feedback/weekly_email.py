"""Weekly summary of non-zero report counters, sent via Amazon SES (aws CLI + instance role).

Sends nothing when every counter is zero. Run by maths-feedback-weekly.timer.
Use --dry-run to print the email instead of sending it.
"""
import html
import json
import os
import subprocess
import sys
from datetime import datetime, timezone

import db

TO = os.environ.get("REPORT_EMAIL_TO", "igor.engi@gmail.com")
FROM = os.environ.get("REPORT_EMAIL_FROM", TO)
REGION = os.environ.get("AWS_REGION", "eu-west-2")
SITE_ORIGIN = os.environ.get("SITE_ORIGIN", "https://maths.iammerlin.fyi")
CONTENT_INDEX = os.environ.get("CONTENT_INDEX", "/var/www/maths/static/contentIndex.json")


def titles():
    try:
        with open(CONTENT_INDEX, encoding="utf-8") as f:
            return {k: (v.get("title") or k) for k, v in json.load(f).items()}
    except OSError:
        return {}


def build(rows):
    names = titles()
    total = sum(r["count"] for r in rows)
    subject = f"MathsNotes: {len(rows)} page{'s' if len(rows) != 1 else ''} reported ({total} report{'s' if total != 1 else ''})"
    url = lambda slug: f"{SITE_ORIGIN}/{'' if slug == 'index' else slug}"
    day = lambda t: datetime.fromtimestamp(t, timezone.utc).strftime("%d %b %Y")
    text = [f"Readers flagged these pages with “Something looks off?”:", ""]
    items = []
    for r in rows:
        title = names.get(r["slug"], r["slug"])
        text.append(f"  {r['count']:>3} × {title}  {url(r['slug'])}  (last {day(r['last_reported'])})")
        items.append(
            f"<tr><td style='padding:4px 12px 4px 0;text-align:right'><b>{r['count']}</b></td>"
            f"<td style='padding:4px 0'><a href='{html.escape(url(r['slug']))}'>{html.escape(title)}</a>"
            f" <span style='color:#888'>· last {day(r['last_reported'])}</span></td></tr>"
        )
    text += ["", f"Dashboard: {SITE_ORIGIN}/admin"]
    body_html = (
        "<p>Readers flagged these pages with “Something looks off?”:</p>"
        f"<table style='border-collapse:collapse'>{''.join(items)}</table>"
        f"<p><a href='{SITE_ORIGIN}/admin'>Open the dashboard</a> to review and reset counters.</p>"
    )
    return subject, "\n".join(text), body_html


def main():
    rows = db.nonzero_counters()
    if not rows:
        print("All counters are zero; not sending.")
        return
    subject, text, body_html = build(rows)
    if "--dry-run" in sys.argv:
        print(f"To: {TO}\nSubject: {subject}\n\n{text}")
        return
    content = {"Simple": {"Subject": {"Data": subject, "Charset": "UTF-8"},
                          "Body": {"Text": {"Data": text, "Charset": "UTF-8"},
                                   "Html": {"Data": body_html, "Charset": "UTF-8"}}}}
    subprocess.run(
        ["aws", "sesv2", "send-email", "--region", REGION,
         "--from-email-address", FROM,
         "--destination", json.dumps({"ToAddresses": [TO]}),
         "--content", json.dumps(content)],
        check=True,
    )
    print(f"Sent summary of {len(rows)} page(s) to {TO}.")


if __name__ == "__main__":
    main()
