#!/usr/bin/env bash
# Build for GitHub Pages and publish dist/ to the gh-pages branch.
# Usage: npm run deploy
set -euo pipefail
REPO_URL="$(git config --get remote.origin.url)"
export BASE_PATH="/suresh-profile/"

npm run build:gh

cd dist
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="$(git -C .. config user.name)" -c user.email="$(git -C .. config user.email)" \
  commit -q -m "Deploy $(git -C .. rev-parse --short HEAD) to GitHub Pages"
git push -q -f "$REPO_URL" gh-pages
rm -rf .git
echo "Deployed: https://sureshkumars1975.github.io/suresh-profile/"
