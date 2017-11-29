import { Lib } from './lib';
import { Base } from './base';

export class Libs extends Base {

    name = 'libs';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.clear(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.build(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.link(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.linkNpm(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.changeVersion(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.extractTranslate(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async po2ts(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.po2ts(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async prepare(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.prepare(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.makeTsList(customOptions))
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}