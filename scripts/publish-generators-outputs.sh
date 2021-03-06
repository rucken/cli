#!/bin/bash

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
  git init
  git remote add origin https://${GH_TOKEN}@github.com/rucken/cli.git > /dev/null 2>&1
  git clean -fx
  git pull origin generators-outputs --rebase=preserve --allow-unrelated-histories
}

commit_files() {
  git checkout -b generators-outputs
  git add .
  git commit --message "Version: $PACKAGE_VERSION Commit: $TRAVIS_COMMIT"
}

upload_files() {
  git push --quiet --set-upstream origin generators-outputs 
}

move_down(){
  cd ./test/fixtures
}

remove_exists() {
  rm -rf ./test/fixtures
  mkdir -p ./test/fixtures
}

run_generators(){
  # move_down
  # git rm -r * -f -q
  # git commit -m 'Delete all the stuff' 
  # move_up 
  yes | cp -rf ./.gitignore ./test/fixtures/.gitignore
  ./scripts/create-fixtures.sh
}

move_up(){
  cd ../..
}

PACKAGE_VERSION=$(cat package.json \
  | grep version \
  | head -1 \
  | awk -F: '{ print $2 }' \
  | sed 's/[",]//g')
export PACKAGE_VERSION=$PACKAGE_VERSION

remove_exists
move_down
setup_git
move_up
run_generators
move_down
commit_files
upload_files
