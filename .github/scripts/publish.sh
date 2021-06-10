#!/usr/bin/env sh

set -e

echo ''
echo "Node version: $(node -v)"
echo "Yarn version: $(yarn -v)"

echo "==> Prepare to publish"

cd .vuepress/dist

git config --global user.email "darkerkorean@gmail.com"
git config --global user.name "Sungyub NA"

git init
git add .

git commit -m 'Auto publish from Github Actions'
git push -f https://"${GH_TOKEN}"@github.com/"${GITHUB_REPOSITORY}".git master:gh-pages
rm -rf .git

echo "==> Successfully published!"
