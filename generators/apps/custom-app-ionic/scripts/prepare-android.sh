#!/bin/bash
cd $1
cordova platform add android --save --no-confirm
ionic cordova prepare android --no-confirm