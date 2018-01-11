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
    timeout(customOptions?: { ms?: number }) {
        if (!customOptions) {
            customOptions = {};
        }
        customOptions.ms = customOptions && customOptions.ms ? customOptions.ms : 1000;
        this.log('timeout').debug('start');
        this.log('timeout').debug(customOptions.ms);
        return new Promise(resolve =>
            setTimeout(() => {
                this.log('timeout').debug('end');
                resolve(true);
            }, customOptions.ms)
        );
    }
    log(subName?: string) {
        if (this._debug) {
            return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'trace' });
        }
        return getLogger({ prefix: this.name + (subName ? (this.name ? '#' : '') + subName : ''), level: 'info' });
    }
    async commandRunner(commandString: string, cwdDir?: string) {
        this.log('commandRunner').debug('start');
        this.log('commandRunner').debug('rootFolder', this.rootFolder);
        this.log('commandRunner').debug(commandString);
        const commandBin = commandString.split(' ')[0];
        const commandArgs = commandString.split(' ').filter((arg: string, index: number) => index > 0);
        const child = npmRun.spawnSync(
            commandBin,
            commandArgs,
            { cwd: cwdDir ? cwdDir : process.cwd() }
        );
        const stderrWords = child.stderr ? _.words(child.stderr.toString()).filter((word: string) => word) : [];
        if (child.status === 1 || child.status === '1' || stderrWords.length > 0) {
            this.log('commandRunner').error('status', child.status);
            this.log('commandRunner').error('stderr', child.stderr.toString());
            this.log('commandRunner').debug('stdout', child.stdout.toString());
            this.log('commandRunner').debug('end');
        }
        else {
            this.log('commandRunner').debug('status', child.status);
            this.log('commandRunner').debug('stderr', child.stderr.toString());
            this.log('commandRunner').debug('stdout', child.stdout.toString());
            this.log('commandRunner').debug('end');
        }
        return await child.status === 0;
    };
    async clear(customOptions?: { folder?: string }) {
        this.log('clear').debug('start');
        let folder = path.resolve(this.folder);
        if (customOptions && customOptions.folder) {
            folder = customOptions.folder;
        }
        this.log('clear').debug(folder);
        const commandString = './node_modules/.bin/del-cli ' +
            path.resolve(folder + '/src/package-lock.json') + ' ' +
            path.resolve(folder + '/src/node_modules') + ' ' +
            path.resolve(folder + '/dist') + ' ' +
            path.resolve(folder + '/.tmp') + ' --force';
        if (!fsExtra.existsSync(folder)) {
            this.log('clear').debug(commandString);
            this.log('clear').error(`Folder does not exists: ${folder}`);
            this.log('clear').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('clear').debug('end');
        return result;
    }
    async build(customOptions?: { folder?: string, srcFolder?: string }) {
        this.log('build').debug('start');
        let folder = path.resolve(this.folder + '/src');
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        this.log('build').debug(folder);

        const commandString = 'ng-packagr -p ' + folder + '/ng-package.json';
        if (!fsExtra.existsSync(folder)) {
            this.log('build').debug(commandString);
            this.log('build').error(`Folder does not exists: ${folder}`);
            this.log('build').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('build').debug('end');
        return result;
    }
    async link(customOptions?: { folder?: string, srcFolder?: string, rootPackagePath?: string, distPackagePath?: string }) {
        this.log('link').debug('start');
        const items = [
            await this.linkNpmClear(customOptions),
            await this.linkDist(customOptions),
            await this.linkNpmClear(customOptions),
            await this.updateDependencies(customOptions),
        ];
        this.log('link').debug('end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm(customOptions?: { folder?: string, srcFolder?: string }) {
        this.log('linkNpm').debug('start');
        const items = [
            await this.linkNpmClear(customOptions),
            await this.linkSrc(customOptions),
            await this.linkNpmClear(customOptions)
        ];
        this.log('linkNpm').debug('end');
        return items.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkDist(customOptions?: { folder?: string, srcFolder?: string }) {
        this.log('linkDist').debug('start');
        let folder = path.resolve(this.folder + '/dist');
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        this.log('linkDist').debug(folder);
        const commandString = 'npm link ' + folder;
        if (!fsExtra.existsSync(folder)) {
            this.log('linkDist').debug(commandString);
            this.log('linkDist').error(`Folder does not exists: ${folder}`);
            this.log('linkDist').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkDist').debug('end');
        return result;
    }
    async linkSrc(customOptions?: { folder?: string, srcFolder?: string }) {
        this.log('linkSrc').debug('start');
        let folder = path.resolve(this.folder + '/src');
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        this.log('linkSrc').debug(folder);
        const commandString = 'npm link ' + path.resolve(folder);
        if (!fsExtra.existsSync(folder)) {
            this.log('linkSrc').debug(commandString);
            this.log('linkSrc').error(`Folder does not exists: ${folder}`);
            this.log('linkSrc').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkSrc').debug('end');
        return result;
    }
    async linkNpmClear(customOptions?: { folder?: string }) {
        this.log('linkNpmClear').debug('start');
        let folder = path.resolve(this.folder);
        if (customOptions && customOptions.folder) {
            folder = customOptions.folder;
        }
        this.log('linkNpmClear').debug(folder);
        const commandString = './node_modules/.bin/del-cli ' +
            path.resolve(folder + '/src/package-lock.json') + ' ' +
            path.resolve(folder + '/dist/package-lock.json') + ' ' +
            path.resolve(folder + '/src/node_modules') + ' ' +
            path.resolve(folder + '/dist/node_modules') + ' --force';
        if (!fsExtra.existsSync(folder)) {
            this.log('linkNpmClear').debug(commandString);
            this.log('linkNpmClear').error(`Folder does not exists: ${folder}`);
            this.log('linkNpmClear').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('linkNpmClear').debug('end');
        return result;
    }
    async changeVersion(customOptions?: { rootPackagePath?: string, srcPackagePath?: string }) {
        this.log('changeVersion').debug('start');
        let rootPackagePath = path.resolve(this.rootFolder + '/package.json');
        let srcPackagePath = path.resolve(this.folder + '/src/package.json');
        if (customOptions && customOptions.rootPackagePath) {
            rootPackagePath = customOptions.rootPackagePath;
        }
        if (customOptions && customOptions.srcPackagePath) {
            srcPackagePath = customOptions.srcPackagePath;
        }

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
    async updateDependencies(customOptions?: { rootPackagePath?: string, distPackagePath?: string }) {
        this.log('updateDependencies').debug('start');
        let rootPackagePath = path.resolve(this.rootFolder + '/package.json');
        let distPackagePath = path.resolve(this.folder + '/dist/package.json');
        if (customOptions && customOptions.rootPackagePath) {
            rootPackagePath = customOptions.rootPackagePath;
        }
        if (customOptions && customOptions.distPackagePath) {
            distPackagePath = customOptions.distPackagePath;
        }

        let rootPackage: any = null;
        let distPackage: any = null;

        if (fsExtra.existsSync(rootPackagePath)) {
            rootPackage = fsExtra.readJSONSync(rootPackagePath);
        }
        if (fsExtra.existsSync(distPackagePath)) {
            distPackage = fsExtra.readJSONSync(distPackagePath);
        }
        if (rootPackage && distPackage) {
            for (let key in rootPackage) {
                if (key.toLowerCase().indexOf('dependencies') !== -1) {
                    let dependencies = rootPackage[key];
                    if (distPackage[key]) {
                        for (let devKey in dependencies) {
                            if (distPackage[key][devKey] === '*') {
                                distPackage[key][devKey] = dependencies[devKey];
                                if (key === 'dependencies' &&
                                    distPackage['peerDependencies'] &&
                                    distPackage['peerDependencies'][devKey] === '*') {
                                    distPackage['peerDependencies'][devKey] = dependencies[devKey];
                                }
                            }
                        }
                    }
                }
            }
            fsExtra.writeJSONSync(distPackagePath, distPackage, { spaces: 4 });
            this.log('updateDependencies').debug('writeJSONSync');
        }
        this.log('updateDependencies').debug('end');
        return await true;
    }
    async extractTranslate(customOptions?: { srcFolder?: string }) {
        this.log('extractTranslate').debug('start');
        let folder = path.resolve(this.folder + '/src');
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        this.log('extractTranslate').debug(folder);
        const commandString = 'ngx-translate-extract ' +
            '--input ' + path.resolve(folder) + ' ' +
            '--output ' + path.resolve(folder + '/i18n/template.pot') + ' ' +
            '--format=pot --marker translate --clean';
        if (!fsExtra.existsSync(folder)) {
            this.log('extractTranslate').debug(commandString);
            this.log('extractTranslate').error(`Folder does not exists: ${folder}`);
            this.log('extractTranslate').debug('end');
            return await false;
        }
        const result = await this.commandRunner(commandString);
        this.log('extractTranslate').debug('end');
        return result;
    }
    async po2ts(customOptions?: { i18nFolder?: string, package?: any }) {
        let folder = path.resolve(this.folder + '/src/i18n');
        let packageData: any = { name: '' };
        if (customOptions && customOptions.i18nFolder) {
            folder = customOptions.i18nFolder;
        }
        if (customOptions && customOptions.package) {
            packageData = customOptions.package;
        }
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
                },
                'package': packageData
            }
        );
        return await this.srcgen(
            folder,
            'po2ts',
            'utils-convert.po.to.ts',
            options
        );
    }
    async prepare(customOptions?: {
        i18nFolder?: string,
        srcFolder?: string,
        package?: any,
        listComponentsPostfix?: string
        rootPackagePath?: string,
        srcPackagePath?: string
    }) {
        this.log('prepare').debug('start');
        const results = [
            await this.extractTranslate(customOptions),
            await this.po2ts(customOptions),
            await this.extractTranslate(customOptions),
            await this.makeTsList(customOptions),
            await this.makeTsList(customOptions),
            await this.changeVersion(customOptions)
        ];
        this.log('prepare').debug('end');
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: { srcFolder?: string, package?: any, listComponentsPostfix?: string }) {
        let folder = path.resolve(this.folder + '/src');
        let packageData: any = { name: '' };
        let listComponentsPostfix = '';
        if (customOptions && customOptions.srcFolder) {
            folder = customOptions.srcFolder;
        }
        if (customOptions && customOptions.package) {
            packageData = customOptions.package;
        }
        if (customOptions && customOptions.listComponentsPostfix) {
            listComponentsPostfix = customOptions.listComponentsPostfix;
        }
        const options = _.merge(
            {
                'scan': {
                    'path': folder,
                    'list': {
                        'name': listComponentsPostfix
                    }
                },
                'package': packageData
            }
        );
        return await this.srcgen(
            folder,
            'makeTsList',
            'utils-make.list.ts.files',
            options
        );
    }
    async srcgen(
        folder: string,
        name: string,
        templateName: string,
        options: any,
        destPath?: string
    ) {
        this.log(name).debug('start');
        this.log(name).debug(folder);
        this.log(name).debug(options);
        this.log(name).debug(destPath);
        const destPathArgs = destPath ? ' -d ' + destPath : '';
        let srcgenTemplate = path.resolve(__dirname + '/../../srcgen/' + templateName);
        if (!fsExtra.pathExistsSync(srcgenTemplate)) {
            srcgenTemplate = templateName;
        }
        this.log(name).debug(srcgenTemplate);
        const optionsFile = path.resolve(__dirname + '/../../srcgen/temp_' + process.hrtime() + '-' + path.basename(srcgenTemplate) + '.json');
        fsExtra.writeJSONSync(optionsFile, options);
        if (!fsExtra.existsSync(optionsFile)) {
            this.log(name).error(`File does not exists: ${optionsFile}`);
        }
        const commandString = 'node ./node_modules/srcgen/bin/srcgen.js -x -t ' + srcgenTemplate + ' -f ' + optionsFile + destPathArgs;
        if (!fsExtra.existsSync(folder)) {
            this.log(name).debug(commandString);
            this.log(name).error(`Folder does not exists: ${folder}`);
            this.log(name).debug('end');
            return await false;
        }
        let result = await this.commandRunner(commandString);
        if (fsExtra.existsSync(optionsFile)) {
            del.sync([optionsFile], { force: true });
        }
        this.log(name).debug('end');
        return result;
    }
}