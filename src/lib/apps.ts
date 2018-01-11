import { App } from './app';
import { Base } from './base';

export class Apps extends Base {

    name = 'apps';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear(customOptions?: { package?: any, packages?: any[], folder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.clear(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.build(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string, rootPackagePath?: string, distPackagePath?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.link(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm(customOptions?: { package?: any, packages?: any[], folder?: string, srcFolder?: string, rootPackagePath?: string, srcPackagePath?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.linkNpm(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion(customOptions?: { package?: any, packages?: any[], rootPackagePath?: string, srcPackagePath?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.changeVersion(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate(customOptions?: { package?: any, packages?: any[], srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.extractTranslate(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async po2ts(customOptions?: { package?: any, packages?: any[], i18nFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.po2ts(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async prepare(customOptions?: {
        package?: any,
        packages?: any[],
        i18nFolder?: string,
        srcFolder?: string,
        listComponentsPostfix?: string
        rootPackagePath?: string,
        srcPackagePath?: string
    }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : customOptions.package;
            results.push(await app.prepare(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: { package?: any, packages?: any[], listComponentsPostfix?: string, srcFolder?: string }) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            if (!customOptions) {
                customOptions = {};
            }
            customOptions.package = customOptions.packages ? customOptions.packages[i] : null;
            results.push(await app.makeTsList(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}