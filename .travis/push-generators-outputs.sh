#!/bin/sh

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
  git commit --message "$TRAVIS_COMMIT_MESSAG ($TRAVIS_COMMIT)"
}

upload_files() {
  git push --quiet --set-upstream origin generators-outputs 
}

clear_fixtures(){
  rimraf ./test/fixtures
  mkdir ./test/fixtures
}

run_generators(){
  npm run run-generators
}

move_down(){
  cd ./test/fixtures
}

move_up(){
  cd ..
}

if [[ $TRAVIS_BRANCH == 'master' ]]
  clear_fixtures
  move_down
  setup_git
  run_generators
  move_down
  commit_files
  upload_files
fi