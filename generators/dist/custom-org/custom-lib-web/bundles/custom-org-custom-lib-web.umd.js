(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ngx-bootstrap/datepicker'), require('ngx-bootstrap/typeahead'), require('rxjs/operators'), require('@angular/forms'), require('@ngx-translate/core'), require('@rucken/core'), require('@custom-org/custom-lib'), require('ngx-repository'), require('@angular/common'), require('@angular/core'), require('@rucken/web'), require('ngx-bind-io')) :
    typeof define === 'function' && define.amd ? define('@custom-org/custom-lib-web', ['exports', 'ngx-bootstrap/datepicker', 'ngx-bootstrap/typeahead', 'rxjs/operators', '@angular/forms', '@ngx-translate/core', '@rucken/core', '@custom-org/custom-lib', 'ngx-repository', '@angular/common', '@angular/core', '@rucken/web', 'ngx-bind-io'], factory) :
    (factory((global['custom-org'] = global['custom-org'] || {}, global['custom-org']['custom-lib-web'] = {}),global.datepicker,global.typeahead,global.rxjs.operators,global.ng.forms,global.core,global.core$1,global.customLib,global.ngxRepository,global.ng.common,global.ng.core,global.web,global.ngxBindIo));
}(this, (function (exports,datepicker,typeahead,operators,forms,core,core$1,customLib,ngxRepository,common,core$2,web,ngxBindIo) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RuI18n = {};

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ɵ0 = {
        title: core$1.translate("Russian"),
        code: "ru",
        translations: [RuI18n]
    }, ɵ1 = {
        title: core$1.translate("English"),
        code: "en",
        translations: []
    };
    var CustomOrgCustomLibWebModule = /** @class */ (function () {
        function CustomOrgCustomLibWebModule() {
        }
        CustomOrgCustomLibWebModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [common.CommonModule],
                        providers: [
                            {
                                provide: core$1.LANGUAGES_ITEM_CONFIG_TOKEN,
                                useValue: ɵ0,
                                multi: true
                            },
                            {
                                provide: core$1.LANGUAGES_ITEM_CONFIG_TOKEN,
                                useValue: ɵ1,
                                multi: true
                            }
                        ]
                    },] }
        ];
        return CustomOrgCustomLibWebModule;
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesGridModalComponent = /** @class */ (function (_super) {
        __extends(CustomEntitiesGridModalComponent, _super);
        function CustomEntitiesGridModalComponent() {
            var _this = _super.call(this) || this;
            _this.apiUrl = undefined;
            return _this;
        }
        CustomEntitiesGridModalComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: "custom-entities-grid-modal",
                        template: "<entity-grid-modal [bindIO]>\n  <custom-entities-grid [apiUrl]=\"apiUrl\" #grid> </custom-entities-grid>\n</entity-grid-modal>\n",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntitiesGridModalComponent.ctorParameters = function () { return []; };
        CustomEntitiesGridModalComponent.propDecorators = {
            grid: [{ type: core$2.ViewChild, args: ["grid",] }],
            apiUrl: [{ type: core$2.Input }]
        };
        CustomEntitiesGridModalComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [])
        ], CustomEntitiesGridModalComponent);
        return CustomEntitiesGridModalComponent;
    }(core$1.BaseEntityListModalComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityModalComponent = /** @class */ (function (_super) {
        __extends(CustomEntityModalComponent, _super);
        function CustomEntityModalComponent() {
            var _this = _super.call(this) || this;
            _this.apiUrl = undefined;
            _this.group(customLib.CustomEntity);
            return _this;
        }
        CustomEntityModalComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: "custom-entity-modal",
                        template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntityModalComponent.ctorParameters = function () { return []; };
        CustomEntityModalComponent.propDecorators = {
            apiUrl: [{ type: core$2.Input }]
        };
        CustomEntityModalComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [])
        ], CustomEntityModalComponent);
        return CustomEntityModalComponent;
    }(core$1.BasePromptFormModalComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityModalModule = /** @class */ (function () {
        function CustomEntityModalModule() {
        }
        CustomEntityModalModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            web.PromptFormModalModule,
                            datepicker.BsDatepickerModule,
                            typeahead.TypeaheadModule.forRoot(),
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntityModalComponent],
                        entryComponents: [CustomEntityModalComponent],
                        exports: [
                            CustomEntityModalComponent,
                            web.PromptFormModalModule,
                            datepicker.BsDatepickerModule
                        ]
                    },] }
        ];
        return CustomEntityModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesGridComponent = /** @class */ (function (_super) {
        __extends(CustomEntitiesGridComponent, _super);
        function CustomEntitiesGridComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
            var _this = _super.call(this, dynamicRepository.fork(customLib.CustomEntity), modalsService, customLib.CustomEntity) || this;
            _this.errorsExtractor = errorsExtractor;
            _this.translateService = translateService;
            _this.dynamicRepository = dynamicRepository;
            _this.customEntitiesConfig = customEntitiesConfig;
            _this.autoload = false;
            _this.modalItem = {
                component: CustomEntityModalComponent
            };
            _this.title = core$1.translate("Custom entities");
            return _this;
        }
        /**
         * @return {?}
         */
        CustomEntitiesGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.mockedItems) {
                    this.useRest(__assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { autoload: this.autoload }));
                }
                if (this.mockedItems) {
                    this.useMock(__assign({ items: this.mockedItems }, this.customEntitiesConfig, { autoload: this.autoload }));
                }
                this.items$ = this.repository.items$.pipe(operators.map(function (items) {
                    return items.map(function (item) {
                        return item;
                    });
                }));
            };
        /**
         * @param {?=} item
         * @return {?}
         */
        CustomEntitiesGridComponent.prototype.defaultCreateCreateModal = /**
         * @param {?=} item
         * @return {?}
         */
            function (item) {
                item = item || new customLib.CustomEntity();
                this.modalCreate = __assign({}, this.modalCreate, { initialState: __assign({}, this.modalCreate.initialState, { data: item }) });
                return _super.prototype.defaultCreateCreateModal.call(this, item);
            };
        /**
         * @param {?=} item
         * @return {?}
         */
        CustomEntitiesGridComponent.prototype.defaultCreateUpdateModal = /**
         * @param {?=} item
         * @return {?}
         */
            function (item) {
                this.modalUpdate = __assign({}, this.modalUpdate, { initialState: __assign({}, this.modalUpdate.initialState, { data: item }) });
                return _super.prototype.defaultCreateUpdateModal.call(this, item);
            };
        CustomEntitiesGridComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: "custom-entities-grid",
                        template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntitiesGridComponent.ctorParameters = function () {
            return [
                { type: core$1.ModalsService },
                { type: core$1.ErrorsExtractor },
                { type: core.TranslateService },
                { type: ngxRepository.DynamicRepository },
                { type: undefined, decorators: [{ type: core$2.Inject, args: [customLib.CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
            ];
        };
        CustomEntitiesGridComponent.propDecorators = {
            autoload: [{ type: core$2.Input }],
            modalItem: [{ type: core$2.Input }],
            title: [{ type: core$2.Input }]
        };
        CustomEntitiesGridComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [core$1.ModalsService,
                core$1.ErrorsExtractor,
                core.TranslateService,
                ngxRepository.DynamicRepository, Object])
        ], CustomEntitiesGridComponent);
        return CustomEntitiesGridComponent;
    }(core$1.BaseEntityListComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesGridModule = /** @class */ (function () {
        function CustomEntitiesGridModule() {
        }
        CustomEntitiesGridModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            web.WebModalsModule,
                            web.EntityGridModule,
                            CustomEntityModalModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntitiesGridComponent],
                        exports: [
                            CustomEntitiesGridComponent,
                            web.EntityGridModule,
                            CustomEntityModalModule
                        ]
                    },] }
        ];
        return CustomEntitiesGridModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitiesGridModalModule = /** @class */ (function () {
        function CustomEntitiesGridModalModule() {
        }
        CustomEntitiesGridModalModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            web.EntityGridModalModule,
                            CustomEntitiesGridModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntitiesGridModalComponent],
                        entryComponents: [CustomEntitiesGridModalComponent],
                        exports: [
                            CustomEntitiesGridModalComponent,
                            web.EntityGridModalModule,
                            CustomEntitiesGridModule
                        ]
                    },] }
        ];
        return CustomEntitiesGridModalModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityInputComponent = /** @class */ (function (_super) {
        __extends(CustomEntityInputComponent, _super);
        function CustomEntityInputComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
            var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
            _this.errorsExtractor = errorsExtractor;
            _this.translateService = translateService;
            _this.dynamicRepository = dynamicRepository;
            _this.customEntitiesConfig = customEntitiesConfig;
            _this.modalAppendFromGrid = {
                component: CustomEntitiesGridModalComponent,
                initialState: {
                    title: core$1.translate("Select customEntity"),
                    yesTitle: core$1.translate("Select")
                }
            };
            _this.select = new core$2.EventEmitter();
            return _this;
        }
        /**
         * @return {?}
         */
        CustomEntityInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.mockedItems = [];
                this.useMock(__assign({ items: this.mockedItems }, this.customEntitiesConfig));
                this.mockedItemsChange.subscribe(function (items) { return _this.onSelect(items[0]); });
            };
        /**
         * @param {?} item
         * @return {?}
         */
        CustomEntityInputComponent.prototype.onSelect = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.select.emit(item);
            };
        CustomEntityInputComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: "custom-entity-input",
                        template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntityInputComponent.ctorParameters = function () {
            return [
                { type: core$1.ModalsService },
                { type: core$1.ErrorsExtractor },
                { type: core.TranslateService },
                { type: ngxRepository.DynamicRepository },
                { type: undefined, decorators: [{ type: core$2.Inject, args: [customLib.CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
            ];
        };
        CustomEntityInputComponent.propDecorators = {
            modalAppendFromGrid: [{ type: core$2.Input }],
            select: [{ type: core$2.Output }]
        };
        CustomEntityInputComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [core$1.ModalsService,
                core$1.ErrorsExtractor,
                core.TranslateService,
                ngxRepository.DynamicRepository, Object])
        ], CustomEntityInputComponent);
        return CustomEntityInputComponent;
    }(CustomEntitiesGridComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntityInputModule = /** @class */ (function () {
        function CustomEntityInputModule() {
        }
        CustomEntityInputModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            web.EntityInputModule,
                            CustomEntitiesGridModalModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntityInputComponent],
                        exports: [
                            CustomEntityInputComponent,
                            web.EntityInputModule,
                            CustomEntitiesGridModalModule
                        ]
                    },] }
        ];
        return CustomEntityInputModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitySelectComponent = /** @class */ (function (_super) {
        __extends(CustomEntitySelectComponent, _super);
        function CustomEntitySelectComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
            var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
            _this.errorsExtractor = errorsExtractor;
            _this.translateService = translateService;
            _this.dynamicRepository = dynamicRepository;
            _this.customEntitiesConfig = customEntitiesConfig;
            _this.searchField = new forms.FormControl();
            _this.nameField = "title";
            return _this;
        }
        /**
         * @return {?}
         */
        CustomEntitySelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (!this.mockedItems) {
                    this.useRest(__assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { paginationMeta: { perPage: 1000 } }));
                }
                if (this.mockedItems) {
                    this.useMock(__assign({ items: this.mockedItems }, this.customEntitiesConfig));
                }
            };
        /**
         * @param {?} value
         * @param {?} item
         * @return {?}
         */
        CustomEntitySelectComponent.prototype.checkChange = /**
         * @param {?} value
         * @param {?} item
         * @return {?}
         */
            function (value, item) {
                return item instanceof customLib.CustomEntity;
            };
        CustomEntitySelectComponent.decorators = [
            { type: core$2.Component, args: [{
                        selector: "custom-entity-select",
                        template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                        changeDetection: core$2.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        CustomEntitySelectComponent.ctorParameters = function () {
            return [
                { type: core$1.ModalsService },
                { type: core$1.ErrorsExtractor },
                { type: core.TranslateService },
                { type: ngxRepository.DynamicRepository },
                { type: undefined, decorators: [{ type: core$2.Inject, args: [customLib.CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
            ];
        };
        CustomEntitySelectComponent.propDecorators = {
            searchField: [{ type: core$2.Input }]
        };
        CustomEntitySelectComponent = __decorate([
            ngxBindIo.BindIoInner(),
            __metadata("design:paramtypes", [core$1.ModalsService,
                core$1.ErrorsExtractor,
                core.TranslateService,
                ngxRepository.DynamicRepository, Object])
        ], CustomEntitySelectComponent);
        return CustomEntitySelectComponent;
    }(CustomEntitiesGridComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomEntitySelectModule = /** @class */ (function () {
        function CustomEntitySelectModule() {
        }
        CustomEntitySelectModule.decorators = [
            { type: core$2.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            web.EntitySelectModule,
                            CustomEntitiesGridModalModule,
                            ngxBindIo.NgxBindIOModule
                        ],
                        declarations: [CustomEntitySelectComponent],
                        exports: [
                            CustomEntitySelectComponent,
                            web.EntitySelectModule,
                            CustomEntitiesGridModalModule
                        ]
                    },] }
        ];
        return CustomEntitySelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.RuI18n = RuI18n;
    exports.CustomOrgCustomLibWebModule = CustomOrgCustomLibWebModule;
    exports.CustomEntitiesGridModalComponent = CustomEntitiesGridModalComponent;
    exports.CustomEntitiesGridModalModule = CustomEntitiesGridModalModule;
    exports.CustomEntitiesGridComponent = CustomEntitiesGridComponent;
    exports.CustomEntitiesGridModule = CustomEntitiesGridModule;
    exports.CustomEntityInputComponent = CustomEntityInputComponent;
    exports.CustomEntityInputModule = CustomEntityInputModule;
    exports.CustomEntityModalComponent = CustomEntityModalComponent;
    exports.CustomEntityModalModule = CustomEntityModalModule;
    exports.CustomEntitySelectComponent = CustomEntitySelectComponent;
    exports.CustomEntitySelectModule = CustomEntitySelectModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=custom-org-custom-lib-web.umd.js.map