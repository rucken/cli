(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-repository'), require('@custom-org/custom-lib'), require('bind-observable'), require('class-transformer'), require('@angular/router'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@ionic/angular'), require('@ngx-translate/core'), require('@rucken/core'), require('@rucken/ionic'), require('ngx-bind-io')) :
    typeof define === 'function' && define.amd ? define('@custom-org/custom-lib-ionic', ['exports', 'ngx-repository', '@custom-org/custom-lib', 'bind-observable', 'class-transformer', '@angular/router', '@angular/common', '@angular/core', '@angular/forms', '@ionic/angular', '@ngx-translate/core', '@rucken/core', '@rucken/ionic', 'ngx-bind-io'], factory) :
    (factory((global['custom-org'] = global['custom-org'] || {}, global['custom-org']['custom-lib-ionic'] = {}),global.ngxRepository,global.customLib,global.bindObservable,global.classTransformer,global.ng.router,global.ng.common,global.ng.core,global.ng.forms,global.angular,global.core$1,global.core$2,global.ionic,global.ngxBindIo));
}(this, (function (exports,ngxRepository,customLib,bindObservable,classTransformer,router,common,core,forms,angular,core$1,core$2,ionic,ngxBindIo) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RuI18n = {};

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        title: core$2.translate("Russian"),
        code: "ru",
        translations: [RuI18n]
    }, ɵ1 = {
        title: core$2.translate("English"),
        code: "en",
        translations: []
    };
    var CustomOrgCustomLibIonicModule = /** @class */ (function () {
        function CustomOrgCustomLibIonicModule() {
        }
        CustomOrgCustomLibIonicModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [
                            {
                                provide: core$2.LANGUAGES_ITEM_CONFIG_TOKEN,
                                useValue: ɵ0,
                                multi: true
                            },
                            {
                                provide: core$2.LANGUAGES_ITEM_CONFIG_TOKEN,
                                useValue: ɵ1,
                                multi: true
                            }
                        ]
                    },] }
        ];
        return CustomOrgCustomLibIonicModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityModalComponent = /** @class */ (function (_super) {
        __extends(CustomEntityModalComponent, _super);
        function CustomEntityModalComponent() {
            var _this = _super.call(this) || this;
            _this.class = undefined;
            _this.group(customLib.CustomEntity);
            return _this;
        }
        CustomEntityModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "custom-entity-modal",
                        template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntityModalComponent.ctorParameters = function () { return []; };
        CustomEntityModalComponent.propDecorators = {
            class: [{ type: core.Input }]
        };
        CustomEntityModalComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [])
        ], CustomEntityModalComponent);
        return CustomEntityModalComponent;
    }(core$2.BasePromptFormModalComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesListFiltersModal = /** @class */ (function () {
        function CustomEntitiesListFiltersModal() {
            this.id = undefined;
            this.sortField = undefined;
            this.sortType = undefined;
        }
        CustomEntitiesListFiltersModal.strings = {
            sortField: core$2.translate("Sort field"),
            sortType: core$2.translate("Sort type")
        };
        CustomEntitiesListFiltersModal.sortFields = [
            { id: "id", title: core$2.translate("Id") },
            { id: "title", title: core$2.translate("Title") }
        ];
        CustomEntitiesListFiltersModal.sortTypes = [
            { id: "asc", title: core$2.translate("Asc") },
            { id: "desc", title: core$2.translate("Desc") }
        ];
        __decorate([
            classTransformer.Type(core$2.serializeModel(ionic.SelectInput)),
            classTransformer.Transform(ionic.keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortFields }), { toClassOnly: true, groups: ["manual"] }),
            classTransformer.Transform(ionic.selectInputToKey({ items: CustomEntitiesListFiltersModal.sortFields }), { toPlainOnly: true, groups: ["manual"] }),
            __metadata("design:type", ionic.SelectInput)
        ], CustomEntitiesListFiltersModal.prototype, "sortField", void 0);
        __decorate([
            classTransformer.Type(core$2.serializeModel(ionic.SelectInput)),
            classTransformer.Transform(ionic.keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortTypes }), { toClassOnly: true, groups: ["manual"] }),
            classTransformer.Transform(ionic.selectInputToKey({ items: CustomEntitiesListFiltersModal.sortTypes }), { toPlainOnly: true, groups: ["manual"] }),
            __metadata("design:type", ionic.SelectInput)
        ], CustomEntitiesListFiltersModal.prototype, "sortType", void 0);
        return CustomEntitiesListFiltersModal;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG = {
        sortField: "id",
        sortType: "desc"
    };
    /** @type {?} */
    var CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN = "CustomEntitiesListFiltersModalConfig";

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} customEntitiesListFiltersModalService
     * @return {?}
     */
    function customEntitiesListFiltersModalServiceInitializeApp(customEntitiesListFiltersModalService) {
        return ( /**
         * @return {?}
         */function () { return customEntitiesListFiltersModalService.initializeApp(); });
    }
    var CustomEntitiesListFiltersModalService = /** @class */ (function () {
        function CustomEntitiesListFiltersModalService(_customEntitiesListFiltersModalConfig, _storage) {
            this._customEntitiesListFiltersModalConfig = _customEntitiesListFiltersModalConfig;
            this._storage = _storage;
            this.current = undefined;
            this.storageKeyName = "custom-entities-list-filters-modal";
            this.current = this.getDefault();
        }
        /**
         * @return {?}
         */
        CustomEntitiesListFiltersModalService.prototype.getDefault = /**
         * @return {?}
         */
            function () {
                return classTransformer.plainToClass(CustomEntitiesListFiltersModal, __assign({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
                    groups: ["manual"]
                });
            };
        /**
         * @return {?}
         */
        CustomEntitiesListFiltersModalService.prototype.getCurrent = /**
         * @return {?}
         */
            function () {
                return this.current;
            };
        /**
         * @param {?} value
         * @return {?}
         */
        CustomEntitiesListFiltersModalService.prototype.setCurrent = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var _this = this;
                this._storage
                    .setItem(this.storageKeyName, JSON.stringify(classTransformer.classToPlain(!value ? this.getDefault() : value, {
                    groups: ["manual"]
                })))
                    .then(( /**
             * @param {?} _
             * @return {?}
             */function (_) { return (_this.current = value); }));
            };
        /**
         * @return {?}
         */
        CustomEntitiesListFiltersModalService.prototype.initCurrent = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(( /**
                 * @param {?} resolve
                 * @return {?}
                 */function (resolve) {
                    _this._storage.getItem(_this.storageKeyName).then(( /**
                     * @param {?} data
                     * @return {?}
                     */function (data) {
                        if (data && data !== "undefined") {
                            try {
                                resolve(classTransformer.plainToClass(CustomEntitiesListFiltersModal, ( /** @type {?} */(JSON.parse(data))), { groups: ["manual"] }));
                            }
                            catch (error) {
                                resolve(_this.getCurrent());
                            }
                        }
                        else {
                            resolve(_this.getCurrent());
                        }
                    }));
                }));
            };
        /**
         * @return {?}
         */
        CustomEntitiesListFiltersModalService.prototype.initializeApp = /**
         * @return {?}
         */
            function () {
                var _this = this;
                return new Promise(( /**
                 * @param {?} resolve
                 * @return {?}
                 */function (resolve) {
                    _this.initCurrent().then(( /**
                     * @param {?} value
                     * @return {?}
                     */function (value) {
                        _this.setCurrent(value);
                        resolve();
                    }));
                }));
            };
        CustomEntitiesListFiltersModalService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        CustomEntitiesListFiltersModalService.ctorParameters = function () {
            return [
                { type: undefined, decorators: [{ type: core.Inject, args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
                { type: undefined, decorators: [{ type: core.Inject, args: [core$2.STORAGE_CONFIG_TOKEN,] }] }
            ];
        };
        __decorate([
            bindObservable.BindObservable(),
            __metadata("design:type", CustomEntitiesListFiltersModal)
        ], CustomEntitiesListFiltersModalService.prototype, "current", void 0);
        return CustomEntitiesListFiltersModalService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesListFiltersModalComponent = /** @class */ (function (_super) {
        __extends(CustomEntitiesListFiltersModalComponent, _super);
        function CustomEntitiesListFiltersModalComponent(_customEntitiesListFiltersModalService) {
            var _this = _super.call(this) || this;
            _this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
            _this.class = undefined;
            _this.sortTypes = CustomEntitiesListFiltersModal.sortTypes;
            _this.sortFields = CustomEntitiesListFiltersModal.sortFields;
            _this.group(CustomEntitiesListFiltersModal);
            return _this;
        }
        /**
         * @return {?}
         */
        CustomEntitiesListFiltersModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.data = this._customEntitiesListFiltersModalService.getCurrent();
                this.hideYes = true;
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        CustomEntitiesListFiltersModalComponent.prototype.onYesClick = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                this._customEntitiesListFiltersModalService.setCurrent(this.data);
                _super.prototype.onYesClick.call(this, data);
            };
        CustomEntitiesListFiltersModalComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "custom-entities-list-filters-modal",
                        template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntitiesListFiltersModalComponent.ctorParameters = function () {
            return [
                { type: CustomEntitiesListFiltersModalService }
            ];
        };
        CustomEntitiesListFiltersModalComponent.propDecorators = {
            class: [{ type: core.Input }]
        };
        CustomEntitiesListFiltersModalComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [CustomEntitiesListFiltersModalService])
        ], CustomEntitiesListFiltersModalComponent);
        return CustomEntitiesListFiltersModalComponent;
    }(core$2.BasePromptFormModalComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesListComponent = /** @class */ (function (_super) {
        __extends(CustomEntitiesListComponent, _super);
        function CustomEntitiesListComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
            var _this = _super.call(this, dynamicRepository.fork(customLib.CustomEntity), modalsService, customLib.CustomEntity) || this;
            _this.errorsExtractor = errorsExtractor;
            _this.translateService = translateService;
            _this.dynamicRepository = dynamicRepository;
            _this.customEntitiesConfig = customEntitiesConfig;
            _this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
            _this.modalItem = {
                class: "primary",
                component: CustomEntityModalComponent,
                initialState: {
                    hideYes: true,
                    hideNo: true
                }
            };
            _this.modalView = {
                class: "medium",
                component: CustomEntityModalComponent,
                initialState: {
                    noClass: "medium",
                    hideYes: true,
                    hideNo: true
                }
            };
            _this.title = core$2.translate("Custom entities");
            return _this;
        }
        /**
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.mockedItems) {
                    this.useRest(__assign({ apiUrl: this.apiUrl, infinity: true }, this.customEntitiesConfig, { autoload: false }));
                }
                if (this.mockedItems) {
                    this.useMock(__assign({ items: this.mockedItems, infinity: true }, this.customEntitiesConfig, { autoload: false }));
                }
                this.onChangeFilter();
            };
        /**
         * @param {?} event
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.setSearchText = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.list.searchField.setValue(event.detail.value);
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.onDeleteClickAsync = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    var title, message, result, error_1;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                title = core$2.interpolate(this.translateService.instant(this.strings.deleteTitle), item);
                                message = core$2.interpolate(this.translateService.instant(this.strings.deleteMessage), item);
                                _a.label = 1;
                            case 1:
                                _a.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, (( /** @type {?} */(this
                                        .modalsService))).confirmAsync({
                                        title: title,
                                        message: message
                                    })];
                            case 2:
                                result = _a.sent();
                                if (result) {
                                    this.repository.delete(item.id).subscribe(( /**
                                     * @param {?} deletedItem
                                     * @return {?}
                                     */function (deletedItem) {
                                        if (_this.mockedItems) {
                                            _this.mockedItems = _this.repository.items;
                                            _this.mockedItemsChange.emit(_this.mockedItems);
                                        }
                                    }), ( /**
                                     * @param {?} error
                                     * @return {?}
                                     */function (error) { return _this.onError(error); }));
                                }
                                return [3 /*break*/, 4];
                            case 3:
                                error_1 = _a.sent();
                                throw error_1;
                            case 4: return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?=} item
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.createFiltersModal = /**
         * @param {?=} item
         * @return {?}
         */
            function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    var modalRef;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                item = item || new CustomEntitiesListFiltersModal();
                                return [4 /*yield*/, this.modalsService.createAsync(CustomEntitiesListFiltersModalComponent, {
                                        class: "secondary",
                                        initialState: {
                                            title: core$2.translate("Custom entities filters"),
                                            data: item
                                        }
                                    })];
                            case 1:
                                modalRef = _a.sent();
                                modalRef.instance.group(CustomEntitiesListFiltersModal);
                                modalRef.instance.data = item;
                                return [2 /*return*/, modalRef];
                        }
                    });
                });
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.onFilterClickAsync = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                return __awaiter(this, void 0, void 0, function () {
                    var modalRef;
                    var _this = this;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.createFiltersModal(data)];
                            case 1:
                                modalRef = _a.sent();
                                modalRef.instance.yes.subscribe(( /**
                                 * @param {?} modal
                                 * @return {?}
                                 */function (modal) {
                                    modal.hide();
                                    _this.onChangeFilter();
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        /**
         * @param {?=} data
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.onFilterClick = /**
         * @param {?=} data
         * @return {?}
         */
            function (data) {
                this.onFilterClickAsync(data).then();
            };
        /**
         * @param {?=} filter
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.onChangeFilter = /**
         * @param {?=} filter
         * @return {?}
         */
            function (filter) {
                if (!filter) {
                    filter = {};
                }
                /** @type {?} */
                var customEntitiesListFiltersModal = this._customEntitiesListFiltersModalService.getCurrent();
                if (customEntitiesListFiltersModal.sortField) {
                    filter["sort"] = customEntitiesListFiltersModal.sortField.id;
                }
                if (customEntitiesListFiltersModal.sortType) {
                    filter["sort"] =
                        (customEntitiesListFiltersModal.sortType.id === "asc" ? "" : "-") +
                            filter["sort"];
                }
                {
                    _super.prototype.onChangeFilter.call(this, filter);
                }
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CustomEntitiesListComponent.prototype.onUpdateClickAsync = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                return __awaiter(this, void 0, void 0, function () {
                    var useCustomModalComponent, modalRef, _a;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                useCustomModalComponent = this.modalUpdate.component || this.modalItem.component;
                                if (!!useCustomModalComponent)
                                    return [3 /*break*/, 2];
                                return [4 /*yield*/, this.createUpdateModal(item)];
                            case 1:
                                _a = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                _a = undefined;
                                _b.label = 3;
                            case 3:
                                modalRef = _a;
                                if (!!modalRef)
                                    return [3 /*break*/, 5];
                                return [4 /*yield*/, this.defaultCreateUpdateModal(item)];
                            case 4:
                                modalRef = _b.sent();
                                if (core.isDevMode() && !useCustomModalComponent) {
                                    console.warn('Method "createUpdateModal" is not defined', this);
                                }
                                _b.label = 5;
                            case 5:
                                modalRef.instance.yes.subscribe(( /**
                                 * @param {?} modal
                                 * @return {?}
                                 */function (modal) {
                                    modal.processing = true;
                                    _this.repository.update(item.id, modal.getData()).subscribe(( /**
                                     * @param {?} updatedItem
                                     * @return {?}
                                     */function (updatedItem) {
                                        modal.processing = false;
                                        if (_this.mockedItems) {
                                            _this.mockedItems = _this.repository.items;
                                            _this.mockedItemsChange.emit(_this.mockedItems);
                                        }
                                        modal.hide();
                                    }), ( /**
                                     * @param {?} error
                                     * @return {?}
                                     */function (error) { return _this.onUpdateError(modal, error); }));
                                }));
                                return [2 /*return*/];
                        }
                    });
                });
            };
        CustomEntitiesListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "custom-entities-list",
                        template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntitiesListComponent.ctorParameters = function () {
            return [
                { type: core$2.ModalsService },
                { type: core$2.ErrorsExtractor },
                { type: core$1.TranslateService },
                { type: ngxRepository.DynamicRepository },
                { type: undefined, decorators: [{ type: core.Inject, args: [customLib.CUSTOM_ENTITIES_CONFIG_TOKEN,] }] },
                { type: CustomEntitiesListFiltersModalService }
            ];
        };
        CustomEntitiesListComponent.propDecorators = {
            list: [{ type: core.ViewChild, args: ["list",] }],
            modalItem: [{ type: core.Input }],
            modalView: [{ type: core.Input }],
            title: [{ type: core.Input }]
        };
        CustomEntitiesListComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [core$2.ModalsService,
                core$2.ErrorsExtractor,
                core$1.TranslateService,
                ngxRepository.DynamicRepository, Object, CustomEntitiesListFiltersModalService])
        ], CustomEntitiesListComponent);
        return CustomEntitiesListComponent;
    }(core$2.BaseEntityListComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityModalModule = /** @class */ (function () {
        function CustomEntityModalModule() {
        }
        CustomEntityModalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            ionic.FormGroupModule,
                            forms.ReactiveFormsModule,
                            core$1.TranslateModule.forChild(),
                            core$2.DirectivesModule,
                            core$2.PipesModule,
                            ionic.PromptFormModalModule,
                            ionic.SelectInputModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntityModalComponent],
                        entryComponents: [CustomEntityModalComponent],
                        exports: [CustomEntityModalComponent, ionic.FormGroupModule]
                    },] }
        ];
        return CustomEntityModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesListFiltersModalModule = /** @class */ (function () {
        function CustomEntitiesListFiltersModalModule() {
        }
        /**
         * @param {?=} options
         * @return {?}
         */
        CustomEntitiesListFiltersModalModule.forRoot = /**
         * @param {?=} options
         * @return {?}
         */
            function (options) {
                return {
                    ngModule: CustomEntitiesListFiltersModalModule,
                    providers: [
                        {
                            provide: CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,
                            useValue: {
                                sortField: options && options.sortField
                                    ? options.sortField
                                    : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortField,
                                sortType: options && options.sortType
                                    ? options.sortType
                                    : DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG.sortType
                            }
                        },
                        CustomEntitiesListFiltersModalService
                    ]
                };
            };
        CustomEntitiesListFiltersModalModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            ionic.FormGroupModule,
                            forms.ReactiveFormsModule,
                            core$1.TranslateModule.forChild(),
                            core$2.DirectivesModule,
                            core$2.PipesModule,
                            ionic.PromptFormModalModule,
                            ionic.SelectInputModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntitiesListFiltersModalComponent],
                        entryComponents: [CustomEntitiesListFiltersModalComponent],
                        exports: [CustomEntitiesListFiltersModalComponent, ionic.FormGroupModule]
                    },] }
        ];
        return CustomEntitiesListFiltersModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesListModule = /** @class */ (function () {
        function CustomEntitiesListModule() {
        }
        CustomEntitiesListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            ionic.IonicModalsModule,
                            core$1.TranslateModule.forChild(),
                            core$2.PipesModule,
                            ionic.EntityListModule,
                            CustomEntityModalModule,
                            CustomEntitiesListFiltersModalModule,
                            router.RouterModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntitiesListComponent],
                        exports: [CustomEntitiesListComponent]
                    },] }
        ];
        return CustomEntitiesListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.RuI18n = RuI18n;
    exports.CustomOrgCustomLibIonicModule = CustomOrgCustomLibIonicModule;
    exports.CustomEntitiesListComponent = CustomEntitiesListComponent;
    exports.CustomEntitiesListModule = CustomEntitiesListModule;
    exports.CustomEntitiesListFiltersModalComponent = CustomEntitiesListFiltersModalComponent;
    exports.DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG = DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG;
    exports.CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN = CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN;
    exports.CustomEntitiesListFiltersModalModule = CustomEntitiesListFiltersModalModule;
    exports.customEntitiesListFiltersModalServiceInitializeApp = customEntitiesListFiltersModalServiceInitializeApp;
    exports.CustomEntitiesListFiltersModalService = CustomEntitiesListFiltersModalService;
    exports.CustomEntitiesListFiltersModal = CustomEntitiesListFiltersModal;
    exports.CustomEntityModalComponent = CustomEntityModalComponent;
    exports.CustomEntityModalModule = CustomEntityModalModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=custom-org-custom-lib-ionic.umd.js.map