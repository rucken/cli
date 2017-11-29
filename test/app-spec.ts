import * as chai from 'chai';
import * as fsExtra from 'fs-extra';
import * as path from 'path';
import * as del from 'del';

import { App } from '../src/lib/app';

const assert = chai.assert;
describe('App', () => {
    const debug = (process.env.TEST_DEBUG === 'true');
    describe('#clear()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirDist = path.resolve(`${dir}/dist`);
        beforeEach(() => {
            if (!fsExtra.existsSync(dirDist)) {
                fsExtra.mkdirSync(dirDist);
            }
        });
        it(`exists ${dirDist}`, () => {
            assert.equal(fsExtra.existsSync(dirDist), true);
        });
        it('del-cli ./test/fixture/apps/app1/src/node_modules ./test/fixture/apps/app1/dist ./test/fixture/apps/app1/.tmp', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.clear().then((data: any) => {
                assert.equal(fsExtra.existsSync(dirDist), false);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#makeTsList()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const indexTsFile = path.resolve(`${dir}/src/index.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(indexTsFile)) {
                del.sync([indexTsFile]);
            }
        });
        it(`not exists ${indexTsFile}`, () => {
            assert.equal(fsExtra.existsSync(indexTsFile), false);
        });
        it('srcgen -x -t make.list.ts.files -f ./srcgen/app1-make.list.ts.files.json', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.makeTsList().then((data: any) => {
                assert.equal(fsExtra.existsSync(indexTsFile), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#build()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirDist = path.resolve(`${dir}/dist`);
        const dirDistIndex = path.resolve(`${dirDist}/index.js`);
        beforeEach(() => {
            if (fsExtra.existsSync(dirDist)) {
                del.sync([dirDist]);
            }
        });
        it(`not exists ${dirDist}`, () => {
            assert.equal(fsExtra.existsSync(dirDist), false);
        });
        it(`not exists ${dirDistIndex}`, () => {
            assert.equal(fsExtra.existsSync(dirDistIndex), false);
        });
        it('ngm build -p ./test/fixture/apps/app1/src --clean', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.build().then((data: any) => {
                assert.equal(fsExtra.existsSync(dirDist), true);
                assert.equal(fsExtra.existsSync(dirDistIndex), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#link()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirDist = path.resolve(`${dir}/../../../../node_modules/@test/app1`);
        const dirDistIndex = path.resolve(`${dirDist}/index.js`);
        beforeEach(() => {
            if (fsExtra.existsSync(dirDist)) {
                del.sync([dirDist]);
            }
        });
        it(`not exists ${dirDist}`, () => {
            assert.equal(fsExtra.existsSync(dirDist), false);
        });
        it(`not exists ${dirDistIndex}`, () => {
            assert.equal(fsExtra.existsSync(dirDistIndex), false);
        });
        it('ngm link -p ./test/fixture/apps/app1/src --here', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.link().then((data: any) => {
                assert.equal(fsExtra.existsSync(dirDist), true);
                assert.equal(fsExtra.existsSync(dirDistIndex), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#linkNpm()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname);
        const dirDist = path.resolve(`${dir}/../../../../node_modules/@test/app1`);
        const dirDistIndex = path.resolve(`${dirDist}/index.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(dirDist)) {
                del.sync([dirDist]);
            }
        });
        it(`not exists ${dirDist}`, () => {
            assert.equal(fsExtra.existsSync(dirDist), false);
        });
        it(`not exists ${dirDistIndex}`, () => {
            assert.equal(fsExtra.existsSync(dirDistIndex), false);
        });
        it('npm link ./test/fixture/apps/app1/src', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = false;
            app.linkNpm().then((data: boolean) => {
                assert.equal(fsExtra.existsSync(dirDist), true);
                assert.equal(fsExtra.existsSync(dirDistIndex), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#linkNpmClear()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirDist = path.resolve(`${dir}/dist/node_modules`);
        beforeEach(() => {
            if (!fsExtra.existsSync(dirDist)) {
                fsExtra.mkdirSync(dirDist);
            }
        });
        it(`exists ${dirDist}`, () => {
            assert.equal(fsExtra.existsSync(dirDist), true);
        });
        it('del-cli ./test/fixture/apps/app1/src/node_modules ./test/fixture/apps/app1/dist/node_modules', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.linkNpmClear().then((data: boolean) => {
                assert.equal(fsExtra.existsSync(dirDist), false);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#changeVersion()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const dirSrc = path.resolve(`${dir}/src`);
        const rootPackagePath = path.resolve(dirRoot + '/package.json');
        const srcPackagePath = path.resolve(dirSrc + '/package.json');

        let rootPackage: any = {};
        let srcPackage: any = {};

        beforeEach(() => {
            if (fsExtra.existsSync(rootPackagePath)) {
                rootPackage = fsExtra.readJSONSync(rootPackagePath);
            }
            if (fsExtra.existsSync(srcPackagePath)) {
                srcPackage = fsExtra.readJSONSync(srcPackagePath);
            }
            srcPackage.version = '';
            fsExtra.writeJSONSync(srcPackagePath, srcPackage, { spaces: 4 });
        });
        it(`version on "${srcPackagePath}" is ''`, () => {
            if (fsExtra.existsSync(srcPackagePath)) {
                srcPackage = fsExtra.readJSONSync(srcPackagePath);
            }
            assert.equal(srcPackage.version, '');
        });
        it('changeVersion ./test/fixture/apps/app1/src', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.changeVersion().then((data: any) => {
                if (fsExtra.existsSync(srcPackagePath)) {
                    srcPackage = fsExtra.readJSONSync(srcPackagePath);
                }
                assert.equal(srcPackage.version, rootPackage.version);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#extractTranslate()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const indexFile = path.resolve(`${dir}/src/i18n/template.pot`);
        beforeEach(() => {
            if (fsExtra.existsSync(indexFile)) {
                del.sync([indexFile]);
            }
        });
        it(`not exists ${indexFile}`, () => {
            assert.equal(fsExtra.existsSync(indexFile), false);
        });
        it('ngx-translate-extract --input ./test/fixture/apps/app1/src --output ./test/fixture/apps/app1/src/i18n/template.pot --format=pot --marker translate --clean', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.extractTranslate().then((data: any) => {
                assert.equal(fsExtra.existsSync(indexFile), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#po2ts()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const translateTsFile = path.resolve(`${dir}/src/i18n/ru.i18n.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(translateTsFile)) {
                del.sync([translateTsFile]);
            }
        });
        it(`not exists ${translateTsFile}`, () => {
            assert.equal(fsExtra.existsSync(translateTsFile), false);
        });
        it('srcgen -x -t convert.po.to.ts -f ./srcgen/convert.po.to.ts.json', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.po2ts().then((data: any) => {
                assert.equal(fsExtra.existsSync(translateTsFile), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
    describe('#prepare()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const translateTsFile = path.resolve(`${dir}/src/i18n/ru.i18n.ts`);
        const indexTsFile = path.resolve(`${dir}/src/index.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(translateTsFile)) {
                del.sync([translateTsFile]);
            }
            if (fsExtra.existsSync(indexTsFile)) {
                del.sync([indexTsFile]);
            }
        });
        it(`not exists ${translateTsFile}`, () => {
            assert.equal(fsExtra.existsSync(translateTsFile), false);
        });
        it(`not exists ${indexTsFile}`, () => {
            assert.equal(fsExtra.existsSync(indexTsFile), false);
        });
        it('npm-run-all app1:tools-extract_translate app1:tools-po2ts app1:tools-make_ts_list', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.prepare().then((data: any) => {
                assert.equal(fsExtra.existsSync(translateTsFile), true);
                assert.equal(fsExtra.existsSync(indexTsFile), true);
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
});
