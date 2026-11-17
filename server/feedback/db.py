"""SQLite storage for "something looks off" report counters."""
import os
import sqlite3
import time
from contextlib import contextmanager

DB_PATH = os.environ.get("FEEDBACK_DB", "/var/lib/maths-feedback/feedback.db")

SCHEMA = """
CREATE TABLE IF NOT EXISTS counters (
    slug           TEXT PRIMARY KEY,
    count          INTEGER NOT NULL DEFAULT 0,
    first_reported INTEGER,          -- unix time of first report since last reset
    last_reported  INTEGER           -- unix time of most recent report
);
-- one row per (visitor, page) report, used only for rate limiting; pruned after a day
CREATE TABLE IF NOT EXISTS recent_reports (
    ip_hash TEXT NOT NULL,
    slug    TEXT NOT NULL,
    ts      INTEGER NOT NULL
);
CREATE INDEX IF NOT EXISTS recent_reports_ip ON recent_reports (ip_hash, ts);
"""


@contextmanager
def connect():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH, timeout=10)
    conn.row_factory = sqlite3.Row
    try:
        conn.executescript(SCHEMA)
        yield conn
        conn.commit()
    finally:
        conn.close()


def record_report(slug, ip_hash, per_page_window=86400, max_per_hour=30):
    """Increment the counter for `slug` unless this visitor is rate limited.

    Returns "counted", "duplicate" (already reported this page recently) or "rate_limited".
    """
    now = int(time.time())
    with connect() as conn:
        conn.execute("DELETE FROM recent_reports WHERE ts < ?", (now - per_page_window,))
        dup = conn.execute(
            "SELECT 1 FROM recent_reports WHERE ip_hash = ? AND slug = ?", (ip_hash, slug)
        ).fetchone()
        if dup:
            return "duplicate"
        hourly = conn.execute(
            "SELECT COUNT(*) FROM recent_reports WHERE ip_hash = ? AND ts >= ?",
            (ip_hash, now - 3600),
        ).fetchone()[0]
        if hourly >= max_per_hour:
            return "rate_limited"
        conn.execute(
            "INSERT INTO recent_reports (ip_hash, slug, ts) VALUES (?, ?, ?)", (ip_hash, slug, now)
        )
        conn.execute(
            """INSERT INTO counters (slug, count, first_reported, last_reported)
               VALUES (?, 1, ?, ?)
               ON CONFLICT(slug) DO UPDATE SET
                   count = count + 1,
                   first_reported = COALESCE(first_reported, excluded.first_reported),
                   last_reported = excluded.last_reported""",
            (slug, now, now),
        )
        return "counted"


def nonzero_counters():
    with connect() as conn:
        rows = conn.execute(
            "SELECT slug, count, first_reported, last_reported FROM counters "
            "WHERE count > 0 ORDER BY count DESC, last_reported DESC"
        ).fetchall()
        return [dict(r) for r in rows]


def reset(slug=None):
    """Reset one counter (or all counters if slug is None) to zero."""
    with connect() as conn:
        if slug is None:
            conn.execute("DELETE FROM counters")
        else:
            conn.execute("DELETE FROM counters WHERE slug = ?", (slug,))
