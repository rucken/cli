import * as chai from 'chai';
import * as del from 'del';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Apps } from '../src/lib/apps';

const assert = chai.assert;
describe('Apps', () => {
    const debug = process.env.DEBUG; 
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        items.push({
            dir: _dir,
            translateTsFile: path.resolve(`${_dir}/src/i18n/ru.i18n.ts`),
            indexTsFile: path.resolve(`${_dir}/src/index.ts`)
        });
        _dir = path.resolve(`${__dirname}/fixture/apps/subFolder/app2`);
        items.push({
            dir: _dir,
            translateTsFile: path.resolve(`${_dir}/src/i18n/ru.i18n.ts`),
            indexTsFile: path.resolve(`${_dir}/src/index.ts`)
        });
        beforeEach(() => {
            items.forEach(({ dir: dir,
                dirRoot: dirRoot,
                translateTsFile: translateTsFile,
                indexTsFile: indexTsFile
            }) => {
                if (fsExtra.existsSync(translateTsFile)) {
                    del.sync([translateTsFile]);
                }
                if (fsExtra.existsSync(indexTsFile)) {
                    del.sync([indexTsFile]);
                }
            });
        });
        items.forEach(({
            dir: dir,
            translateTsFile: translateTsFile,
            indexTsFile: indexTsFile
         }) => {
            it(`not exists ${translateTsFile}`, () => {
                assert.equal(fsExtra.existsSync(translateTsFile), false);
            });
            it(`not exists ${indexTsFile}`, () => {
                assert.equal(fsExtra.existsSync(indexTsFile), false);
            });
        });
        it('npm-run-all apps:tools-extract_translate apps:tools-po2ts apps:tools-make_ts_list', (done) => {
            const dirs = items.map((item: any) => item.dir);
            const app = new Apps(dirs, dirRoot);
            app.debug = debug;
            app.prepare().then((data: boolean) => {
                items.forEach(({
                        dir: dir,
                    translateTsFile: translateTsFile,
                    indexTsFile: indexTsFile
                }) => {
                    assert.equal(fsExtra.existsSync(translateTsFile), true);
                    assert.equal(fsExtra.existsSync(indexTsFile), true);
                });
                done();
            }).catch(function (e) {
                done(e);
            });
        });
    });
});
