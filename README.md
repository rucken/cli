# @rucken/cli

[![Greenkeeper badge](https://badges.greenkeeper.io/rucken/cli.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]

Console tools for create and build Angular5+ application based on [rucken](https://github.com/rucken) template

## What is Rucken?

- **Core** - Base entities and services for create applications on `Angular5+`, include work with users, groups and permissions.
- **Web** - Base ui grids and inputs and etc. for manage users, groups and permissions.

## Installation

```bash
npm install -g @rucken/cli
```

## Usage

```bash
rucken --help
```

### Commands

options "app" - see list of apps taken from ".angular-cli.json" with condition index!==undefined

options "lib" - see list of apps taken from ".angular-cli.json" with condition index===undefined

```bash
rucken --help

# clear all temp and dist folders on application/library
rucken clear --app app1  

# build application/library
rucken build --lib  
      
# npm link dist folder of library to all packages                 
rucken link --lib lib1 

# npm link src folder of application/library to all packages
rucken link-npm --lib lib1  

# extract-translate + po2ts + make-ts-list to application/library                    
rucken prepare --app
rucken prepare --help  

# make index.ts with import all ts files in application/library                 
rucken make-ts-list  
rucken prepare --help    

# run synchronously many different commands with many different options, for run with options use "~~" instead "--"
rucken commands clear prepare link ~~lib lib1          
```
### Scaffold commands

```bash
# generate new application based on rucken template
rucken new ananas
rucken new --help  

# generate model, service, grid, lookup input, modal for edit row in grid, modal for select items from grid with items
rucken entity --entity-name apple  
rucken entity --help

# generate page
rucken page --page-name apple  
rucken page --help  

# generate frame on page
rucken frame --page-name apple --frame-name banana
rucken frame --help

# generate frame with page
rucken page+frame --page-name apple --frame-name banana
rucken page+frame --help  
```
### Create and run application

```bash
rucken new my-app
cd my-app
npm install
npm run app:start-mockapi
```

## Quick links

[Source](https://github.com/rucken/cli) - Source code.

[Live demo](https://rucken.github.io/core) [[source]](https://github.com/rucken/core) - Demo application (backend: http://www.mockapi.io).

[Live demo (SSR)](https://rucken.herokuapp.com) [[source]](https://github.com/rucken/core) - Demo application with server side rendering (backend: http://www.mockapi.io).

[Live demo (NestJS)](https://rucken-core-nestjs.herokuapp.com) [[source]](https://github.com/rucken/core-nestjs) - Demo application with live backend (backend: https://nestjs.com).

## License

MIT

[travis-image]: https://travis-ci.org/rucken/cli.svg?branch=master
[travis-url]: https://travis-ci.org/rucken/cli
[gitter-image]: https://img.shields.io/gitter/room/rucken/cli.js.svg
[gitter-url]: https://gitter.im/rucken/cli
[npm-image]: https://badge.fury.io/js/%40rucken%2Fcli.svg
[npm-url]: https://npmjs.org/package/@rucken/cli
[dependencies-image]: https://david-dm.org/rucken/cli/status.svg
[dependencies-url]: https://david-dm.org/rucken/cli
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/rucken
