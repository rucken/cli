## Usage
- Make sure you have [node.js](https://nodejs.org/) installed version 6+
- Make sure you have NPM installed version 3+
- run `npm install` to install project dependencies
- run `npm run app:start-dev` to fire up dev server (backend on environment.apiUrl)
- run `npm run app:start-prod` to fire up prod server (backend on environment.prod.apiUrl)
- run `npm run app:start-mockapi` to fire up dev server (backend on environment.mockapi.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Run with server side rendering (prod)
- run `npm run ssr:build-prod` to build application
- run `npm run ssr:start` run with ssr (backend on environment.prod.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Run with server side rendering
- run `npm run ssr:build-mockapi` to build application
- run `npm run ssr:start` run with ssr (backend on environment.mockapi.apiUrl)
- Open browser to [`http://localhost:4200`](http://localhost:4200)

## Build
- run `npm run build` to build libs and application