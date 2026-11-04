#!/usr/bin/env bash
# Manual fallback: pull latest content, build locally, rsync to the server.
# Normal path is the GitHub Action (.github/workflows/deploy-merlin.yaml).
set -euo pipefail
cd "$(dirname "${BASH_SOURCE[0]}")"
[ -d "$HOME/.local/node/bin" ] && export PATH="$HOME/.local/node/bin:$PATH"

git pull --ff-only
npm ci --no-audit --no-fund
npx quartz plugin install
npx quartz build
rsync -az --delete --stats public/ merlin:/var/www/maths/
echo "Deployed to https://maths.iammerlin.fyi"
