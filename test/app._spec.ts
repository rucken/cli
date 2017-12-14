import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { App } from '../src/lib/app';
import * as cheerio from 'cheerio';

const assert = chai.assert;
describe('App', () => {
    config();
    const debug = (process.env.TEST_DEBUG === 'true');
    describe('#changeMetaInIndex()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const srcIndexHtmlPath = path.resolve(`${dir}/src/index.html`);
        beforeEach(() => {
            let srcIndexHtml = fsExtra.readFileSync(srcIndexHtmlPath).toString();
            const $ = cheerio.load(srcIndexHtml);
            $('meta[name=version]').attr('content', '');
            srcIndexHtml = $.html();
            fsExtra.writeFileSync(srcIndexHtmlPath, srcIndexHtml);
        });
        it('changeMetaInIndex', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.changeMetaInIndex().then((data: any) => {
                let srcIndexHtml = fsExtra.readFileSync(srcIndexHtmlPath).toString();
                const $ = cheerio.load(srcIndexHtml);
                assert.notEqual($('meta[name=version]').attr('content'), '');
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
    });
    describe('#makeTsList()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const srcIndexTsPath = path.resolve(`${dir}/src/app/index.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(srcIndexTsPath)) {
                del.sync([srcIndexTsPath]);
            }
        });
        it(`not exists ${srcIndexTsPath}`, () => {
            assert.equal(fsExtra.existsSync(srcIndexTsPath), false);
        });
        it('srcgen -x -t make.list.ts.files -f ./srcgen/app1-make.list.ts.files.json', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.makeTsList().then((data: any) => {
                assert.equal(fsExtra.existsSync(srcIndexTsPath), true);
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
    });
    describe('#extractTranslate()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const indexFile = path.resolve(`${dir}/src/app/i18n/template.pot`);
        beforeEach(() => {
            if (fsExtra.existsSync(indexFile)) {
                del.sync([indexFile]);
            }
        });
        it(`not exists ${indexFile}`, () => {
            assert.equal(fsExtra.existsSync(indexFile), false);
        });
        it('ngx-translate-extract --input ./test/fixture/apps/app1/app/src --output ./test/fixture/apps/app1/app/src/i18n/template.pot --format=pot --marker translate --clean', (done) => {
            const app = new App(dir);
            app.debug = debug;
            app.extractTranslate({}).then((data: any) => {
                assert.equal(fsExtra.existsSync(indexFile), true);
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
    });
    describe('#po2ts()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const translateTsFile = path.resolve(`${dir}/src/app/i18n/ru.i18n.ts`);
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
            }).catch((e: any) => {
                done(e);
            });
        });
    });
    describe('#prepare()', () => {
        const dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        const dirRoot = path.resolve(__dirname + '/../');
        const translateTsFile = path.resolve(`${dir}/src/app/i18n/ru.i18n.ts`);
        const srcIndexTsPath = path.resolve(`${dir}/src/app/index.ts`);
        beforeEach(() => {
            if (fsExtra.existsSync(translateTsFile)) {
                del.sync([translateTsFile]);
            }
            if (fsExtra.existsSync(srcIndexTsPath)) {
                del.sync([srcIndexTsPath]);
            }
        });
        it(`not exists ${translateTsFile}`, () => {
            assert.equal(fsExtra.existsSync(translateTsFile), false);
        });
        it(`not exists ${srcIndexTsPath}`, () => {
            assert.equal(fsExtra.existsSync(srcIndexTsPath), false);
        });
        it('npm-run-all app1:tools-extract_translate app1:tools-po2ts app1:tools-make_ts_list', (done) => {
            const app = new App(dir, dirRoot);
            app.debug = debug;
            app.prepare().then((data: any) => {
                assert.equal(fsExtra.existsSync(translateTsFile), true);
                assert.equal(fsExtra.existsSync(srcIndexTsPath), true);
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
    });
});