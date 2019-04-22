@rucken/cli
===========

Console tools for create and build [Angular7+](https://angular.io/), [Ionic](https://ionicframework.com/), [Bootstrap](https://valor-software.com/ngx-bootstrap/#/) and [NestJS](https://nestjs.com/) application based on [Rucken](https://github.com/rucken) template

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

* [Install](#install)
* [Usage](#usage)
* [Generators](#generators)
* [Commands](#commands)

# Install
<!-- install -->
```bash
$ npm install -g @rucken/cli
```
<!-- installstop -->
# Usage
<!-- ussage -->
```bash
# create workspace
rucken workspace my-workspace
# move to created workspace
cd my-workspace
# create applications
rucken app app-name --type=web --type=nestjs
# create libraries
rucken lib lib-name --type=frontend --type=nestjs
# create entities in libraries
rucken entity entity-name --type=web --type=nestjs
# create link entities to applications
rucken entity2app --type=web --type=nestjs
# create link libraries to applications
rucken lib2app --type=frontend --type=nestjs
# install dependencies
npm i
ng serve app-name
```
<!-- ussagestop -->

<!-- changelogsstop -->
# Generators
<!-- generators -->
* [`rucken generator-workspace [NAME]`](#rucken-generator-workspace-name)
* [`rucken generator-application [NAME]`](#rucken-generator-application-name)
* [`rucken generator-entity [NAME]`](#rucken-generator-entity-name)
* [`rucken generator-entity-to-application [NAME]`](#rucken-generator-entity-to-application-name)
* [`rucken generator-library [NAME]`](#rucken-generator-library-name)
* [`rucken generator-library-to-application [NAME]`](#rucken-generator-library-to-application-name)

## `rucken generator-workspace [NAME]`

Workspace generator, based on the Rucken template

```
USAGE
  $ rucken generator-workspace [NAME]

OPTIONS
  -a, --author=author        Author name (it is recommended to use Github user for better integration).
  -e, --email=email          Author email name.
  -h, --help                 show CLI help
  -t, --template=template    [default: @rucken/schematics:workspace] Template name.
  -w, --workspace=workspace  The workspace directory name.

ALIASES
  $ rucken workspace
  $ rucken ws
```

_See code: [src/commands/generator-workspace.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-workspace.ts)_

## `rucken generator-application [NAME]`

Application generator, based on the Rucken template

```
USAGE
  $ rucken generator-application [NAME]

OPTIONS
  -a, --author=author              Author name (it is recommended to use Github user for better integration).
  -e, --email=email                Author email name.
  -h, --help                       show CLI help
  -t, --type=web|ionic|nestjs|all  Type(s) of applications.
  -w, --workspace=workspace        The workspace directory name.

  --api=api                        [default: /api] The backend api address (/api, http://host.com/api,
                                   https://api.host.com).

  --ionicTemplate=ionicTemplate    [default: @rucken/schematics:rucken-app-ionic] Mobile frontend generator application
                                   on Angular7+ with Ionic4

  --nestjsTemplate=nestjsTemplate  [default: @rucken/schematics:rucken-app-nestjs] REST generator backend applications
                                   on NestJS with TypeORM

  --webTemplate=webTemplate        [default: @rucken/schematics:rucken-app] Frontend application generator on Angular7+
                                   with Bootstrap3

ALIASES
  $ rucken application
  $ rucken app
```

_See code: [src/commands/generator-application.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-application.ts)_

## `rucken generator-entity [NAME]`

The generator of the entity, based on the Rucken template

```
USAGE
  $ rucken generator-entity [NAME]

OPTIONS
  -h, --help                       show CLI help
  -t, --type=web|ionic|nestjs|all  Type(s) of entities.
  -w, --workspace=workspace        The workspace directory name.
  --coreLib=coreLib                The name of the core library.
  --coreTemplate=coreTemplate      [default: @rucken/schematics:rucken-entity] Model generator and frontend application
  --ionicLib=ionicLib              The name of the ionic library.

  --ionicTemplate=ionicTemplate    [default: @rucken/schematics:rucken-entity-ionic] The generator of the main
                                   components for editing data on the model and for a mobile frontend application on
                                   Angular7+ with Ionic4

  --nestjsLib=nestjsLib            The name of the nestjs library.

  --nestjsTemplate=nestjsTemplate  [default: @rucken/schematics:rucken-entity-nestjs] The generator of the entity, the
                                   DTO, the service and the controller, for editing the entity data for the backend of
                                   the application on NestJS with TypeORM

  --timestamp=timestamp            Timestamp used in migrations.

  --webLib=webLib                  The name of the web library.

  --webTemplate=webTemplate        [default: @rucken/schematics:rucken-entity-web] The generator of the main components
                                   for editing data on the model and for the frontend application on Angular7+ with
                                   Bootstrap3

ALIASES
  $ rucken entity
```

_See code: [src/commands/generator-entity.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-entity.ts)_

## `rucken generator-entity-to-application [NAME]`

Linking the entity to the application, based on the Rucken template

```
USAGE
  $ rucken generator-entity-to-application [NAME]

OPTIONS
  -h, --help                     show CLI help
  -t, --type=web|ionic|all       Type(s) of applications.
  -w, --workspace=workspace      The workspace directory name.
  --coreLib=coreLib              The name of the core library with entity.
  --ionicApp=ionicApp            The name of the ionic application.
  --ionicLib=ionicLib            The name of the ionic library with entity.

  --ionicTemplate=ionicTemplate  [default: @rucken/schematics:rucken-entity-ionic-to-app] Binding components for editing
                                 an entity to a mobile frontend application on Angular7+ with Ionic4

  --webApp=webApp                The name of the web application.

  --webLib=webLib                The name of the web library with entity.

  --webTemplate=webTemplate      [default: @rucken/schematics:rucken-entity-web-to-app] Binding of components for
                                 editing an entity to a frontend application on Angular7+ with Bootstrap3

ALIASES
  $ rucken entity-to-application
  $ rucken entity-to-app
  $ rucken entity2app
```

_See code: [src/commands/generator-entity-to-application.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-entity-to-application.ts)_

## `rucken generator-library [NAME]`

Library generator, based on the Rucken template

```
USAGE
  $ rucken generator-library [NAME]

OPTIONS
  -a, --author=author                  Author name (it is recommended to use Github user for better integration).
  -e, --email=email                    Author email name.
  -h, --help                           show CLI help
  -o, --org=org                        The name of organization.
  -t, --type=frontend|nestjs|all       Type(s) of library.
  -w, --workspace=workspace            The workspace directory name.
  --frontendTemplate=frontendTemplate  [default: @rucken/schematics:rucken-lib] Frontend library generator

  --nestjsTemplate=nestjsTemplate      [default: @rucken/schematics:rucken-lib-nestjs] Backend library generator on
                                       NestJS

ALIASES
  $ rucken library
  $ rucken lib
```

_See code: [src/commands/generator-library.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-library.ts)_

## `rucken generator-library-to-application [NAME]`

Linking the library to the application, based on the Rucken template

```
USAGE
  $ rucken generator-library-to-application [NAME]

OPTIONS
  -h, --help                           show CLI help
  -t, --type=frontend|nestjs|all       Type(s) of applications.
  -w, --workspace=workspace            The workspace directory name.
  --frontendApp=frontendApp            The name of the frontend frontend application.
  --frontendLib=frontendLib            The name of the frontend library.
  --frontendTemplate=frontendTemplate  [default: @rucken/schematics:rucken-lib-to-app] Frontend library generator
  --nestjsApp=nestjsApp                The name of the nestjs application.
  --nestjsLib=nestjsLib                The name of the nestjs library.

  --nestjsTemplate=nestjsTemplate      [default: @rucken/schematics:rucken-lib-nestjs-to-app] Linking the library to the
                                       backend application on NestJS

ALIASES
  $ rucken library-to-application
  $ rucken lib-to-app
  $ rucken lib2app
```

_See code: [src/commands/generator-library-to-application.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/generator-library-to-application.ts)_

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

_See code: [src/commands/config.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/config.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.1.6/src/commands/help.ts)_

## `rucken make-ts-list [FOLDER]`

make index.ts with list of ts files recursive from source folder

```
USAGE
  $ rucken make-ts-list [FOLDER]

OPTIONS
  -e, --excludes=excludes            [default: *server*,*node_modules*,*public_api.ts*,*test.ts*,*.spec*,environment*]
                                     exclude directories/files masks

  -h, --help                         show CLI help

  -i, --indexFileName=indexFileName  [default: index.ts] output file
```

_See code: [src/commands/make-ts-list.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/make-ts-list.ts)_

## `rucken prepare [FOLDER]`

translate + make-ts-list + version-update + config

```
USAGE
  $ rucken prepare [FOLDER]

OPTIONS
  -h, --help             show CLI help
  -m, --mode=(dev|prod)  [default: prod]
```

_See code: [src/commands/prepare.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/prepare.ts)_

## `rucken translate [FOLDER]`

extract translate from source and make ts class from it

```
USAGE
  $ rucken translate [FOLDER]

OPTIONS
  -c, --clean                      remove obsolete strings when merging
  -e, --excludes=excludes          [default: ["*node_modules*,*.spec"]] exclude directories/files masks
  -f, --format=(po|json)           [default: po] file prefix and build mode
  -h, --help                       show CLI help
  -p, --prefix=prefix              name of class prefix
  -t, --templateName=templateName  [default: template] name of template
```

_See code: [src/commands/translate.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/translate.ts)_

## `rucken version-updater [FOLDER]`

libraries dependencies and package.json versions updater from root package.json

```
USAGE
  $ rucken version-updater [FOLDER]

OPTIONS
  -h, --help       show CLI help
  -r, --root=root  [default: .] root project with package.json for get inforamtion about dependencies and it versions
```

_See code: [src/commands/version-updater.ts](https://github.com/rucken/cli/blob/v3.3.4/src/commands/version-updater.ts)_
<!-- commandsstop -->

[travis-image]: https://travis-ci.org/rucken/cli.svg?branch=master
[travis-url]: https://travis-ci.org/rucken/cli
[gitter-image]: https://img.shields.io/gitter/room/rucken/cli.js.svg
[gitter-url]: https://gitter.im/rucken/cli
[dependencies-image]: https://david-dm.org/rucken/cli/status.svg
[dependencies-url]: https://david-dm.org/rucken/cli
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken
