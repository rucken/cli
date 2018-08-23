@rucken/cli
===========

Console tools for create and build Angular6+ application based on [rucken](https://github.com/rucken) template

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/cli.svg)](https://greenkeeper.io/)
[![Version](https://img.shields.io/npm/v/@rucken/cli.svg)](https://npmjs.org/package/@rucken/cli)
[![Build Status][travis-image]][travis-url]
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/rucken/cli?branch=master&svg=true)](https://ci.appveyor.com/project/rucken/cli/branch/master)
[![Codecov](https://codecov.io/gh/rucken/cli/branch/develop/graph/badge.svg)](https://codecov.io/gh/rucken/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@rucken/cli.svg)](https://npmjs.org/package/@rucken/cli)
[![License](https://img.shields.io/npm/l/@rucken/cli.svg)](https://github.com/rucken/cli/blob/master/package.json)
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]

* [What is Rucken?](#what-is-rucken)
* [Install](#install)
* [Generators](#generators)
* [Commands](#commands)

# What is Rucken?
<!-- what-is-rucken -->
- **Core** - Base entities and services for create applications on `Angular6+`, include work with users, groups and permissions.
- **Web** - Base ui grids and inputs and etc. for manage users, groups and permissions.
<!-- what-is-ruckenstop -->

# Install
<!-- install -->
```sh-session
$ npm install -g @rucken/cli
```
<!-- installstop -->
# Generators
<!-- generators -->
* [`rucken new:angular [FOLDER]`](#rucken-new-angular-folder)
* [`rucken entity:angular [FOLDER]`](#rucken-entity-angular-folder)
* [`rucken entity:nestjs [FOLDER]`](#rucken-entity-nestjs-folder)

## `rucken new:angular [FOLDER]`

generate frontend web empty Angular 6+ application based on Rucken template

```
USAGE
  $ rucken new:angular [FOLDER]

OPTIONS
  -e, --email=email        email
  -h, --help               show CLI help
  -n, --name=name          (required) application name on ke-bab case
  -u, --username=username  username
```

_See code: [src\commands\new.ts](https://github.com/rucken/cli/blob/develop/src/commands/angular-new.ts)_

## `rucken entity:angular [FOLDER]`

generate frontend model, service, grid, lookup input, modal for edit row in grid, modal for select items from grid with items for Angular 6+ application based on Rucken template

```
USAGE
  $ rucken entity:angular [FOLDER]

OPTIONS
  -a, --app=app            application name in angular.json
  -c, --core=core          core library name in angular.json
  -e, --email=email        email
  -f, --fields=fields      [default: [name]] entity fields
  -h, --help               show CLI help
  -n, --name=name          (required) entity singular name on ke-bab case
  -u, --username=username  username
  -w, --web=web            web library name in angular.json
```

_See code: [src\commands\entity.ts](https://github.com/rucken/cli/blob/develop/src/commands/angular-entity.ts)_

## `rucken entity:nestjs [FOLDER]`

generate dto, entity, service and controller for NestJS backend

```
USAGE
  $ rucken entity:nestjs [FOLDER]

OPTIONS
  -a, --app=app            application name in .nestcli.json
  -c, --core=core          core library name in .nestcli.json
  -e, --email=email        email
  -f, --fields=fields      [default: [name]] entity fields
  -h, --help               show CLI help
  -n, --name=name          (required) entity singular name on ke-bab case
  -u, --username=username  username
```

_See code: [src\commands\entity.ts](https://github.com/rucken/cli/blob/develop/src/commands/angular-entity.ts)_

<!-- generatorsstop -->

# Commands
<!-- commands -->
* [`rucken config [FOLDER]`](#rucken-config-folder)
* [`rucken help [COMMAND]`](#rucken-help-command)
* [`rucken make-ts-list [FOLDER]`](#rucken-make-ts-list-folder)
* [`rucken prepare [FOLDER]`](#rucken-prepare-folder)
* [`rucken translate [FOLDER]`](#rucken-translate-folder)
* [`rucken version-updater [FOLDER]`](#rucken-version-updater-folder)

## `rucken config [FOLDER]`

change angular.json properties and tsconfig.json properties for switch between dev - for speedup mono serve mode and prod - build optimization and standalone build all lib and application

```
USAGE
  $ rucken config [FOLDER]

OPTIONS
  -h, --help             show CLI help
  -m, --mode=(dev|prod)  [default: prod]
```

_See code: [src\commands\config.ts](https://github.com/rucken/cli/blob/develop/src/commands/config.ts)_

## `rucken help [COMMAND]`

display help for rucken

```
USAGE
  $ rucken help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.0.5/src\commands\help.ts)_

## `rucken make-ts-list [FOLDER]`

make index.ts with list of ts files recursive from source folder

```
USAGE
  $ rucken make-ts-list [FOLDER]

OPTIONS
  -e, --excludes=excludes            [default: ["*server*","*node_modules*", "*public_api.ts*","*test.ts*"]] exclude
                                     directories/files masks

  -h, --help                         show CLI help

  -i, --indexFileName=indexFileName  [default: index.ts] output file
```

_See code: [src\commands\make-ts-list.ts](https://github.com/rucken/cli/blob/develop/src/commands/make-ts-list.ts)_

## `rucken prepare [FOLDER]`

translate + make-ts-list + version-update + config

```
USAGE
  $ rucken prepare [FOLDER]

OPTIONS
  -h, --help             show CLI help
  -m, --mode=(dev|prod)  [default: prod]
```

_See code: [src\commands\prepare.ts](https://github.com/rucken/cli/blob/develop/src/commands/prepare.ts)_

## `rucken translate [FOLDER]`

extract translate from source and make ts class from it

```
USAGE
  $ rucken translate [FOLDER]

OPTIONS
  -c, --clean                      remove obsolete strings when merging
  -e, --excludes=excludes          [default: ["node_modules"]] exclude directories/files masks
  -f, --format=(po|json)           [default: po] file prefix and build mode
  -h, --help                       show CLI help
  -p, --prefix=prefix              name of class prefix
  -t, --templateName=templateName  [default: template] name of template
```

_See code: [src\commands\translate.ts](https://github.com/rucken/cli/blob/develop/src/commands/translate.ts)_

## `rucken version-updater [FOLDER]`

libraries dependencies and package.json versions updater from root package.json

```
USAGE
  $ rucken version-updater [FOLDER]

OPTIONS
  -h, --help       show CLI help
  -r, --root=root  [default: .] root project with package.json for get inforamtion about dependencies and it versions
```

_See code: [src\commands\version-updater.ts](https://github.com/rucken/cli/blob/develop/src/commands/version-updater.ts)_
<!-- commandsstop -->

[travis-image]: https://travis-ci.org/rucken/cli.svg?branch=master
[travis-url]: https://travis-ci.org/rucken/cli
[gitter-image]: https://img.shields.io/gitter/room/rucken/cli.js.svg
[gitter-url]: https://gitter.im/rucken/cli
[dependencies-image]: https://david-dm.org/rucken/cli/status.svg
[dependencies-url]: https://david-dm.org/rucken/cli
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken
