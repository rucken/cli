"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@oclif/test");
var fs_1 = require("fs");
var path_1 = require("path");
describe('translate', function () {
    beforeEach(function (done) {
        return fs_1.unlink(path_1.resolve('i18n/template.pot'), function (_err) {
            return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), function (__err) {
                return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/en.i18n.ts'), function (___err) {
                    return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/ru.i18n.ts'), function (____err) {
                        return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/en.i18n.ts'), function (_____err) {
                            return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/template.pot'), function (______err) {
                                return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/template.pot'), function (_______err) {
                                    return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/custom-template.pot'), function (________err) {
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
    afterEach(function (done) {
        return fs_1.unlink(path_1.resolve('i18n/template.pot'), function (_err) {
            return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), function (__err) {
                return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/en.i18n.ts'), function (___err) {
                    return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/ru.i18n.ts'), function (____err) {
                        return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/en.i18n.ts'), function (_____err) {
                            return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/template.pot'), function (______err) {
                                return fs_1.unlink(path_1.resolve('test/fixtures/translate/folder1/i18n/template.pot'), function (_______err) {
                                    return fs_1.unlink(path_1.resolve('test/fixtures/translate/i18n/custom-template.pot'), function (________err) {
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
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'po'])
        .it('runs translate with set folder and format po', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/template.pot'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'po', '-t', 'custom-template'])
        .it('runs translate with set folder and format po, custom template', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/custom-template.pot'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate/folder1', '-f', 'po', '-c'])
        .it('runs translate with set folder and format po', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/folder1/i18n/template.pot'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate/folder1', '-f', 'json', '-c', '-p', 'Core'])
        .it('runs translate with set folder and format json, clean, prefix ', function (_ctx) {
        return fs_1.readFile(path_1.resolve('test/fixtures/translate/folder1/i18n/en.i18n.ts'), 'utf8', function (_err, body) {
            return test_1.expect(body).to.contain("export const CoreEnI18n = {\n  Id: '',\n  dd1: 'dd',\n  dd2: 'dd',\n  dd3: 'dd'\n};\n");
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate/folder1', '-f', 'po', '-c', '-p', 'Core'])
        .it('runs translate with set folder and format po, clean, prefix', function (_ctx) {
        return fs_1.readFile(path_1.resolve('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), 'utf8', function (_err, body) {
            return test_1.expect(body).to.contain("export const CoreRuI18n = {\n  Id: '\u0418\u0434'\n};\n");
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate/folder1', '-f', 'json', '-c'])
        .it('runs translate with set folder and format json + clean', function (_ctx) {
        fs_1.access(path_1.resolve('test/fixtures/translate/folder1/i18n/ru.i18n.ts'), fs_1.constants.F_OK, function (_err) {
            return fs_1.access(path_1.resolve('test/fixtures/translate/folder1/i18n/en.i18n.ts'), fs_1.constants.F_OK, function (__err) {
                if (_err || __err) {
                    test_1.expect(false).to.equal(true);
                }
                else {
                    test_1.expect(true).to.equal(true);
                }
            });
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'po', '-e', 'folder1'])
        .it('runs translate with set folder and format po and excludes', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/template.pot'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'json', '-e', 'folder1'])
        .it('runs translate with set folder and format json and excludes', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/ru.i18n.ts'), fs_1.constants.F_OK, function (_err) {
            return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/en.i18n.ts'), fs_1.constants.F_OK, function (__err) {
                if (_err || __err) {
                    test_1.expect(false).to.equal(true);
                }
                else {
                    test_1.expect(true).to.equal(true);
                }
            });
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'po'])
        .it('runs translate with set folder and format po', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/template.pot'), fs_1.constants.F_OK, function (err) {
            if (err) {
                test_1.expect(false).to.equal(true);
            }
            else {
                test_1.expect(true).to.equal(true);
            }
        });
    });
    test_1.test
        .command(['translate', 'test/fixtures/translate', '-f', 'json'])
        .it('runs translate with set folder and format json', function (_ctx) {
        return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/ru.i18n.ts'), fs_1.constants.F_OK, function (_err) {
            return fs_1.access(path_1.resolve('test/fixtures/translate/i18n/en.i18n.ts'), fs_1.constants.F_OK, function (__err) {
                if (_err || __err) {
                    test_1.expect(false, _err + ', ' + __err).to.equal(true);
                }
                else {
                    test_1.expect(true).to.equal(true);
                }
            });
        });
    });
    test_1.test
        .stderr()
        .command(['translate', 'test/fixtures/not-exists-folder'])
        .it('error in runs translate with set not exists folder', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('The path you supplied was not found');
    });
    test_1.test
        .stderr()
        .command(['translate', 'test/fixtures/not-exists-folder', '-f', 'po'])
        .it('error in runs translate with set not exists folder and format po', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('The path you supplied was not found');
    });
    test_1.test
        .stderr()
        .command(['translate', 'test/fixtures/not-exists-folder', '-f', 'json'])
        .it('error in runs translate with set not exists folder and format json', function (ctx) {
        return test_1.expect(ctx.stderr).to.contain('The path you supplied was not found');
    });
});
//# sourceMappingURL=translate.test.js.map