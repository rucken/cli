import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Base } from '../src/lib/base';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('Generator-app-command: create application with name "ananas"', () => {
    config();
    const debug = process.env.TEST_DEBUG === 'true';
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dirLocal = 'fixture/ananas'
        let _dir = path.resolve(`${__dirname}/${_dirLocal}`);
        items.push({
            dir: _dir,
            dirLocal: `test/${_dirLocal}`,
            files: [
                path.resolve(`${_dir}/webpack.server.config.js`),
                path.resolve(`${_dir}/tslint.json`),
                path.resolve(`${_dir}/tsconfig.json`),
                path.resolve(`${_dir}/server.ts`),
                path.resolve(`${_dir}/scripts/version-bump.sh`),
                path.resolve(`${_dir}/scripts/publish.sh`),
                path.resolve(`${_dir}/README.md`),
                path.resolve(`${_dir}/protractor.conf.js`),
                path.resolve(`${_dir}/package.json`),
                path.resolve(`${_dir}/LICENSE`),
                path.resolve(`${_dir}/libs/@ananas/web/src/tsconfig.json`),
                path.resolve(`${_dir}/libs/@ananas/web/src/README.md`),
                path.resolve(`${_dir}/libs/@ananas/web/src/package.json`),
                path.resolve(`${_dir}/libs/@ananas/web/src/ng-package.json`),
                path.resolve(`${_dir}/libs/@ananas/web/src/LICENSE`),
                path.resolve(`${_dir}/libs/@ananas/web/src/i18n/template.pot`),
                path.resolve(`${_dir}/libs/@ananas/web/src/i18n/ru.po`),
                path.resolve(`${_dir}/libs/@ananas/core/src/tsconfig.json`),
                path.resolve(`${_dir}/libs/@ananas/core/src/README.md`),
                path.resolve(`${_dir}/libs/@ananas/core/src/package.json`),
                path.resolve(`${_dir}/libs/@ananas/core/src/ng-package.json`),
                path.resolve(`${_dir}/libs/@ananas/core/src/LICENSE`),
                path.resolve(`${_dir}/libs/@ananas/core/src/i18n/template.pot`),
                path.resolve(`${_dir}/libs/@ananas/core/src/i18n/ru.po`),
                path.resolve(`${_dir}/karma.conf.js`),
                path.resolve(`${_dir}/e2e/tsconfig.e2e.json`),
                path.resolve(`${_dir}/e2e/app.po.ts`),
                path.resolve(`${_dir}/e2e/app.e2e-spec.ts`),
                path.resolve(`${_dir}/bs-config.json`),
                path.resolve(`${_dir}/apps/ananas/src/typings.d.ts`),
                path.resolve(`${_dir}/apps/ananas/src/tsconfig.spec.json`),
                path.resolve(`${_dir}/apps/ananas/src/tsconfig.server.json`),
                path.resolve(`${_dir}/apps/ananas/src/tsconfig.json`),
                path.resolve(`${_dir}/apps/ananas/src/test.ts`),
                path.resolve(`${_dir}/apps/ananas/src/styles.scss`),
                path.resolve(`${_dir}/apps/ananas/src/polyfills.ts`),
                path.resolve(`${_dir}/apps/ananas/src/main.server.ts`),
                path.resolve(`${_dir}/apps/ananas/src/main.ts`),
                path.resolve(`${_dir}/apps/ananas/src/index.html`),
                path.resolve(`${_dir}/apps/ananas/src/favicon.ico`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment-server.prod.ts`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment-server.mockapi.ts`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment-server.ts`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment.prod.ts`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment.mockapi.ts`),
                path.resolve(`${_dir}/apps/ananas/src/environments/environment.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/shared/shared.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/shared/exceptions/error.handler.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/i18n/template.pot`),
                path.resolve(`${_dir}/apps/ananas/src/app/i18n/ru.po`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/themes-page/themes-page.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/themes-page/themes-page.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/themes-page/themes-page.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/themes-page/themes-page.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/home-page/home-page.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/home-page/home-page.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/home-page/home-page.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/home-page/home-page.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/users-frame/users-frame.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/users-frame/users-frame.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/users-frame/users-frame.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/users-frame/users-frame.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/groups-frame/groups-frame.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/groups-frame/groups-frame.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/groups-frame/groups-frame.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/groups-frame/groups-frame.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/admin-page.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/admin-page.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/admin-page.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/admin-page.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/admin-page/admin-page.children-routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/profile-frame/profile-frame.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/profile-frame/profile-frame.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/profile-frame/profile-frame.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/profile-frame/profile-frame.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/account-page.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/account-page.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/account-page.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/account-page.component.html`),
                path.resolve(`${_dir}/apps/ananas/src/app/components/pages/account-page/account-page.children-routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.server.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.routes.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.module.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.component.spec.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.component.ts`),
                path.resolve(`${_dir}/apps/ananas/src/app/app.component.html`),
                path.resolve(`${_dir}/_env`),
                path.resolve(`${_dir}/.travis.yml`),
                path.resolve(`${_dir}/.gitignore`),
                path.resolve(`${_dir}/.editorconfig`),
                path.resolve(`${_dir}/.angular-cli.json`)
            ]
        });
        beforeEach(() => {
            items.forEach(({
                dir: dir,
                dirLocal: dirLocal,
                files: files
            }) => {
                files.forEach((file: string) => {
                    if (fsExtra.existsSync(file)) {
                        del.sync([file]);
                    }
                });
            });
        });
        afterEach(() => {
            items.forEach(({
                dir: dir,
                dirLocal: dirLocal,
                files: files
            }) => {
                files.forEach((file: string) => {
                    if (fsExtra.existsSync(file)) {
                        del.sync([file]);
                    }
                });
            });
        });
        items.forEach(({
            dir: dir,
            dirLocal: dirLocal,
            files: files
        }) => {
            it(`not exists files generated for "${dirLocal}"`, () => {
                files.forEach((file: string) => {
                    assert.equal(fsExtra.existsSync(file), false);
                });
            });
        });
        it('tsc --pretty', (done: any) => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = './node_modules/.bin/tsc --pretty';

            const base = new Base('', dirRoot);
            base.debug = debug;
            base.commandRunner(commandString).then((data: boolean) => {
                assert.equal(fsExtra.existsSync(file), true);
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
        it(`rucken new ananas --root ./test/fixture`, (done) => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = 'node . new ananas --root ./test/fixture ' + (debug ? ' --verbose' : '');

            assert.equal(fsExtra.existsSync(file), true);

            const base = new Base('', dirRoot);
            base.debug = debug;
            base.commandRunner(commandString).then((data: boolean) => {
                items.forEach(({
                    dir: dir,
                    dirLocal: dirLocal,
                    files: files
                }) => {
                    files.forEach((file: string) => {
                        if (!fsExtra.existsSync(file)) {
                            console.log('Not exists', file);
                        }
                        assert.equal(fsExtra.existsSync(file), true);
                    });
                });
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
    });
});
