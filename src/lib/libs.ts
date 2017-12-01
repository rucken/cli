import { Lib } from './lib';
import { Base } from './base';

export class Libs extends Base {

    name = 'libs';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear(customOptions?: { package?: any, packages?: any[], folder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.clear(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.build(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.link(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.linkNpm(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion(customOptions?: { package?: any, packages?: any[], rootPackagePath?: string, srcPackagePath?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.changeVersion(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate(customOptions?: { package?: any, packages?: any[], srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.extractTranslate(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async po2ts(customOptions?: { package?: any, packages?: any[], srcFolder?: string, i18nFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.po2ts(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async prepare(customOptions?: {
        package?: any,
        packages?: any[],
        i18nFolder?: string,
        srcFolder?: string,
        listComponentsPostfix?: string,
        rootPackagePath?: string,
        srcPackagePath?: string
    }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.prepare(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: { package?: any, packages?: any[], srcFolder?: string, listComponentsPostfix?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            if (customOptions) {
                customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            }
            results.push(await lib.makeTsList(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}