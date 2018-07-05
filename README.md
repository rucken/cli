@rucken/cli
===========

Console tools for create and build Angular6+ application based on [rucken](https://github.com/rucken) template

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/cli.svg)](https://greenkeeper.io/)
[![Version](https://img.shields.io/npm/v/@rucken/cli.svg)](https://npmjs.org/package/@rucken/cli)
[![Build Status][travis-image]][travis-url]
[![CircleCI](https://circleci.com/gh/rucken/cli/tree/master.svg?style=shield)](https://circleci.com/gh/rucken/cli/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/rucken/cli?branch=master&svg=true)](https://ci.appveyor.com/project/rucken/cli/branch/master)
[![Codecov](https://codecov.io/gh/rucken/cli/branch/master/graph/badge.svg)](https://codecov.io/gh/rucken/cli)
[![Downloads/week](https://img.shields.io/npm/dw/@rucken/cli.svg)](https://npmjs.org/package/@rucken/cli)
[![License](https://img.shields.io/npm/l/@rucken/cli.svg)](https://github.com/rucken/cli/blob/master/package.json)
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]

<!-- toc -->
* [What is Rucken?](#what-is-rucken)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# What is Rucken?
- **Core** - Base entities and services for create applications on `Angular6+`, include work with users, groups and permissions.
- **Web** - Base ui grids and inputs and etc. for manage users, groups and permissions.

# Usage
<!-- usage -->
```sh-session
$ npm install -g @rucken/cli
$ rucken COMMAND
running command...
$ rucken (-v|--version|version)
@rucken/cli/2.0.6 win32-x64 node-v8.11.3
$ rucken --help [COMMAND]
USAGE
  $ rucken COMMAND
...
```
<!-- usagestop -->
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

## `rucken make-ts-list [FOLDER]`

make index.ts with list of ts files recursive from source folder

```
USAGE
  $ rucken make-ts-list [FOLDER]

OPTIONS
  -e, --excludes=excludes            [default: ["*server*","*node_modules*"]] exclude directories/files masks
  -h, --help                         show CLI help
  -i, --indexFileName=indexFileName  [default: index.ts] output file
```

## `rucken prepare [FOLDER]`

translate + make-ts-list + version-update + config

```
USAGE
  $ rucken prepare [FOLDER]

OPTIONS
  -h, --help             show CLI help
  -m, --mode=(dev|prod)  [default: prod]
```

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

## `rucken version-updater [FOLDER]`

libraries dependencies and package.json versions updater from root package.json

```
USAGE
  $ rucken version-updater [FOLDER]

OPTIONS
  -h, --help       show CLI help
  -r, --root=root  [default: .] root project with package.json for get inforamtion about dependencies and it versions
```
<!-- commandsstop -->

[travis-image]: https://travis-ci.org/rucken/cli.svg?branch=master
[travis-url]: https://travis-ci.org/rucken/cli
[gitter-image]: https://img.shields.io/gitter/room/rucken/cli.js.svg
[gitter-url]: https://gitter.im/rucken/cli
[dependencies-image]: https://david-dm.org/rucken/cli/status.svg
[dependencies-url]: https://david-dm.org/rucken/cli
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken
