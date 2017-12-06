import * as chai from 'chai';
import * as del from 'del';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Base } from '../src/lib/base';

const npmRun = require('npm-run');
const assert = chai.assert;

describe('Grid-generator: create base model, service and components for entity "apple"', () => {
    config();
    const debug = process.env.TEST_DEBUG === 'true';
    describe('#prepare()', () => {
        const items: any[] = [];
        const dirRoot = path.resolve(__dirname + '/../');
        let _dirLocal = 'fixture/libs/lib1'
        let _dir = path.resolve(`${__dirname}/${_dirLocal}`);
        items.push({
            dir: _dir,
            dirLocal: `test/${_dirLocal}`,
            files: [
                path.resolve(`${_dir}/src/shared/models/apple.model.ts`),
                path.resolve(`${_dir}/src/shared/services/apples.service.ts`),
            ]
        });
        _dirLocal = 'fixture/libs/subFolder/lib2'
        _dir = path.resolve(`${__dirname}/${_dirLocal}`);
        items.push({
            dir: _dir,
            dirLocal: `test/${_dirLocal}`,
            files: [
                path.resolve(`${_dir}/src/grids/apples-grid/apple-modal/apple-modal.component.html`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-modal/apple-modal.component.scss`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-modal/apple-modal.component.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-modal/apple-modal.module.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-select-input/apple-select-input.component.html`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-select-input/apple-select-input.component.scss`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-select-input/apple-select-input.component.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apple-select-input/apple-select-input.module.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-grid.component.html`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-grid.component.scss`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-grid.component.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-grid.module.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-list-modal/apples-list-modal.component.html`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-list-modal/apples-list-modal.component.scss`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-list-modal/apples-list-modal.component.ts`),
                path.resolve(`${_dir}/src/grids/apples-grid/apples-list-modal/apples-list-modal.module.ts`),
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
        it(`rucken grid --entity-name apple --root ./test/fixture`, (done) => {
            const file = path.resolve(`${dirRoot}/dist/bin/app.js`);
            const commandString = 'node . grid --entity-name apple --root ./test/fixture ' + (debug ? ' --verbose' : '');

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
