import * as commander from 'commander';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { BaseCommand } from '../commands/base.command';
import { BuildCommand } from '../commands/build.command';
import { ClearCommand } from '../commands/clear.command';
import { LinkNpmCommand } from '../commands/link-npm.command';
import { LinkCommand } from '../commands/link.command';
import { MakeTsListCommand } from '../commands/make-ts-list.command';
import { PrepareCommand } from '../commands/prepare.command';

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
            .option('-lcp, --list-components-postfix [name]',
            'components postfix for collect to name-value object, example {\'users\': UsersGridComponent} it for list-components-postfix="grid" with component class file name="users-grid.component.ts"')
            .option('-v, --verbose', 'show log of work all tasks')
            .version(this.package.version);
        this.program
            .command('clear')
            .description('clear all temp and dist folders on application/library')
            .action(async () => {
                await (new ClearCommand(this.program)).process();
            });
        this.program
            .command('build')
            .description('build application/library')
            .action(async () => {
                await (new BuildCommand(this.program)).process();
            });
        this.program
            .command('link')
            .description('npm link dist folder of application/library to all packages')
            .action(async () => {
                await (new LinkCommand(this.program)).process();
            });
        this.program
            .command('link-npm')
            .description('npm link src folder of application/library to all packages')
            .action(async () => {
                await (new LinkNpmCommand(this.program)).process();
            });
        this.program
            .command('prepare')
            .description('extract-translate + po2ts + make-ts-list')
            .action(async (done) => {
                await (new PrepareCommand(this.program)).process();
            });
        this.program
            .command('commands [listOfCommands...]')
            .description('run synchronously many different commands with many different options')
            .action((listOfCommands: string[]) => {
                const binNames = Object.keys(this.package.bin);
                const cwdPackage = fsExtra.readJSONSync(path.resolve(process.cwd() + '/package.json'));
                let binPath: string;
                if (cwdPackage.name === this.package.name) {
                    binPath = 'node .';
                }
                if (fsExtra.existsSync(path.resolve(process.cwd() + '/node_modules/.bin/' + binNames[0]))) {
                    binPath = './node_modules/.bin/' + binNames[0];
                }
                if (!binPath) {
                    binPath = 'node ' + binNames[0];
                }
                const runner = new BaseCommand(this.program);
                const commandsNames = this.program.commands.map((command: any) => command.name());
                const commands = listOfCommands.map(
                    (item: string) =>
                        (commandsNames.indexOf(item.toLowerCase()) !== -1 ? '#COMMAND#' : '') + item
                ).join(' ')
                    .replace(new RegExp('~', 'g'), '-')
                    .split('#COMMAND#')
                    .filter((item: string) => item !== '')
                    .map((item: string) => item.trim())
                    .map((item: string) => binPath + ' ' + item);
                commands.forEach(async (command: string) => {
                    await Promise.resolve(runner.log('commands').info('Run: ' + command));
                    await runner.commandRunner(command);
                    await Promise.resolve(runner.log('commands').info('Done!'));
                });
            });
        this.program
            .command('make-ts-list')
            .description('make index.ts with import all ts files in application/library')
            .action(async () => {
                await (new MakeTsListCommand(this.program)).process();
            });
        this.program.parse(process.argv);
    }
}

let app = new App();
app.initialize();
