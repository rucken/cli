import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Base } from '../src/lib/base';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('Apps-commands: run from console', () => {
    config();
    const debug = process.env.TEST_DEBUG === 'true';
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dir = path.resolve(`${__dirname}/fixture/apps/app1`);
        items.push({
            dir: _dir,
            translateTsFile: path.resolve(`${_dir}/src/app/i18n/ru.i18n.ts`),
            indexTsFile: path.resolve(`${_dir}/src/app/index.ts`)
        });
        _dir = path.resolve(`${__dirname}/fixture/apps/subFolder/app2`);
        items.push({
            dir: _dir,
            translateTsFile: path.resolve(`${_dir}/src/app/i18n/ru.i18n.ts`),
            indexTsFile: path.resolve(`${_dir}/src/app/index.ts`)
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
                assert.equal(fsExtra.existsSync(translateTsFile), false, 'FIle: ' + translateTsFile);
            });
            it(`not exists ${indexTsFile}`, () => {
                assert.equal(fsExtra.existsSync(indexTsFile), false, 'FIle: ' + indexTsFile);
            });
        });
        it('tsc --pretty', (done: any) => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = './node_modules/.bin/tsc --pretty';

            const base = new Base('', dirRoot);
            base.debug = debug;
            base.commandRunner(commandString).then((data: boolean) => {
                assert.equal(fsExtra.existsSync(file), true, 'FIle: ' + file);
                done();
            }).catch((e: any) => {
                done(e);
            });
        });
        it('rucken commands clear ~~root ./test/fixture prepare ~~root ./test/fixture', (done) => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = 'node . commands clear ~~root ./test/fixture prepare ~~root ./test/fixture' + (debug ? ' --verbose' : '');

            assert.equal(fsExtra.existsSync(file), true, 'FIle: ' + file);

            const base = new Base('', dirRoot);
            base.debug = debug;
            base.commandRunner(commandString).then((data: boolean) => {
                setTimeout(() => {
                    items.forEach(({
                        dir: dir,
                        translateTsFile: translateTsFile,
                        indexTsFile: indexTsFile
                    }) => {
                        assert.equal(fsExtra.existsSync(translateTsFile), true, 'FIle: ' + translateTsFile);
                        assert.equal(fsExtra.existsSync(indexTsFile), true, 'FIle: ' + indexTsFile);
                    });
                    done();
                },
                    1000);
            }).catch((e: any) => {
                done(e);
            });
        });
    });
});
