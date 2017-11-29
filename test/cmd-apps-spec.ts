import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('Apps:run from console', () => {
    config();
    const debug = process.env.TEST_DEBUG === 'true';
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
        it('tsc --pretty', () => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = './node_modules/.bin/tsc --pretty';
            const commandBin = commandString.split(' ')[0];
            const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
            if (debug) {
                console.log('commandRunner#start');
                console.log('commandRunner#', commandString);
                console.log('commandRunner#', file);
            }
            const child = npmRun.spawnSync(
                commandBin,
                commandArgs,
                { cwd: dirRoot }
            );
            if (debug) {
                console.log('commandRunner#status', child.status);
                console.log('commandRunner#stderr', child.stderr.toString());
                console.log('commandRunner#stdout', child.stdout.toString());
                console.log('commandRunner#end');
            }
            assert.equal(fsExtra.existsSync(file), true);
        });
        it('rucken prepare --app --root ./test/fixture', () => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = 'node ' + file + ' prepare --app --root ./test/fixture' + (debug ? ' --verbose' : '');
            const commandBin = commandString.split(' ')[0];
            const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
            if (debug) {
                console.log('commandRunner#start');
                console.log('commandRunner#', commandString);
            }
            assert.equal(fsExtra.existsSync(file), true);
            const child = npmRun.spawnSync(
                commandBin,
                commandArgs,
                { cwd: dirRoot }
            );
            if (debug) {
                console.log('commandRunner#status', child.status);
                console.log('commandRunner#stderr', child.stderr.toString());
                console.log('commandRunner#stdout', child.stdout.toString());
                console.log('commandRunner#end');
            }
            items.forEach(({
                dir: dir,
                translateTsFile: translateTsFile,
                indexTsFile: indexTsFile
            }) => {
                assert.equal(fsExtra.existsSync(translateTsFile), true);
                assert.equal(fsExtra.existsSync(indexTsFile), true);
            });
        });
    });
});
