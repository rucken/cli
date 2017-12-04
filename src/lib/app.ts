import * as cheerio from 'cheerio';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { Base } from './base';

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
    async changeMetaInIndex(customOptions?: {
        rootPackagePath?: string,
        srcPackagePath?: string,
        srcIndexHtmlPath?: string,
        srcPackage?: {
            version?: string
        }
    }) {
        this.log('changeMetaInIndex').debug('start');
        let rootPackagePath = path.resolve(this.rootFolder + '/package.json');
        let srcPackagePath = path.resolve(this.folder + '/src/app/package.json');
        let srcIndexHtmlPath = path.resolve(this.folder + '/src/index.html');
        let srcIndexHtml = '';
        let srcPackage: any = {};
        if (!customOptions) {
            customOptions = {};
        }
        if (customOptions.rootPackagePath) {
            rootPackagePath = customOptions.rootPackagePath;
        }
        if (customOptions.srcPackagePath) {
            srcPackagePath = customOptions.srcPackagePath;
        }
        if (customOptions.srcIndexHtmlPath) {
            srcIndexHtmlPath = customOptions.srcIndexHtmlPath;
        }
        if (customOptions.srcPackage) {
            srcPackage = customOptions.srcPackage;
        } else {
            if (fsExtra.existsSync(srcPackagePath)) {
                srcPackage = fsExtra.readJSONSync(srcPackagePath);
            } else {
                if (fsExtra.existsSync(rootPackagePath)) {
                    srcPackage = fsExtra.readJSONSync(rootPackagePath);
                }
            }
        }
        this.log('changeMetaInIndex').debug('srcPackagePath', srcPackagePath);
        this.log('changeMetaInIndex').debug('srcIndexHtmlPath', srcIndexHtmlPath);
        this.log('changeMetaInIndex').debug('srcPackage', srcPackage);
        if (fsExtra.existsSync(srcIndexHtmlPath)) {
            srcIndexHtml = fsExtra.readFileSync(srcIndexHtmlPath).toString();
            this.log('changeMetaInIndex').debug('readFileSync', srcIndexHtml);
            const $ = cheerio.load(srcIndexHtml);
            $('meta[name=version]').attr('content', srcPackage.version);
            srcIndexHtml = $.html();
            fsExtra.writeFileSync(srcIndexHtmlPath, srcIndexHtml);
            this.log('changeMetaInIndex').debug('writeFileSync', srcIndexHtml);
            this.log('changeMetaInIndex').debug('end');
            return await true;
        } else {
            this.log('changeMetaInIndex').debug(`File does not exists: ${srcIndexHtmlPath}`);
        }
        this.log('changeMetaInIndex').debug('end');
        return await false;
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
            await this.changeVersion(customOptions),
            await this.changeMetaInIndex(customOptions)
        ];
        this.log('prepare').debug('end');
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}