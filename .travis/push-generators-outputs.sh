#!/bin/sh

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git init
  git checkout -b generators-outputs
  git add .
  git commit --message "$TRAVIS_COMMIT"
}

upload_files() {
  git remote add origin https://${GH_TOKEN}@github.com/rucken/cli.git > /dev/null 2>&1
  git fetch origin generators-outputs
  git pull origin generators-outputs
  git push --quiet --set-upstream origin generators-outputs 
}

run_generators(){
  rimraf ./test/fixtures
  mkdir ./test/fixtures
  npm run run-generators
  cd ./test/fixtures
}

run_generators
setup_git
commit_website_files
upload_files