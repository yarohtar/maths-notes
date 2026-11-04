#!/usr/bin/env bash
# Install / update the feedback backend on the server. Safe to re-run.
#   server/feedback/install.sh            (uses the `merlin` ssh host)
set -euo pipefail
HOST="${1:-merlin}"
cd "$(dirname "${BASH_SOURCE[0]}")"

ssh "$HOST" 'sudo install -d -o ec2-user -g ec2-user /var/www/maths-feedback'
rsync -az --delete --exclude venv --exclude __pycache__ --exclude '*.example' \
  ./ "$HOST":/var/www/maths-feedback/

ssh "$HOST" bash -s <<'REMOTE'
set -euo pipefail
cd /var/www/maths-feedback
[ -d venv ] || python3 -m venv venv
venv/bin/pip install -q --upgrade pip
venv/bin/pip install -q -r requirements.txt

sudo install -d -o ec2-user -g ec2-user /var/lib/maths-feedback
if [ ! -f /etc/maths-feedback.env ]; then
  salt=$(python3 -c 'import secrets; print(secrets.token_hex(32))')
  sudo tee /etc/maths-feedback.env >/dev/null <<ENV
ADMIN_EMAIL=igor.engi@gmail.com
CF_TEAM_DOMAIN=jolly-darkness-3e98.cloudflareaccess.com
CF_AUD=
SITE_ORIGIN=https://maths.iammerlin.fyi
CONTENT_INDEX=/var/www/maths/static/contentIndex.json
FEEDBACK_DB=/var/lib/maths-feedback/feedback.db
IP_SALT=$salt
REPORT_EMAIL_TO=igor.engi@gmail.com
REPORT_EMAIL_FROM=igor.engi@gmail.com
AWS_REGION=eu-west-2
ENV
  sudo chmod 640 /etc/maths-feedback.env
  sudo chgrp ec2-user /etc/maths-feedback.env
fi

sudo cp systemd/*.service systemd/*.timer /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now maths-feedback.service maths-feedback-weekly.timer
sudo systemctl restart maths-feedback.service

sudo install -d /etc/nginx/snippets
sudo cp nginx-maths-feedback.conf /etc/nginx/snippets/maths-feedback.conf
SITE=/etc/nginx/sites-enabled/maths.iammerlin.fyi
if ! grep -q 'snippets/maths-feedback.conf' "$SITE"; then
  sudo cp "$SITE" "/etc/nginx/maths.iammerlin.fyi.bak-$(date +%Y%m%d%H%M%S)"
  # insert the include right after the server_name line
  sudo sed -i '/server_name maths.iammerlin.fyi;/a\    include /etc/nginx/snippets/maths-feedback.conf;' "$SITE"
fi
sudo nginx -t
sudo systemctl reload nginx

sleep 1
systemctl --no-pager --lines=0 status maths-feedback.service | head -3
systemctl list-timers --no-pager maths-feedback-weekly.timer | head -2
REMOTE
