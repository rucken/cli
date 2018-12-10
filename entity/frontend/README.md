# backend: demo-core-nestjs

[![Greenkeeper badge](https://badges.greenkeeper.io/demo/core-nestjs.svg)](https://greenkeeper.io/)
[![Build Status][travis-image]][travis-url]
[![dependencies-release][dependencies-image]][dependencies-url]

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/demo/core-nestjs)

A simple application demonstrating the basic usage of permissions with NestJS (JWT, Passport, Facebook, Google+, User, Group, Permission)


## Features

* [NestJS](https://github.com/nestjs/nest) - a JS backend framework providing architecture out of the box with a syntax similar to Angular
* [TypeORM](https://github.com/mongodb/mongo) - ORM for TypeScript and JavaScript (ES7, ES6, ES5). Supports MySQL, PostgreSQL, MariaDB, SQLite, MS SQL Server, Oracle, WebSQL databases.
* [TypeScript](https://github.com/Microsoft/TypeScript) - superset of JS which compiles to JS, providing compile-time type checking
* [Passport](https://github.com/jaredhanson/passport) - a popular library used to implement JavaScript authentication (Facebook, Google+)
* [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - a JavaScript json web tokens implementation by auth0

## Usage
- run `npm install` to install project dependencies
- run `npm build` to install project dependencies
- run `npm run start:prod` to fire up prod server (`npm run start:dev` - dev server)
- Open browser to [`http://localhost:5000/swagger`](http://localhost:5000/swagger)

### Users
- user with admin group: admin@admin.com, password: 12345678
- user with user group: user1@user1.com, password: 12345678
- user with user group: user2@user2.com, password: 12345678

### Swagger
- local: [`http://localhost:5000/swagger`](http://localhost:5000/swagger)
- apiKey template: ```JWT <token_generated_on_login>```

### Docs
- local: [`http://localhost:5000/docs`](http://localhost:5000/docs)

## License

MIT

[travis-image]: https://travis-ci.org/demo/core-nestjs.svg?branch=master
[travis-url]: https://travis-ci.org/demo/core-nestjs
[dependencies-image]: https://david-dm.org/demo/core-nestjs/status.svg
[dependencies-url]: https://david-dm.org/demo/core-nestjs

---
# frontend: demo

[![Greenkeeper badge](https://badges.greenkeeper.io/demo/core.svg)](https://greenkeeper.io/)
[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Gitter][gitter-image]][gitter-url]
[![Join the chat at telegram][telegram-image]][telegram-url]

Core with UI for web application maked on Angular7+

## What is this?

- **Core** - Base entities and services for create applications on `Angular7+`.
- **Web** - Base ui grids and inputs and etc.

## Usage
```
npm install
npm run start:prod (npm run start:dev - if backend runned on http://localhost:5000)
```

## Quick links

[Live demo](https://demo.github.io/core) [[source]](https://github.com/demo/core) - Demo application (backend: https://zeit.co/now).

[Live demo (SSR)](https://demo.herokuapp.com) [[source]](https://github.com/demo/core) - Demo application with server side rendering (backend: https://zeit.co/now).

## License

MIT

[travis-image]: https://travis-ci.org/demo/core.svg?branch=master
[travis-url]: https://travis-ci.org/demo/core
[gitter-image]: https://img.shields.io/gitter/room/demo/core.js.svg
[gitter-url]: https://gitter.im/demo/core
[npm-image]: https://badge.fury.io/js/%40demo%2Fweb.svg
[npm-url]: https://npmjs.org/package/@demo/web
[dependencies-image]: https://david-dm.org/demo/core/status.svg
[dependencies-url]: https://david-dm.org/demo/core
[telegram-image]: https://img.shields.io/badge/chat-telegram-blue.svg?maxAge=2592000
[telegram-url]: https://t.me/demo
