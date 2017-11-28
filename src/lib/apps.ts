import { App } from './app';
import { Base } from './base';

export class Apps extends Base {

    name = 'apps';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.clear());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.build());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.link());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.linkNpm());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.changeVersion());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.extractTranslate());
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
    async prepare() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.prepare());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const app = new App(this.folders[i], this.rootFolder);
            app.debug = this.debug;
            results.push(await app.makeTsList());
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}