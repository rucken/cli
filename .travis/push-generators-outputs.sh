#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git init
  git remote add origin https://${GH_TOKEN}@github.com/rucken/cli.git > /dev/null 2>&1
  git fetch origin generators-outputs
  git pull origin generators-outputs
}

commit_files() {
  git checkout -b generators-outputs
  git add .
  git commit --message "Version: $PACKAGE_VERSION Commit: $TRAVIS_COMMIT"
}

upload_files() {
  git push --quiet --set-upstream origin generators-outputs 
}

run_generators(){
  npm run clear-generators-outputs
  npm run run-generators
}

move_down(){
  cd ./test/fixtures
}

move_up(){
  cd ../..
}

if [[ $TRAVIS_BRANCH == 'master' ]]
then
  PACKAGE_VERSION=$(cat package.json \
    | grep version \
    | head -1 \
    | awk -F: '{ print $2 }' \
    | sed 's/[",]//g')
  export PACKAGE_VERSION=$PACKAGE_VERSION

  move_down
  setup_git
  move_up
  run_generators
  move_down
  commit_files
  upload_files
fi