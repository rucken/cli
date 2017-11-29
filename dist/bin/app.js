"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander = require("commander");
const clear_command_1 = require("../commands/clear.command");
const build_command_1 = require("../commands/build.command");
const link_command_1 = require("../commands/link.command");
const prepare_command_1 = require("../commands/prepare.command");
const link_npm_command_1 = require("../commands/link-npm.command");
const dotenv_1 = require("dotenv");
class App {
    constructor() {
        dotenv_1.config();
        this.program = commander;
        this.package = require('../../package.json');
    }
    initialize() {
        this.program
            .option('-r, --root [path]', 'root folder')
            .option('-a, --app [path]', 'application folder')
            .option('-l, --lib [path]', 'library folder')
            .option('-v, --verbose', 'show log of work all tasks')
            .version(this.package.version);
        this.program
            .command('clear')
            .description('clear all temp and dist folders on application/library')
            .action(function () {
            new clear_command_1.ClearCommand(this);
        });
        this.program
            .command('build')
            .description('build application/library')
            .action(function () {
            new build_command_1.BuildCommand(this);
        });
        this.program
            .command('link')
            .description('npm link dist folder of application/library to all packages')
            .action(function () {
            new link_command_1.LinkCommand(this);
        });
        this.program
            .command('link-npm')
            .description('npm link src folder of application/library to all packages')
            .action(function () {
            new link_npm_command_1.LinkNpmCommand(this);
        });
        this.program
            .command('prepare')
            .description('extract-translate + po2ts + make-ts-list')
            .action(function () {
            new prepare_command_1.PrepareCommand(this);
        });
        this.program.parse(process.argv);
    }
}
exports.App = App;
let app = new App();
app.initialize();
