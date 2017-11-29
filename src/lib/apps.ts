import { App } from './app';
import { Base } from './base';

export class Apps extends Base {

    name = 'apps';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.clear(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.build(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.link(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.linkNpm(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.changeVersion(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.extractTranslate(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async po2ts(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.po2ts(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async prepare(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.prepare(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.makeTsList(customOptions));
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}