import * as commander from 'commander';
import { config } from 'dotenv';
import * as fsExtra from 'fs-extra';
import * as path from 'path';

import { BaseCommand } from '../commands/base.command';
import { BuildCommand } from '../commands/build.command';
import { ClearCommand } from '../commands/clear.command';
import { GeneratorCommand } from '../commands/generator.command';
import { LinkNpmCommand } from '../commands/link-npm.command';
import { LinkCommand } from '../commands/link.command';
import { MakeTsListCommand } from '../commands/make-ts-list.command';
import { PrepareCommand } from '../commands/prepare.command';
import * as _ from 'lodash';

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
            .option('-r, --root [path]', 'root folder (default: current directory)')
            .option('-a, --app [path]',
            'application folder (list of apps taken from ".angular-cli.json" with condition "appRoot===\'\'")')
            .option('-l, --lib [path]',
            'library folder (list of libs taken from ".angular-cli.json" with condition "appRoot===undefined")')
            .option('--verbose', 'show log of work all tasks')
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
            .option('-p, --list-components-postfix [name]',
            'components postfix for collect to name-value object, example {\'users\': UsersGridComponent} it for list-components-postfix="grid" with component class file name="users-grid.component.ts"')
            .action(async (dummy, command) => {
                await (new PrepareCommand(_.merge(this.program, command, dummy))).process();
            });
        this.program
            .command('commands [listOfCommands...]')
            .description('run synchronously many different commands with many different options, for run with options use "~~" instead "--"')
            .action((listOfCommands: string[]) => {
                const binNames = Object.keys(this.package.bin);
                const cwdPackage = fsExtra.readJSONSync(path.resolve(process.cwd() + '/package.json'));
                let binPath: string;
                if (cwdPackage.name === this.package.name) {
                    binPath = 'node .';
                }/*
                if (fsExtra.existsSync(path.resolve(process.cwd() + '/node_modules/' + this.package.name + '/bin/' + binNames[0]))) {
                    binPath = 'node ./node_modules/' + this.package.name + '/bin/' + binNames[0];
                }*/
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
                    if (runner.debug) {
                        command += ' --verbose';
                    }
                    await Promise.resolve(runner.log('commands').info('Run: ' + command));
                    await runner.commandRunner(command);
                    await Promise.resolve(runner.log('commands').info('Done!'));
                });
            });
        this.program
            .command('make-ts-list')
            .option('-p, --list-components-postfix [name]',
            'components postfix for collect to name-value object, example {\'users\': UsersGridComponent} it for list-components-postfix="grid" with component class file name="users-grid.component.ts"')
            .description('make index.ts with import all ts files in application/library')
            .action(async (dummy, command) => {
                await (new MakeTsListCommand(_.merge(this.program, command, dummy))).process();
            });
        this.program
            .command('grid')
            .option('-t, --template [name]', 'template folder name or path', 'web-grid')
            .option('-n, --entity-name [name]', 'entity name')
            .option('-p, --pk-field [name]', 'primary key name', 'id')
            .option('-f, --fields [names]', 'fields of entity', '\'name\',\'title\',\'createdAt\',\'updatedAt\'')
            .option('-d, --date-fields [names]', 'fields of entity', '\'createdAt\',\'updatedAt\'')
            .option('-cl, --core-lib [name]', 'core library name, by default it is first app from ".angular-cli.json" with empty "appRoot"')
            .option('-cf, --core-folder [path]', 'core library path')
            .option('-pl, --platform-lib [name]', 'platform library name, by default it is next app from ".angular-cli.json" with empty "appRoot"')
            .option('-pf, --platform-folder [path]', 'platform library path')
            .description('scaffold model, service, grid, lookup input, modal for edit row in grid, modal for select items from grid with items')
            .action(async (dummy, command) => {
                await (new GeneratorCommand(_.merge(this.program, command, dummy))).processGrid();
            });
        this.program
            .command('page')
            .option('-t, --template [name]', 'template folder name or path', 'web-page')
            .option('-n, --page-name [name]', 'page name')
            .option('-an, --app-name [name]', 'app name, by default it is first app from ".angular-cli.json"')
            .option('-af, --app-folder [path]', 'app path, by default it is first app from ".angular-cli.json"')
            .description('scaffold empty page')
            .action(async (dummy, command) => {
                await (new GeneratorCommand(_.merge(this.program, command, dummy))).processPage();
            });
        this.program
            .command('page+frame')
            .option('-t, --template [name]', 'template folder name or path', 'web-page+frame')
            .option('-p, --page-name [name]', 'page name')
            .option('-f, --frame-name [name]', 'frame name')
            .option('-an, --app-name [name]', 'app name, by default it is first app from ".angular-cli.json"')
            .option('-af, --app-folder [path]', 'app path, by default it is first app from ".angular-cli.json"')
            .description('scaffold empty frame on page')
            .action(async (dummy, command) => {
                await (new GeneratorCommand(_.merge(this.program, command, dummy))).processPageAndFrame();
            });
        this.program
            .command('frame')
            .option('-t, --template [name]', 'template folder name or path', 'web-frame')
            .option('-p, --page-name [name]', 'page name')
            .option('-f, --frame-name [name]', 'frame name')
            .option('-an, --app-name [name]', 'app name, by default it is first app from ".angular-cli.json"')
            .option('-af, --app-folder [path]', 'app path, by default it is first app from ".angular-cli.json"')
            .description('scaffold empty frame')
            .action(async (dummy, command) => {
                await (new GeneratorCommand(_.merge(this.program, command, dummy))).processFrame();
            });
        this.program
            .command('new [name]')
            .option('-t, --template [name]', 'template folder name or path', 'web-app-empty')
            .description('scaffold empty application based on rucken template')
            .action(async (appName, command) => {
                await (new GeneratorCommand(_.merge(this.program, command, { appName: appName }))).processAppEmpty();
            });
        this.program.parse(process.argv);
    }
}

let app = new App();
app.initialize();
