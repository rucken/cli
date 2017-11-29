import * as del from 'del';
import * as fsExtra from 'fs-extra';
import * as _ from 'lodash';
import * as path from 'path';
import * as log from 'loglevel';

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
    getTempFile(){
        return tmp.fileSync();
    }
    get debug() {
        return this._debug;
    }
    set debug(value: boolean) {
        this._debug = value;
        if (value) {
            log.enableAll();
        } else {
            log.disableAll();
            log.setLevel('info');
        }
    }
    timeout(ms: number) {
        this.log.debug('timeout#start');
        this.log.debug('timeout#', ms);
        return new Promise(resolve =>
            setTimeout(() => {
                this.log.debug('timeout#end');
                resolve(true);
            }, ms)
        );
    }
    get log() {
        if (this.name) {
            return log.getLogger(this.name);
        }
        return log;
    }
    async commandRunner(commandString: string) {
        this.log.debug('commandRunner#start');
        this.log.debug('commandRunner#', commandString);
        const commandBin = commandString.split(' ')[0];
        const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
        const child = npmRun.spawnSync(
            commandBin,
            commandArgs,
            { cwd: path.resolve(__dirname, '..', '..') }
        );
        this.log.debug('commandRunner#status', child.status);
        this.log.debug('commandRunner#stderr', child.stderr.toString());
        this.log.debug('commandRunner#stdout', child.stdout.toString());
        this.log.debug('commandRunner#end');
        return await child.status === 0;
    };
    async clear() {
        this.log.debug('clear#start');
        const folder = path.resolve(this.folder);
        this.log.debug('clear#', folder);
        const commandString = './node_modules/.bin/del-cli ' +
            path.resolve(folder + '/src/node_modules') + ' ' +
            path.resolve(folder + '/dist') + ' ' +
            path.resolve(folder + '/.tmp');
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('clear#', commandString);
            this.log.debug('clear#', `Folder does not exists: ${folder}`);
            this.log.debug('clear#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('clear#end');
        return result;
    }
    async build() {
        this.log.debug('build#start');
        const folder = path.resolve(this.folder + '/src');
        this.log.debug('build#', folder);
        const commandString = 'ngm build -p ' + path.resolve(folder) + ' --clean';
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('build#', commandString);
            this.log.debug('build#', `Folder does not exists: ${folder}`);
            this.log.debug('build#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('build#end');
        return result;
    }
    async link() {
        this.log.debug('link#start');
        const items = [
            await this.linkNpmClear(),
            await this.linkDist()
        ];
        this.log.debug('link#end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm() {
        this.log.debug('linkNpm#start');
        const items = [
            await this.linkNpmClear(),
            await this.linkSrc()
        ];
        this.log.debug('linkNpm#end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkDist() {
        this.log.debug('linkDist#start');
        const folder = path.resolve(this.folder + '/src');
        this.log.debug('linkDist#', folder);
        const commandString = 'ngm link -p ' + path.resolve(folder) + ' --here';
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('linkDist#', commandString);
            this.log.debug('linkDist#', `Folder does not exists: ${folder}`);
            this.log.debug('linkDist#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('linkDist#end');
        return result;
    }
    async linkSrc() {
        this.log.debug('linkSrc#start');
        const folder = path.resolve(this.folder + '/src');
        this.log.debug('linkSrc#', folder);
        const commandString = 'npm link ' + path.resolve(folder);
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('linkSrc#', commandString);
            this.log.debug('linkSrc#', `Folder does not exists: ${folder}`);
            this.log.debug('linkSrc#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('linkSrc#end');
        return result;
    }
    async linkNpmClear() {
        this.log.debug('linkNpmClear#start');
        const folder = path.resolve(this.folder);
        this.log.debug('linkNpmClear#', folder);
        const commandString = './node_modules/.bin/del-cli ' +
            path.resolve(folder + '/src/node_modules') + ' ' +
            path.resolve(folder + '/dist/node_modules');
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('linkNpmClear#', commandString);
            this.log.debug('linkNpmClear#', `Folder does not exists: ${folder}`);
            this.log.debug('linkNpmClear#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('linkNpmClear#end');
        return result;
    }
    async changeVersion() {
        this.log.debug('changeVersion#start');
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
            this.log.debug('changeVersion#writeJSONSync');
        }
        this.log.debug('changeVersion#end');
        return await true;
    }
    async extractTranslate() {
        this.log.debug('extractTranslate#start');
        const folder = path.resolve(this.folder + '/src');
        this.log.debug('extractTranslate#', folder);
        const commandString = 'ngx-translate-extract ' +
            '--input ' + path.resolve(folder) + ' ' +
            '--output ' + path.resolve(folder + '/i18n/template.pot') + ' ' +
            '--format=pot --marker translate --clean';
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('extractTranslate#', commandString);
            this.log.debug('extractTranslate#', `Folder does not exists: ${folder}`);
            this.log.debug('extractTranslate#end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log.debug('extractTranslate#end');
        return result;
    }
    async po2ts(customOptions?: any) {
        this.log.debug('extractTranslate#start');
        const folder = path.resolve(this.folder + '/src/i18n');
        this.log.debug('extractTranslate#', folder);
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
        this.log.debug('extractTranslate#', options);
        const srcgenTemplate = 'convert.po.to.ts';
        const optionsFile = path.resolve(__dirname + '/../../srcgen/temp_' + process.hrtime() + '-convert.po.to.ts.json');
        fsExtra.writeJSONSync(optionsFile, options);
        if (!fsExtra.existsSync(optionsFile)) {
            this.log.debug('extractTranslate#', `File does not exists: ${optionsFile}`);
        }
        const commandString = './node_modules/.bin/srcgen -x -t ' + srcgenTemplate + ' -f ' + optionsFile;
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('extractTranslate#', commandString);
            this.log.debug('extractTranslate#', `Folder does not exists: ${path.resolve(folder)}`);
            this.log.debug('extractTranslate#end');
            return await false;
        }
        let result = await this.commandRunner(commandString);
        if (fsExtra.existsSync(optionsFile)) {
            del.sync([optionsFile]);
        }
        return result;
    }
    async prepare() {
        this.log.debug('prepare#start');
        const results = [
            await this.extractTranslate(),
            await this.po2ts(),
            await this.extractTranslate(),
            await this.makeTsList(),
            await this.changeVersion()
        ];
        this.log.debug('prepare#end');
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        this.log.debug('makeTsList#start');
        const folder = path.resolve(this.folder + '/src');
        this.log.debug('makeTsList#', folder);
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
        this.log.debug('makeTsList#', options);
        const srcgenTemplate = 'make.list.ts.files';
        const optionsFile = path.resolve(__dirname + '/../../srcgen/temp_' + process.hrtime() + '-make.list.ts.files.json');
        fsExtra.writeJSONSync(optionsFile, options);
        if (!fsExtra.existsSync(optionsFile)) {
            this.log.debug('extractTranslate#', `File does not exists: ${optionsFile}`);
        }
        const commandString = './node_modules/.bin/srcgen -x -t ' + srcgenTemplate + ' -f ' + optionsFile;
        if (!fsExtra.existsSync(folder)) {
            this.log.debug('makeTsList#', commandString);
            this.log.debug('makeTsList#', `Folder does not exists: ${folder}`);
            this.log.debug('makeTsList#end');
            return await false;
        }
        let result = await this.commandRunner(commandString);
        if (fsExtra.existsSync(optionsFile)) {
            del.sync([optionsFile]);
        }
        this.log.debug('makeTsList#end');
        return result;
    }
}