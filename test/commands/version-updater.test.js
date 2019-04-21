"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@oclif/test");
var fs_1 = require("fs");
describe('version-updater', function () {
    beforeEach(function (done) {
        fs_1.writeFileSync('test/fixtures/version-updater/folder1/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder1/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/version-updater/folder2_without_peerDependencies/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder2_without_peerDependencies/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/version-updater/folder3_without_dependencies/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder3_without_dependencies/default-package.json').toString());
        done();
    });
    afterEach(function (done) {
        fs_1.writeFileSync('test/fixtures/version-updater/folder1/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder1/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/version-updater/folder2_without_peerDependencies/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder2_without_peerDependencies/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/version-updater/folder3_without_dependencies/package.json', fs_1.readFileSync('test/fixtures/version-updater/folder3_without_dependencies/default-package.json').toString());
        done();
    });
    test_1.test
        .command(['version-updater', 'test/fixtures/version-updater/folder1', '-r', 'test/fixtures/version-updater'])
        .it('runs version-updater with set root folder', function (_ctx) {
        var rootConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/package.json').toString());
        var folderConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/folder1/package.json').toString());
        test_1.expect(rootConfig.version).to.equals(folderConfig.version);
        Object.keys(folderConfig['peerDependencies']).forEach(function (key) {
            return test_1.expect(folderConfig['peerDependencies'][key]).to.equals(rootConfig['dependencies'][key]);
        });
        Object.keys(folderConfig['dependencies']).forEach(function (key) {
            return test_1.expect(folderConfig['dependencies'][key]).to.equals(rootConfig['dependencies'][key]);
        });
    });
    test_1.test
        .command(['version-updater', 'test/fixtures/version-updater/folder2_without_peerDependencies', '-r', 'test/fixtures/version-updater'])
        .it('runs version-updater with set root folder and without peerDependencies', function (_ctx) {
        var rootConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/package.json').toString());
        var folderConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/folder2_without_peerDependencies/package.json').toString());
        test_1.expect(rootConfig.version).to.equals(folderConfig.version);
        test_1.expect(folderConfig['peerDependencies']).to.equals(undefined);
        Object.keys(folderConfig['dependencies']).forEach(function (key) {
            return test_1.expect(folderConfig['dependencies'][key]).to.equals(rootConfig['dependencies'][key]);
        });
    });
    test_1.test
        .command(['version-updater', 'test/fixtures/version-updater/folder3_without_dependencies', '-r', 'test/fixtures/version-updater'])
        .it('runs version-updater with set root folder and without dependencies', function (_ctx) {
        var rootConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/package.json').toString());
        var folderConfig = JSON.parse(fs_1.readFileSync('test/fixtures/version-updater/folder3_without_dependencies/package.json').toString());
        test_1.expect(rootConfig.version).to.equals(folderConfig.version);
        test_1.expect(folderConfig['dependencies']).to.equals(undefined);
        Object.keys(folderConfig['peerDependencies']).forEach(function (key) {
            return test_1.expect(folderConfig['peerDependencies'][key]).to.equals(rootConfig['dependencies'][key]);
        });
    });
    test_1.test
        .stderr()
        .command(['version-updater'])
        .it('error in runs version-updater without arguments', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Source and destination is equals');
    });
    test_1.test
        .stderr()
        .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1', '-r', 'test/fixtures/version-updater'])
        .it('error in runs version-updater with set not exists root folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot set property \'version\'');
    });
    test_1.test
        .stderr()
        .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1', '-r', 'test/fixtures/not_exists_/version-updater'])
        .it('error in runs version-updater with set not exists folders', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot read property \'version\'');
    });
    test_1.test
        .stderr()
        .command(['version-updater', 'test/fixtures/version-updater/not_exists_folder1'])
        .it('error in runs version-updater with set not exists folders and no set root folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot set property \'version\'');
    });
});
//# sourceMappingURL=version-updater.test.js.map