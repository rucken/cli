#!/bin/bash
rm -rf ./test/fixtures/generators
node ./bin/run workspace fixtures --workspace=./test/fixtures/generators --author=EndyKaufman --email=admin@site15.ru 
cd ./test/fixtures/generators
npm i

node ../../../bin/run app custom-app --api=/api --type=all

# node ../../../bin/run lib custom-lib --org=custom-org --type=frontend
node ../../../bin/run lib custom-lib --org=custom-org --type=all
node ../../../bin/run lib custom-lib-web --org=custom-org --type=frontend
node ../../../bin/run lib custom-lib-ionic --org=custom-org --type=frontend
# node ../../../bin/run lib custom-lib-nestjs --org=custom-org --type=nestjs

node ../../../bin/run lib2app --frontendLib=custom-lib --frontendApp=custom-app --type=frontend
node ../../../bin/run lib2app --frontendLib=custom-lib-web --frontendApp=custom-app --type=frontend

node ../../../bin/run lib2app --frontendLib=custom-lib --frontendApp=custom-app-ionic --type=frontend
node ../../../bin/run lib2app --frontendLib=custom-lib-ionic --frontendApp=custom-app-ionic --type=frontend

node ../../../bin/run lib2app --nestjsLib=custom-lib-nestjs --nestjsApp=custom-app-nestjs --type=nestjs

node ../../../bin/run entity custom-entity --lib=custom-lib --timestamp=1553957529598 --type=all
# node ../../../bin/run entity custom-entity --coreLib=custom-lib --ionicLib=custom-lib-ionic --webLib=custom-lib-web --nestjsLib=custom-lib-nestjs --timestamp=1553957529598 --type=all

node ../../../bin/run entity2app custom-entity --lib=custom-lib --app=custom-app --type=all
#node ../../../bin/run entity2app custom-entity --coreLib=custom-lib --webLib=custom-lib-web --webApp=custom-app --type=web
#node ../../../bin/run entity2app custom-entity --coreLib=custom-lib --ionicLib=custom-lib-ionic --ionicApp=custom-app-ionic --type=ionic

# npm i
# npm run affected:prod