"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("./lib");
const base_1 = require("./base");
class Libs extends base_1.Base {
    constructor(folders, rootFolder) {
        super('', rootFolder);
        this.folders = folders;
        this.rootFolder = rootFolder;
        this.name = 'libs';
    }
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.clear());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    build() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.build());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    link() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.link());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    linkNpm() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.linkNpm());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    changeVersion() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.changeVersion());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    extractTranslate() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.extractTranslate());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    po2ts(customOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.po2ts(customOptions));
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    prepare() {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.prepare());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
    makeTsList(customOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const results = [];
            for (let i = 0; i < this.folders.length; i++) {
                const lib = new lib_1.Lib(this.folders[i], this.rootFolder);
                lib.debug = this.debug;
                results.push(yield lib.makeTsList());
            }
            return results.reduce((all, current) => { return all && current; }, true);
        });
    }
}
exports.Libs = Libs;
