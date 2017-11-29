"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../lib/app");
const apps_1 = require("../lib/apps");
const lib_1 = require("../lib/lib");
const libs_1 = require("../lib/libs");
const base_command_1 = require("./base.command");
class LinkCommand extends base_command_1.BaseCommand {
    constructor(action) {
        super(action);
        this.action = action;
    }
    processLibs(folders, rootFolder) {
        this.log('link').info('Link all libs on ' + this.rootFolder);
        const libs = new libs_1.Libs(folders, rootFolder);
        libs.debug = this.debug;
        libs.link().then((result) => {
            this.log('link').info('Done!');
        }).catch((e) => {
            this.log('link').error(e);
            this.log('link').info('Done with errors!');
        });
    }
    processLib(folder, rootFolder) {
        this.log('link').info('Link lib ' + folder + ' on ' + rootFolder);
        const lib = new lib_1.Lib(folder, rootFolder);
        lib.debug = this.debug;
        lib.link().then((result) => {
            this.log('link').info('Done!');
        }).catch((e) => {
            this.log('link').error(e);
            this.log('link').info('Done with errors!');
        });
    }
    processApps(folders, rootFolder) {
        this.log('link').info('Link all apps on ' + rootFolder);
        const apps = new apps_1.Apps(folders, rootFolder);
        apps.debug = this.debug;
        apps.link().then((result) => {
            this.log('link').info('Done!');
        }).catch((e) => {
            this.log('link').error(e);
            this.log('link').info('Done with errors!');
        });
    }
    processApp(folder, rootFolder) {
        this.log('link').info('Link app ' + this.action.parent.app + ' on ' + rootFolder);
        const app = new app_1.App(folder, rootFolder);
        app.debug = this.debug;
        app.link().then((result) => {
            this.log('link').info('Done!');
        }).catch((e) => {
            this.log('link').error(e);
            this.log('link').info('Done with errors!');
        });
    }
}
exports.LinkCommand = LinkCommand;
