import * as chai from 'chai';
import * as del from 'del';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Libs } from '../src/lib/libs';

const assert = chai.assert;
describe('Libs', () => {
    const debug = process.env.DEBUG === 'true'; 
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dir = path.resolve(`${__dirname}/fixture/libs/lib1`);
        items.push({
            dir: _dir,
            translateTsFile: path.resolve(`${_dir}/src/i18n/ru.i18n.ts`),
            indexTsFile: path.resolve(`${_dir}/src/index.ts`)
        });
        _dir = path.resolve(`${__dirname}/fixture/libs/subFolder/lib2`);
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
        it('npm-run-all libs:tools-extract_translate libs:tools-po2ts libs:tools-make_ts_list', (done) => {
            const dirs = items.map((item: any) => item.dir);
            const lib = new Libs(dirs, dirRoot);
            lib.debug = debug;
            lib.prepare().then((data: boolean) => {
                items.map(({
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
