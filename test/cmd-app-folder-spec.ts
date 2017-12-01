import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Base } from '../src/lib/base';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('App-command: run from console without ".angular-cli.json"', () => {
    config();
    const debug = process.env.TEST_DEBUG === 'true';
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dirLocal = 'fixture/apps/app3'
        let _dir = path.resolve(`${__dirname}/${_dirLocal}`);
        items.push({
            dir: _dir,
            dirLocal: `test/${_dirLocal}`,
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
                assert.equal(fsExtra.existsSync(translateTsFile), false);
            });
            it(`not exists ${indexTsFile}`, () => {
                assert.equal(fsExtra.existsSync(indexTsFile), false);
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

        items.forEach(({
            dir: dir,
            dirLocal: dirLocal,
            translateTsFile: translateTsFile,
            indexTsFile: indexTsFile
        }) => {
            it(`rucken prepare --app ${dirLocal}`, (done) => {
                const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
                const commandString = 'node . prepare --app ' + dirLocal + ' ' + (debug ? ' --verbose' : '');

                assert.equal(fsExtra.existsSync(file), true);

                const base = new Base('', dirRoot);
                base.debug = debug;
                base.commandRunner(commandString).then((data: boolean) => {
                    assert.equal(fsExtra.existsSync(translateTsFile), true);
                    assert.equal(fsExtra.existsSync(indexTsFile), true);
                    done();
                }).catch((e: any) => {
                    done(e);
                });
            });
        });
    });
});
