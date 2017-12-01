import { Base } from './base';
import * as path from 'path';
import * as fsExtra from 'fs-extra';
import * as _ from 'lodash';

export class App extends Base {
    name = 'app';
    constructor(public folder: string, public rootFolder?: string) {
        super(folder, rootFolder)
    }
    async clear(customOptions: {}) {
        this.log('clear').debug('dummy');
        return await true;
    }
    async build(customOptions: {}) {
        this.log('build').debug('dummy');
        return await true;
    }
    async link(customOptions: {}) {
        this.log('link').debug('dummy');
        return await true;
    }
    async linkNpm(customOptions: {}) {
        this.log('linkNpm').debug('dummy');
        return await true;
    }
    async linkDist(customOptions: {}) {
        this.log('linkDist').debug('dummy');
        return await true;
    }
    async linkSrc(customOptions: {}) {
        this.log('linkSrc').debug('dummy');
        return await true;
    }
    async linkNpmClear(customOptions: {}) {
        this.log('linkNpmClear').debug('dummy');
        return await true;
    }
    async changeVersion(customOptions: {}) {
        let rootPackagePath = path.resolve(this.rootFolder + '/package.json');
        let srcPackagePath = path.resolve(this.folder + '/src/app/package.json');
        return await super.changeVersion({
            rootPackagePath: rootPackagePath,
            srcPackagePath: srcPackagePath
        });
    }
    async extractTranslate(customOptions: {}) {
        let srcFolder = path.resolve(this.folder + '/src/app');
        return await super.extractTranslate({
            srcFolder: srcFolder
        });
    }
    async po2ts(customOptions?: {
        package?: any
    }) {
        let i18nFolder = path.resolve(this.folder + '/src/app/i18n');
        return await super.po2ts({
            i18nFolder: i18nFolder,
            package: customOptions && customOptions.package ? customOptions.package : null
        });
    }
    async makeTsList(customOptions?: {
        package?: any,
        listComponentsPostfix?: string
    }) {
        let srcFolder = path.resolve(this.folder + '/src/app');
        return await super.makeTsList({
            srcFolder: srcFolder,
            package: customOptions && customOptions.package ? customOptions.package : null,
            listComponentsPostfix: customOptions && customOptions.listComponentsPostfix ? customOptions.listComponentsPostfix : null
        });
    }
}