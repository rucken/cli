"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@oclif/test");
var fs_1 = require("fs");
describe('config', function () {
    beforeEach(function (done) {
        fs_1.writeFileSync('test/fixtures/config/dev/angular.json', fs_1.readFileSync('test/fixtures/config/dev/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/config/dev/tsconfig.json', fs_1.readFileSync('test/fixtures/config/dev/default-tsconfig.json').toString());
        fs_1.writeFileSync('test/fixtures/config/prod/angular.json', fs_1.readFileSync('test/fixtures/config/prod/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/config/prod/tsconfig.json', fs_1.readFileSync('test/fixtures/config/prod/default-tsconfig.json').toString());
        done();
    });
    afterEach(function (done) {
        fs_1.writeFileSync('test/fixtures/config/dev/angular.json', fs_1.readFileSync('test/fixtures/config/dev/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/config/dev/tsconfig.json', fs_1.readFileSync('test/fixtures/config/dev/default-tsconfig.json').toString());
        fs_1.writeFileSync('test/fixtures/config/prod/angular.json', fs_1.readFileSync('test/fixtures/config/prod/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/config/prod/tsconfig.json', fs_1.readFileSync('test/fixtures/config/prod/default-tsconfig.json').toString());
        done();
    });
    test_1.test
        .command(['config', 'test/fixtures/config/dev', '-m', 'prod'])
        .it('runs config with set folder and prod mode', function (_ctx) {
        var angularConfig;
        var tsconfigConfig;
        try {
            angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/dev/angular.json').toString());
        }
        catch (error) {
            angularConfig = {};
            console.error(error);
        }
        try {
            tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/dev/tsconfig.json').toString());
        }
        catch (error) {
            tsconfigConfig = {};
            console.error(error);
        }
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
    test_1.test
        .command(['config', 'test/fixtures/config/prod', '-m', 'dev'])
        .it('runs config with set folder and dev mode', function (_ctx) {
        var angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/prod/angular.json').toString());
        var tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/prod/tsconfig.json').toString());
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });
    test_1.test
        .command(['config', 'test/fixtures/config/prod', '-m', 'prod'])
        .it('runs config with set folder and prod mode for prod folder', function (_ctx) {
        var angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/prod/angular.json').toString());
        var tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/prod/tsconfig.json').toString());
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
    test_1.test
        .command(['config', 'test/fixtures/config/dev', '-m', 'dev'])
        .it('runs config with set folder and dev mode for dev folder', function (_ctx) {
        var angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/dev/angular.json').toString());
        var tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/config/dev/tsconfig.json').toString());
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });
    test_1.test
        .stderr()
        .command(['config', 'test/fixtures/config/not_exists_folder1'])
        .it('error in runs config with set not exists folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'');
    });
    test_1.test
        .stderr()
        .command(['config', 'test/fixtures/config/without_angular_json'])
        .it('error in runs config without angular.json', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'');
    });
    test_1.test
        .stderr()
        .command(['config', 'test/fixtures/config/without_tsconfig_json'])
        .it('error in runs config without tsconfig.json', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Cannot read property \'compilerOptions\'');
    });
});
//# sourceMappingURL=config.test.js.map