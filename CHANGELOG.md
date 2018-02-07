<a name="1.8.1"></a>
## [1.8.1](https://github.com/rucken/cli/compare/1.8.0...1.8.1) (2018-02-07)


### Bug Fixes

* **srcgen:** Add support generics on generate index.ts list of used files ([aca940b](https://github.com/rucken/cli/commit/aca940b))



<a name="1.8.0"></a>
# [1.8.0](https://github.com/rucken/cli/compare/1.7.7...1.8.0) (2018-01-27)


### Features

* **srcgen:** Add SSR to "web-app-empty" ([f77b6b8](https://github.com/rucken/cli/commit/f77b6b8))



<a name="1.7.7"></a>
## [1.7.7](https://github.com/rucken/cli/compare/1.7.6...1.7.7) (2018-01-25)


### Bug Fixes

* **srcgen:** Fix write wrong field names on grid generator ([afc1faa](https://github.com/rucken/cli/commit/afc1faa))



<a name="1.7.6"></a>
## [1.7.6](https://github.com/rucken/cli/compare/1.7.5...1.7.6) (2018-01-24)


### Bug Fixes

* **deps:** Remove no used dependencies ([828f201](https://github.com/rucken/cli/commit/828f201))
* **modals:** Fix errors on get item from null array ([06a1ed4](https://github.com/rucken/cli/commit/06a1ed4))
* **srcgen:** Exclude all files from index.ts contains *server* ([925ce45](https://github.com/rucken/cli/commit/925ce45))
* **ssr:** Exclude detect app is app on scan ".angular-cli.json" if platform=server ([48f3a2d](https://github.com/rucken/cli/commit/48f3a2d))



<a name="1.7.5"></a>
## [1.7.5](https://github.com/rucken/cli/compare/1.7.4...1.7.5) (2018-01-17)


### Bug Fixes

* **srcgen:** Add search srcgen in other folders ([4313d93](https://github.com/rucken/cli/commit/4313d93))



<a name="1.7.4"></a>
## [1.7.4](https://github.com/rucken/cli/compare/1.7.3...1.7.4) (2018-01-15)


### Bug Fixes

* **base:** Fix srcgen path ([8315440](https://github.com/rucken/cli/commit/8315440))



<a name="1.7.3"></a>
## [1.7.3](https://github.com/rucken/cli/compare/1.7.2...1.7.3) (2018-01-12)


### Bug Fixes

* **srcgen:** Update "web-app-empty" templates ([6347089](https://github.com/rucken/cli/commit/6347089))



<a name="1.7.2"></a>
## [1.7.2](https://github.com/rucken/cli/compare/1.7.1...1.7.2) (2018-01-12)


### Bug Fixes

* **base:** Move updateDependencies to prepare command and fix it ([79ee0cc](https://github.com/rucken/cli/commit/79ee0cc))
* **srcgen:** Update html for "web-grid" scaffold script ([d07adf5](https://github.com/rucken/cli/commit/d07adf5))



<a name="1.7.1"></a>
## [1.7.1](https://github.com/rucken/cli/compare/1.7.0...1.7.1) (2018-01-11)


### Bug Fixes

* **base:** Add set peerDependencies from dependencies ([647d3c9](https://github.com/rucken/cli/commit/647d3c9))



<a name="1.7.0"></a>
# [1.7.0](https://github.com/rucken/cli/compare/1.5.6...1.7.0) (2018-01-11)


### Bug Fixes

* **styles:** Remove custom styles like "app-grid-...." and others ([ab37f17](https://github.com/rucken/cli/commit/ab37f17))


### Features

* **base:** Add updateDependencies method and run it after dist npm link ([b1271be](https://github.com/rucken/cli/commit/b1271be))
* **ng-package:** Replace ngm-cli to ng-packagr ([9b5aa1f](https://github.com/rucken/cli/commit/9b5aa1f))



<a name="1.5.6"></a>
## [1.5.6](https://github.com/rucken/cli/compare/1.5.5...1.5.6) (2017-12-20)


### Bug Fixes

* **commandRunner:** Add check stderr for output for detect status ([d159580](https://github.com/rucken/cli/commit/d159580))



<a name="1.5.5"></a>
## [1.5.5](https://github.com/rucken/cli/compare/1.5.4...1.5.5) (2017-12-14)


### Bug Fixes

* **srcgen:** Update scripts for web-app template ([8cc2449](https://github.com/rucken/cli/commit/8cc2449))



<a name="1.5.4"></a>
## [1.5.4](https://github.com/rucken/cli/compare/1.5.3...1.5.4) (2017-12-14)


### Bug Fixes

* **base:** Fix add BaseAppModule to index.ts on makeTsList method ([bc2b206](https://github.com/rucken/cli/commit/bc2b206))



<a name="1.5.3"></a>
## [1.5.3](https://github.com/rucken/cli/compare/1.5.2...1.5.3) (2017-12-14)


### Bug Fixes

* **srcgen:** Add "BaseAppModule" to generated index.ts ([6897545](https://github.com/rucken/cli/commit/6897545))



<a name="1.5.2"></a>
## [1.5.2](https://github.com/rucken/cli/compare/1.5.1...1.5.2) (2017-12-14)


### Bug Fixes

* **command:** Add extends options to run multi commands ([c646389](https://github.com/rucken/cli/commit/c646389))



<a name="1.5.1"></a>
## [1.5.1](https://github.com/rucken/cli/compare/1.5.0...1.5.1) (2017-12-14)


### Bug Fixes

* **commands:** Fix error with pass options to object from command ([60183c6](https://github.com/rucken/cli/commit/60183c6))



<a name="1.5.0"></a>
# [1.5.0](https://github.com/rucken/cli/compare/1.4.1...1.5.0) (2017-12-13)


### Bug Fixes

* **base:** Add run makeTsList twice ([23f45ff](https://github.com/rucken/cli/commit/23f45ff))
* **generators:** Fix errors in templates web page and frame generators ([f66c7b4](https://github.com/rucken/cli/commit/f66c7b4))
* **generators:** Fix paths ([eb40832](https://github.com/rucken/cli/commit/eb40832))
* **generators:** Fix small errors on application generator ([bc572a2](https://github.com/rucken/cli/commit/bc572a2))
* **generators:** Rename app template folder ([facdda6](https://github.com/rucken/cli/commit/facdda6))
* **refactor:** Update and rename files and folder ([33c6e1b](https://github.com/rucken/cli/commit/33c6e1b))


### Features

* **generator:** Add frame generator ([7f37b05](https://github.com/rucken/cli/commit/7f37b05))
* **generators:** Add base empty application based on rucken template ([07d1e56](https://github.com/rucken/cli/commit/07d1e56))
* **generators:** Add page generator ([06f6fe9](https://github.com/rucken/cli/commit/06f6fe9))
* **generators:** Add page+frame generator ([2541bcf](https://github.com/rucken/cli/commit/2541bcf))



<a name="1.4.1"></a>
# [1.4.1](https://github.com/rucken/cli/compare/1.4.0...1.4.1) (2017-12-07)


### Bug Fixes

* **deps:** Update dependencies ([4282bb6](https://github.com/rucken/cli/commit/4282bb6))


### Features

* **grid-generator:** Add options for run grid generator ([a11b9a1](https://github.com/rucken/cli/commit/a11b9a1))



<a name="1.4.0"></a>
# [1.4.0](https://github.com/rucken/cli/compare/1.3.4...1.4.0) (2017-12-06)


### Bug Fixes

* **base:** Add dest folder attribute to run srcgen ([5061d89](https://github.com/rucken/cli/commit/5061d89))
* **grid-generator:** Change paths to libs ([3d6039d](https://github.com/rucken/cli/commit/3d6039d))
* **grid-generator:** Change rootPath ([d121e25](https://github.com/rucken/cli/commit/d121e25))
* **grid-generator:** Fix errors on templates and in method for generate ([9f4282f](https://github.com/rucken/cli/commit/9f4282f))
* **tests:** Add remove generated files to test grid-generator ([a6d5d6a](https://github.com/rucken/cli/commit/a6d5d6a))
* **tests:** Add test for grid generator ([852dd81](https://github.com/rucken/cli/commit/852dd81))


### Features

* **generator:** Add generator for model, service, grid, lookup input and modals ([6e5ca68](https://github.com/rucken/cli/commit/6e5ca68))



<a name="1.3.4"></a>
## [1.3.4](https://github.com/rucken/cli/compare/1.3.3...1.3.4) (2017-12-04)


### Bug Fixes

* **app:** Change path for run installed [@rucke](https://github.com/rucke)/cli from another application ([8235d36](https://github.com/rucken/cli/commit/8235d36))



<a name="1.3.3"></a>
## [1.3.3](https://github.com/rucken/cli/compare/1.3.2...1.3.3) (2017-12-04)


### Bug Fixes

* **app:** Change binPath for run cli from another application ([c9ec0cb](https://github.com/rucken/cli/commit/c9ec0cb))



<a name="1.3.2"></a>
## [1.3.2](https://github.com/rucken/cli/compare/1.3.1...1.3.2) (2017-12-04)


### Bug Fixes

* **base:** Add run srcgen with [@rucken](https://github.com/rucken)/cli folder for cwd ([2feadd0](https://github.com/rucken/cli/commit/2feadd0))
* **deps:** Update dependencies and refactor for it ([fb38039](https://github.com/rucken/cli/commit/fb38039))



<a name="1.3.1"></a>
## [1.3.1](https://github.com/rucken/cli/compare/1.3.0...1.3.1) (2017-12-03)


### Bug Fixes

* **deps:** Downgrade angular and typescript version to stable ([fffc93a](https://github.com/rucken/cli/commit/fffc93a))



<a name="1.3.0"></a>
# [1.3.0](https://github.com/rucken/cli/compare/1.2.4...1.3.0) (2017-12-03)


### Bug Fixes

* **base:** Add to --link command run linkNpmClear after run ([e49ced0](https://github.com/rucken/cli/commit/e49ced0))


### Features

* **app:** Add changeMetaInIndex for prepare app, to write version of package in index.html ([05b4c01](https://github.com/rucken/cli/commit/05b4c01))



<a name="1.2.4"></a>
## [1.2.4](https://github.com/rucken/cli/compare/1.2.3...1.2.4) (2017-12-02)


### Bug Fixes

* **commands:** Add --verbose attribute if set on main ([42ce1aa](https://github.com/rucken/cli/commit/42ce1aa))



<a name="1.2.3"></a>
## [1.2.3](https://github.com/rucken/cli/compare/1.2.2...1.2.3) (2017-12-01)


### Bug Fixes

* Add detect bin path of rucken for run with commands ([e1c4a2f](https://github.com/rucken/cli/commit/e1c4a2f))



<a name="1.2.2"></a>
## [1.2.2](https://github.com/rucken/cli/compare/1.2.1...1.2.2) (2017-12-01)


### Bug Fixes

* **deps:** Update dependencies ([16284a5](https://github.com/rucken/cli/commit/16284a5))



<a name="1.2.1"></a>
## [1.2.1](https://github.com/rucken/cli/compare/1.2.0...1.2.1) (2017-12-01)


### Bug Fixes

* Remove bin folder from gitignore ([402ec66](https://github.com/rucken/cli/commit/402ec66))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/rucken/cli/compare/1.1.0...1.2.0) (2017-12-01)


### Bug Fixes

* **base:** Change cwd folder for run console commands ([fd1fd62](https://github.com/rucken/cli/commit/fd1fd62))
* **files:** Remove builded files ([981d479](https://github.com/rucken/cli/commit/981d479))
* **refactor:** Change attributes to one attribute as options object ([d7d70a9](https://github.com/rucken/cli/commit/d7d70a9))


### Features

* **base:** Add run multi commands ([f480ee4](https://github.com/rucken/cli/commit/f480ee4))



<a name="1.1.0"></a>
# 1.1.0 (2017-11-29)


### Bug Fixes

* **test:** Add build module before run console tests ([8618182](https://github.com/rucken/cli/commit/8618182))
* **test:** Add check DEBUG mode in run test ([63d7a5b](https://github.com/rucken/cli/commit/63d7a5b))
* **tests:** Add set DEBUG from environment ([8009f02](https://github.com/rucken/cli/commit/8009f02))
* **travis:** Add travis config file ([125afec](https://github.com/rucken/cli/commit/125afec))


### Features

* **debug:** Add colored logger, change path to run srcgen ([2256158](https://github.com/rucken/cli/commit/2256158))



