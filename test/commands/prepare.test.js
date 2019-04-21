"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@oclif/test");
var fs_1 = require("fs");
var path_1 = require("path");
describe('prepare', function () {
    beforeEach(function (done) {
        fs_1.writeFileSync('test/fixtures/prepare/dev/angular.json', fs_1.readFileSync('test/fixtures/prepare/dev/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/dev/libs/project/core/package.json', fs_1.readFileSync('test/fixtures/prepare/dev/libs/project/core/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/dev/tsconfig.json', fs_1.readFileSync('test/fixtures/prepare/dev/default-tsconfig.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/angular.json', fs_1.readFileSync('test/fixtures/prepare/prod/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/libs/project/core/package.json', fs_1.readFileSync('test/fixtures/prepare/prod/libs/project/core/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/tsconfig.json', fs_1.readFileSync('test/fixtures/prepare/prod/default-tsconfig.json').toString());
        fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/i18n/ru.i18n.ts'), function (_err1) {
            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/i18n/template.pot'), function (_err2) {
                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/index.ts'), function (_err3) {
                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/i18n/ru.i18n.ts'), function (_err4) {
                        return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/i18n/template.pot'), function (_err5) {
                            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/index.ts'), function (_err6) {
                                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/i18n/ru.i18n.ts'), function (_err11) {
                                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/i18n/template.pot'), function (_err12) {
                                        return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/index.ts'), function (_err13) {
                                            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/i18n/ru.i18n.ts'), function (_err14) {
                                                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/i18n/template.pot'), function (_err15) {
                                                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/index.ts'), function (_err16) {
                                                        return done();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    afterEach(function (done) {
        fs_1.writeFileSync('test/fixtures/prepare/dev/angular.json', fs_1.readFileSync('test/fixtures/prepare/dev/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/dev/libs/project/core/package.json', fs_1.readFileSync('test/fixtures/prepare/dev/libs/project/core/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/dev/tsconfig.json', fs_1.readFileSync('test/fixtures/prepare/dev/default-tsconfig.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/angular.json', fs_1.readFileSync('test/fixtures/prepare/prod/default-angular.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/libs/project/core/package.json', fs_1.readFileSync('test/fixtures/prepare/prod/libs/project/core/default-package.json').toString());
        fs_1.writeFileSync('test/fixtures/prepare/prod/tsconfig.json', fs_1.readFileSync('test/fixtures/prepare/prod/default-tsconfig.json').toString());
        fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/i18n/ru.i18n.ts'), function (_err1) {
            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/i18n/template.pot'), function (_err2) {
                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/apps/demo/src/app/index.ts'), function (_err3) {
                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/i18n/ru.i18n.ts'), function (_err4) {
                        return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/i18n/template.pot'), function (_err5) {
                            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/dev/libs/project/core/src/index.ts'), function (_err6) {
                                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/i18n/ru.i18n.ts'), function (_err11) {
                                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/i18n/template.pot'), function (_err12) {
                                        return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/apps/demo/src/app/index.ts'), function (_err13) {
                                            return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/i18n/ru.i18n.ts'), function (_err14) {
                                                return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/i18n/template.pot'), function (_err15) {
                                                    return fs_1.unlink(path_1.resolve('test/fixtures/prepare/prod/libs/project/core/src/index.ts'), function (_err16) {
                                                        return done();
                                                    });
                                                });
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    test_1.test
        .command(['prepare', 'test/fixtures/prepare/dev', '-m', 'prod'])
        .it('runs prepare with set folder and prod mode', function (_ctx) {
        var angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/prepare/dev/angular.json').toString());
        var tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/prepare/dev/tsconfig.json').toString());
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(true);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('dist/project/core');
    });
    test_1.test
        .command(['prepare', 'test/fixtures/prepare/prod', '-m', 'dev'])
        .it('runs prepare with set folder and dev mode', function (_ctx) {
        var angularConfig = JSON.parse(fs_1.readFileSync('test/fixtures/prepare/prod/angular.json').toString());
        var tsconfigConfig = JSON.parse(fs_1.readFileSync('test/fixtures/prepare/prod/tsconfig.json').toString());
        test_1.expect(angularConfig.projects.demo.architect.build.configurations.dev.optimization).to.equals(false);
        test_1.expect(tsconfigConfig.compilerOptions.paths['@project/core'][0]).to.equals('libs/project/core/src');
    });
    test_1.test
        .stderr()
        .command(['prepare', 'test/fixtures/prepare/without-projects'])
        .it('error in runs prepare without projects', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('Projects not founded!');
    });
    test_1.test
        .stderr()
        .command(['prepare', 'test/fixtures/prepare/noexists-apps-libs'])
        .it('error in runs prepare with set not exists apps and libs', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('no such file or directory');
    });
    test_1.test
        .stderr()
        .command(['prepare', 'test/fixtures/prepare/not-exists-folder1'])
        .it('error in runs prepare with set not exists folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('no such file or directory');
    });
});
//# sourceMappingURL=prepare.test.js.map