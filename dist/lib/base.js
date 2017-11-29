"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const del = require("del");
const fsExtra = require("fs-extra");
const _ = require("lodash");
const path = require("path");
const getLogger = require('loglevel-colored-level-prefix');
const npmRun = require('npm-run');
const tmp = require('tmp');
class Base {
    constructor(folder, rootFolder) {
        this.folder = folder;
        this.rootFolder = rootFolder;
        this._debug = false;
        this.name = '';
        if (this.rootFolder === undefined) {
            this.rootFolder = path.resolve(this.folder + '/../../');
        }
    }
    getTempFile() {
        return tmp.fileSync();
    }
    get debug() {
        return this._debug;
    }
    set debug(value) {
        this._debug = value;
        if (value) {
            this.log().enableAll();
        }
        else {
            this.log().disableAll();
            this.log().setLevel('info');
        }
    }
    timeout(ms) {
        this.log('timeout').debug('start');
        this.log('timeout').debug(ms);
        return new Promise(resolve => setTimeout(() => {
            this.log('timeout').debug('end');
            resolve(true);
        }, ms));
    }
    log(subName) {
        if (this._debug) {
            return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'trace' });
        }
        return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'info' });
    }
    commandRunner(commandString) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('commandRunner').debug('start');
            this.log('commandRunner').debug(commandString);
            const commandBin = commandString.split(' ')[0];
            const commandArgs = commandString.split(' ').filter((arg, index) => index > 0);
            const child = npmRun.spawnSync(commandBin, commandArgs, { cwd: path.resolve(__dirname, '..', '..') });
            if (child.status === 0 || child.status === '0') {
                this.log('commandRunner').debug('status', child.status);
                this.log('commandRunner').debug('stderr', child.stderr.toString());
                this.log('commandRunner').debug('stdout', child.stdout.toString());
                this.log('commandRunner').debug('end');
            }
            else {
                this.log('commandRunner').error('status', child.status);
                this.log('commandRunner').error('stderr', child.stderr.toString());
                this.log('commandRunner').debug('stdout', child.stdout.toString());
                this.log('commandRunner').debug('end');
            }
            return (yield child.status) === 0;
        });
    }
    ;
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('clear').debug('start');
            const folder = path.resolve(this.folder);
            this.log('clear').debug(folder);
            const commandString = './node_modules/.bin/del-cli ' +
                path.resolve(folder + '/src/node_modules') + ' ' +
                path.resolve(folder + '/dist') + ' ' +
                path.resolve(folder + '/.tmp');
            if (!fsExtra.existsSync(folder)) {
                this.log('clear').debug(commandString);
                this.log('clear').debug(`Folder does not exists: ${folder}`);
                this.log('clear').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('clear').debug('end');
            return result;
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('build').debug('start');
            const folder = path.resolve(this.folder + '/src');
            this.log('build').debug(folder);
            const commandString = 'ngm build -p ' + path.resolve(folder) + ' --clean';
            if (!fsExtra.existsSync(folder)) {
                this.log('build').debug(commandString);
                this.log('build').debug(`Folder does not exists: ${folder}`);
                this.log('build').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('build').debug('end');
            return result;
        });
    }
    link() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('link').debug('start');
            const items = [
                yield this.linkNpmClear(),
                yield this.linkDist()
            ];
            this.log('link').debug('end');
            return items.reduce((all, current) => { return all && current; }, true);
        });
    }
    linkNpm() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('linkNpm').debug('start');
            const items = [
                yield this.linkNpmClear(),
                yield this.linkSrc()
            ];
            this.log('linkNpm').debug('end');
            return items.reduce((all, current) => { return all && current; }, true);
        });
    }
    linkDist() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('linkDist').debug('start');
            const folder = path.resolve(this.folder + '/src');
            this.log('linkDist').debug(folder);
            const commandString = 'ngm link -p ' + path.resolve(folder) + ' --here';
            if (!fsExtra.existsSync(folder)) {
                this.log('linkDist').debug(commandString);
                this.log('linkDist').debug(`Folder does not exists: ${folder}`);
                this.log('linkDist').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('linkDist').debug('end');
            return result;
        });
    }
    linkSrc() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('linkSrc').debug('start');
            const folder = path.resolve(this.folder + '/src');
            this.log('linkSrc').debug(folder);
            const commandString = 'npm link ' + path.resolve(folder);
            if (!fsExtra.existsSync(folder)) {
                this.log('linkSrc').debug(commandString);
                this.log('linkSrc').debug(`Folder does not exists: ${folder}`);
                this.log('linkSrc').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('linkSrc').debug('end');
            return result;
        });
    }
    linkNpmClear() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('linkNpmClear').debug('start');
            const folder = path.resolve(this.folder);
            this.log('linkNpmClear').debug(folder);
            const commandString = './node_modules/.bin/del-cli ' +
                path.resolve(folder + '/src/node_modules') + ' ' +
                path.resolve(folder + '/dist/node_modules');
            if (!fsExtra.existsSync(folder)) {
                this.log('linkNpmClear').debug(commandString);
                this.log('linkNpmClear').debug(`Folder does not exists: ${folder}`);
                this.log('linkNpmClear').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('linkNpmClear').debug('end');
            return result;
        });
    }
    changeVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('changeVersion').debug('start');
            const rootPackagePath = path.resolve(this.rootFolder + '/package.json');
            const srcPackagePath = path.resolve(this.folder + '/src/package.json');
            let rootPackage = null;
            let srcPackage = null;
            if (fsExtra.existsSync(rootPackagePath)) {
                rootPackage = fsExtra.readJSONSync(rootPackagePath);
            }
            if (fsExtra.existsSync(srcPackagePath)) {
                srcPackage = fsExtra.readJSONSync(srcPackagePath);
            }
            if (rootPackage && srcPackage) {
                srcPackage.version = rootPackage.version;
                fsExtra.writeJSONSync(srcPackagePath, srcPackage, { spaces: 4 });
                this.log('changeVersion').debug('writeJSONSync');
            }
            this.log('changeVersion').debug('end');
            return yield true;
        });
    }
    extractTranslate() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('extractTranslate').debug('start');
            const folder = path.resolve(this.folder + '/src');
            this.log('extractTranslate').debug(folder);
            const commandString = 'ngx-translate-extract ' +
                '--input ' + path.resolve(folder) + ' ' +
                '--output ' + path.resolve(folder + '/i18n/template.pot') + ' ' +
                '--format=pot --marker translate --clean';
            if (!fsExtra.existsSync(folder)) {
                this.log('extractTranslate').debug(commandString);
                this.log('extractTranslate').debug(`Folder does not exists: ${folder}`);
                this.log('extractTranslate').debug('end');
                return yield false;
            }
            const result = yield this.commandRunner(commandString);
            this.log('extractTranslate').debug('end');
            return result;
        });
    }
    po2ts(customOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('po2ts').debug('start');
            const folder = path.resolve(this.folder + '/src/i18n');
            this.log('po2ts').debug(folder);
            const options = _.merge({
                'po': {
                    'input': {
                        'dir': folder
                    }
                },
                'ts': {
                    'output': {
                        'dir': folder
                    }
                }
            }, customOptions ? customOptions : {});
            this.log('po2ts').debug(options);
            const srcgenTemplate = 'convert.po.to.ts';
            const optionsFile = path.resolve(__dirname + '/../../srcgen/temp_' + process.hrtime() + '-convert.po.to.ts.json');
            fsExtra.writeJSONSync(optionsFile, options);
            if (!fsExtra.existsSync(optionsFile)) {
                this.log('po2ts').debug(`File does not exists: ${optionsFile}`);
            }
            const commandString = 'node ./node_modules/srcgen/bin/srcgen.js -x -t ' + srcgenTemplate + ' -f ' + optionsFile;
            if (!fsExtra.existsSync(folder)) {
                this.log('po2ts').debug(commandString);
                this.log('po2ts').debug(`Folder does not exists: ${path.resolve(folder)}`);
                this.log('po2ts').debug('end');
                return yield false;
            }
            let result = yield this.commandRunner(commandString);
            if (fsExtra.existsSync(optionsFile)) {
                del.sync([optionsFile]);
            }
            return result;
        });
    }
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('prepare').debug('start');
            const results = [
                yield this.extractTranslate(),
                yield this.po2ts(),
                yield this.extractTranslate(),
                yield this.makeTsList(),
                yield this.changeVersion()
            ];
            this.log('prepare').debug('end');
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    makeTsList(customOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            this.log('makeTsList').debug('start');
            const folder = path.resolve(this.folder + '/src');
            this.log('makeTsList').debug(folder);
            const options = _.merge({
                'scan': {
                    'path': folder,
                    'list': {
                        'name': ''
                    }
                }
            }, customOptions ? customOptions : {});
            this.log('makeTsList').debug(options);
            const srcgenTemplate = 'make.list.ts.files';
            const optionsFile = path.resolve(__dirname + '/../../srcgen/temp_' + process.hrtime() + '-make.list.ts.files.json');
            fsExtra.writeJSONSync(optionsFile, options);
            if (!fsExtra.existsSync(optionsFile)) {
                this.log('makeTsList').debug(`File does not exists: ${optionsFile}`);
            }
            const commandString = 'node ./node_modules/srcgen/bin/srcgen.js -x -t ' + srcgenTemplate + ' -f ' + optionsFile;
            if (!fsExtra.existsSync(folder)) {
                this.log('makeTsList').debug(commandString);
                this.log('makeTsList').debug(`Folder does not exists: ${folder}`);
                this.log('makeTsList').debug('end');
                return yield false;
            }
            let result = yield this.commandRunner(commandString);
            if (fsExtra.existsSync(optionsFile)) {
                del.sync([optionsFile]);
            }
            this.log('makeTsList').debug('end');
            return result;
        });
    }
}
exports.Base = Base;
