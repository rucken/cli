"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fsExtra = require("fs-extra");
const _ = require("lodash");
const path = require("path");
const base_1 = require("./base");
class Project extends base_1.Base {
    constructor(rootFolder) {
        super(rootFolder, rootFolder);
        this.rootFolder = rootFolder;
        this.name = 'project';
        this.init();
    }
    init() {
        this.agularCliJson = this.getAgularCliJson();
        this.libsConfigs = (this.agularCliJson.apps ? this.agularCliJson.apps : []).filter((app) => app.appRoot === '');
        this.libsPaths = this.libsConfigs.map((lib) => path.resolve(this.rootFolder + '/' + _.trimStart(lib.root, './') + '/../'));
        this.appsConfigs = (this.agularCliJson.apps ? this.agularCliJson.apps : []).filter((app) => app.appRoot === undefined);
        this.appsPaths = this.appsConfigs.map((app) => path.resolve(this.rootFolder + '/' + _.trimStart(app.root, './') + '/../'));
    }
    getLibPathByName(name) {
        const libs = this.libsConfigs.filter((item) => item.name && item.name === name);
        if (libs.length > 0) {
            return libs[0].root;
        }
        return name;
    }
    getAppPathByName(name) {
        const apps = this.appsConfigs.filter((item) => item.name && item.name === name);
        if (apps.length > 0) {
            return apps[0].root;
        }
        return name;
    }
    getAgularCliJson(angularCliJsonPath) {
        const libs = [];
        let angularCliJson = {};
        angularCliJsonPath = path.resolve(angularCliJsonPath ? angularCliJsonPath : `${this.rootFolder}/.angular-cli.json`);
        if (fsExtra.existsSync(angularCliJsonPath)) {
            angularCliJson = fsExtra.readJSONSync(angularCliJsonPath);
        }
        return angularCliJson;
    }
}
exports.Project = Project;
