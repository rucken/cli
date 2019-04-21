"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@oclif/test");
var fs_1 = require("fs");
var path_1 = require("path");
describe('make-ts-list', function () {
    beforeEach(function (done) {
        return fs_1.unlink(path_1.resolve('index-custom.txt'), function (_err) {
            return fs_1.unlink(path_1.resolve('test/fixtures/make-ts-list/index.ts'), function (__err) {
                return fs_1.unlink(path_1.resolve('test/fixtures/make-ts-list/index-custom.txt'), function (___err) {
                    return done();
                });
            });
        });
    });
    afterEach(function (done) {
        return fs_1.unlink(path_1.resolve('index-custom.txt'), function (_err) {
            return fs_1.unlink(path_1.resolve('test/fixtures/make-ts-list/index.ts'), function (__err) {
                return fs_1.unlink(path_1.resolve('test/fixtures/make-ts-list/index-custom.txt'), function (___err) {
                    return done();
                });
            });
        });
    });
    test_1.test
        .command(['make-ts-list', '-i', 'index-custom.txt'])
        .it('runs make-ts-list without set folder and custom index file name', function (_ctx) {
        return fs_1.access(path_1.resolve('index-custom.txt'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['make-ts-list', 'test/fixtures/make-ts-list', '-i', 'index-custom.txt'])
        .it('runs make-ts-list with set folder and custom index file name', function (_ctx) {
        return fs_1.readFile(path_1.resolve('test/fixtures/make-ts-list/index-custom.txt'), 'utf8', function (_err, body) {
            return test_1.expect(body).to.contain("export * from './class1';\nexport * from './folder1/class2';\n");
        });
    });
    test_1.test
        .command(['make-ts-list', 'test/fixtures/make-ts-list'])
        .it('runs make-ts-list with set folder', function (_ctx) {
        return fs_1.readFile(path_1.resolve('test/fixtures/make-ts-list/index.ts'), 'utf8', function (_err, body) {
            return test_1.expect(body).to.contain("export * from './class1';\nexport * from './folder1/class2';\n");
        });
    });
    test_1.test
        .command(['make-ts-list', 'test/fixtures/make-ts-list', '-e', 'folder1', '-e', 'node_modules', '-i', 'index-custom.txt'])
        .it('runs make-ts-list with set folder, excludes and custom index file name ', function (_ctx) {
        return fs_1.readFile(path_1.resolve('test/fixtures/make-ts-list/index-custom.txt'), 'utf8', function (_err, body) {
            return test_1.expect(body).to.contain("export * from './class1';\n");
        });
    });
    test_1.test
        .stdout()
        .stderr()
        .command(['make-ts-list', '-i', 'not-exists-folder/index.ts'])
        .it('error in runs make-ts-list with set not exists folder for index.ts', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('ENOENT');
    });
    test_1.test
        .stdout()
        .stderr()
        .command(['make-ts-list', 'test/fixtures/not-exists-folder'])
        .it('error in runs make-ts-list with set not exists folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('ENOENT');
    });
});
//# sourceMappingURL=make-ts-list.test.js.map