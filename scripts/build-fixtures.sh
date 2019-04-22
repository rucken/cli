#!/bin/bash
cd ./test/fixtures/generators
npm i
npm run affected:prod
npm run ng build custom-lib
npm run ng build custom-lib-web
npm run ng build custom-lib-ionic
npm run ng build custom-lib-nestjs
npm run ng build custom-app
npm run ng build custom-app-ionic
npm run ng build custom-app-nestjs
#npm run ng run custom-app-ionic:android-prepare
# twice run as workaround for long operations
#npm run ng run custom-app-ionic:android-prepare
#npm run ng run custom-app-ionic:android-build
# migrations
rm -rf ./database/sqlitedb.db
npm run migrate:prod