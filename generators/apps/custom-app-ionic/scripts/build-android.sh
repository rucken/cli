#!/bin/bash
root=$PWD
src=$1/platforms/android/app/build/outputs/apk/debug/app-debug.apk
dest=$2
cd $1
ionic cordova build android --prod
cd $root
./node_modules/.bin/cp-cli $src $dest