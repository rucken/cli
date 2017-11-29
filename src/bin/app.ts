import * as commander from 'commander';

import { ClearCommand } from '../commands/clear.command';
import { BuildCommand } from '../commands/build.command';
import { LinkCommand } from '../commands/link.command';
import { PrepareCommand } from '../commands/prepare.command';
import { LinkNpmCommand } from '../commands/link-npm.command';
import { config } from 'dotenv';

export class App {

    private program: commander.CommanderStatic;
    private package: any;

    constructor() {
        config();
        this.program = commander;
        this.package = require('../../package.json');
    }

    public initialize() {
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
                new ClearCommand(this);
            });
        this.program
            .command('build')
            .description('build application/library')
            .action(function () {
                new BuildCommand(this);
            });
        this.program
            .command('link')
            .description('npm link dist folder of application/library to all packages')
            .action(function () {
                new LinkCommand(this);
            });
        this.program
            .command('link-npm')
            .description('npm link src folder of application/library to all packages')
            .action(function () {
                new LinkNpmCommand(this);
            });
        this.program
            .command('prepare')
            .description('extract-translate + po2ts + make-ts-list')
            .action(function () {
                new PrepareCommand(this);
            });
        this.program.parse(process.argv);
    }
}

let app = new App();
app.initialize();
