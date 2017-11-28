import * as chai from 'chai';
import * as del from 'del';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('Apps:run from console', () => {
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
        it('rucken prepare --app --root ./test/fixture', () => {
            const commandString = 'node ./dist/bin/app.js prepare --app --root ./test/fixture';
            const commandBin = commandString.split(' ')[0];
            const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
            const child = npmRun.spawnSync(
                commandBin,
                commandArgs,
                { cwd: dirRoot }
            );
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
