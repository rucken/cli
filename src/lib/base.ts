import * as del from 'del';
import * as fsExtra from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';

const getLogger = require('loglevel-colored-level-prefix');
const npmRun = require('npm-run');
const tmp = require('tmp');

export class Base {

    private _debug = false;
    name = '';

    constructor(public folder: string, public rootFolder?: string) {
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
    set debug(value: boolean) {
        this._debug = value;
        if (value) {
            this.log().enableAll();
        } else {
            this.log().disableAll();
            this.log().setLevel('info');
        }
    }
    timeout(ms: number) {
        this.log('timeout').debug('start');
        this.log('timeout').debug(ms);
        return new Promise(resolve =>
            setTimeout(() => {
                this.log('timeout').debug('end');
                resolve(true);
            }, ms)
        );
    }
    log(subName?: string) {
        if (this._debug) {
            return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'trace' });
        }
        return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'info' });
    }
    async commandRunner(commandString: string) {
        this.log('commandRunner').debug('start');
        this.log('commandRunner').debug('rootFolder', this.rootFolder);
        this.log('commandRunner').debug(commandString);
        const commandBin = commandString.split(' ')[0];
        const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
        const child = npmRun.spawnSync(
            commandBin,
            commandArgs,
            { cwd: process.cwd() }
        );
        if (child.status === 0 || child.status === '0') {
            this.log('commandRunner').debug('status', child.status);
            this.log('commandRunner').debug('stderr', child.stderr.toString());
            this.log('commandRunner').debug('stdout', child.stdout.toString());
            this.log('commandRunner').debug('end');
        } else {
            this.log('commandRunner').error('status', child.status);
            this.log('commandRunner').error('stderr', child.stderr.toString());
            this.log('commandRunner').debug('stdout', child.stdout.toString());
            this.log('commandRunner').debug('end');
        }
        return await child.status === 0;
    };
    async clear() {
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
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('clear').debug('end');
        return result;
    }
    async build() {
        this.log('build').debug('start');
        const folder = path.resolve(this.folder + '/src');
        this.log('build').debug(folder);
        const commandString = 'ngm build -p ' + path.resolve(folder) + ' --clean';
        if (!fsExtra.existsSync(folder)) {
            this.log('build').debug(commandString);
            this.log('build').debug(`Folder does not exists: ${folder}`);
            this.log('build').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('build').debug('end');
        return result;
    }
    async link() {
        this.log('link').debug('start');
        const items = [
            await this.linkNpmClear(),
            await this.linkDist()
        ];
        this.log('link').debug('end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm() {
        this.log('linkNpm').debug('start');
        const items = [
            await this.linkNpmClear(),
            await this.linkSrc()
        ];
        this.log('linkNpm').debug('end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkDist() {
        this.log('linkDist').debug('start');
        const folder = path.resolve(this.folder + '/src');
        this.log('linkDist').debug(folder);
        const commandString = 'ngm link -p ' + path.resolve(folder) + ' --here';
        if (!fsExtra.existsSync(folder)) {
            this.log('linkDist').debug(commandString);
            this.log('linkDist').debug(`Folder does not exists: ${folder}`);
            this.log('linkDist').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkDist').debug('end');
        return result;
    }
    async linkSrc() {
        this.log('linkSrc').debug('start');
        const folder = path.resolve(this.folder + '/src');
        this.log('linkSrc').debug(folder);
        const commandString = 'npm link ' + path.resolve(folder);
        if (!fsExtra.existsSync(folder)) {
            this.log('linkSrc').debug(commandString);
            this.log('linkSrc').debug(`Folder does not exists: ${folder}`);
            this.log('linkSrc').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkSrc').debug('end');
        return result;
    }
    async linkNpmClear() {
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
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkNpmClear').debug('end');
        return result;
    }
    async changeVersion() {
        this.log('changeVersion').debug('start');
        const rootPackagePath = path.resolve(this.rootFolder + '/package.json');
        const srcPackagePath = path.resolve(this.folder + '/src/package.json');

        let rootPackage: any = null;
        let srcPackage: any = null;

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
        return await true;
    }
    async extractTranslate() {
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
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('extractTranslate').debug('end');
        return result;
    }
    async po2ts(customOptions?: any) {
        this.log('po2ts').debug('start');
        const folder = path.resolve(this.folder + '/src/i18n');
        this.log('po2ts').debug(folder);
        const options = _.merge(
            {
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
            },
            customOptions ? customOptions : {}
        );
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
            return await false;
        }
        let result = await this.commandRunner(commandString);
        if (fsExtra.existsSync(optionsFile)) {
            del.sync([optionsFile]);
        }
        return result;
    }
    async prepare() {
        this.log('prepare').debug('start');
        const results = [
            await this.extractTranslate(),
            await this.po2ts(),
            await this.extractTranslate(),
            await this.makeTsList(),
            await this.changeVersion()
        ];
        this.log('prepare').debug('end');
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        this.log('makeTsList').debug('start');
        const folder = path.resolve(this.folder + '/src');
        this.log('makeTsList').debug(folder);
        const options = _.merge(
            {
                'scan': {
                    'path': folder,
                    'list': {
                        'name': ''
                    }
                }
            },
            customOptions ? customOptions : {}
        );
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
            return await false;
        }
        let result = await this.commandRunner(commandString);
        if (fsExtra.existsSync(optionsFile)) {
            del.sync([optionsFile]);
        }
        this.log('makeTsList').debug('end');
        return result;
    }
}