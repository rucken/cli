"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class App extends base_1.Base {
    constructor(folder, rootFolder) {
        super(folder, rootFolder);
        this.folder = folder;
        this.rootFolder = rootFolder;
        this.name = 'app';
    }
}
exports.App = App;
