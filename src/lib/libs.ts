import { Lib } from './lib';
import { Base } from './base';

export class Libs extends Base {

    name = 'libs';

    constructor(public folders: string[], public rootFolder: string) {
        super('', rootFolder);
    }
    async clear() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.clear())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async build() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.build())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async link() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.link())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async linkNpm() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.linkNpm())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async changeVersion() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.changeVersion())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async extractTranslate() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.extractTranslate())
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
    async prepare() {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.prepare())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
    async makeTsList(customOptions?: any) {
        const results = [];
        for (let i = 0; i < this.folders.length; i++) {
            const lib = new Lib(this.folders[i], this.rootFolder);
            lib.debug = this.debug;
            results.push(await lib.makeTsList())
        }
        return results.reduce((all: boolean, current: boolean) => { return all && current; }, true);
    }
}