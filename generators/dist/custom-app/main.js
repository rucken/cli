(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/custom-org/custom-lib-web/fesm5/custom-org-custom-lib-web.js":
/*!********************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/dist/custom-org/custom-lib-web/fesm5/custom-org-custom-lib-web.js ***!
  \********************************************************************************************************************************/
/*! exports provided: RuI18n, CustomOrgCustomLibWebModule, CustomEntitiesGridModalComponent, CustomEntitiesGridModalModule, CustomEntitiesGridComponent, CustomEntitiesGridModule, CustomEntityInputComponent, CustomEntityInputModule, CustomEntityModalComponent, CustomEntityModalModule, CustomEntitySelectComponent, CustomEntitySelectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuI18n", function() { return RuI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOrgCustomLibWebModule", function() { return CustomOrgCustomLibWebModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesGridModalComponent", function() { return CustomEntitiesGridModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesGridModalModule", function() { return CustomEntitiesGridModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesGridComponent", function() { return CustomEntitiesGridComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesGridModule", function() { return CustomEntitiesGridModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityInputComponent", function() { return CustomEntityInputComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityInputModule", function() { return CustomEntityInputModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityModalComponent", function() { return CustomEntityModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityModalModule", function() { return CustomEntityModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitySelectComponent", function() { return CustomEntitySelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitySelectModule", function() { return CustomEntitySelectModule; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "../../node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/typeahead */ "../../node_modules/ngx-bootstrap/typeahead/fesm5/ngx-bootstrap-typeahead.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @custom-org/custom-lib */ "../../dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js");
/* harmony import */ var ngx_repository__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-repository */ "../../node_modules/ngx-repository/fesm5/ngx-repository.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");














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
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["translate"])("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["translate"])("English"),
    code: "en",
    translations: []
};
var CustomOrgCustomLibWebModule = /** @class */ (function () {
    function CustomOrgCustomLibWebModule() {
    }
    CustomOrgCustomLibWebModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"]],
                    providers: [
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ0,
                            multi: true
                        },
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ1,
                            multi: true
                        }
                    ]
                },] }
    ];
    return CustomOrgCustomLibWebModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        _this.group(_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CustomEntity"]);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: "custom-entity-modal",
                    template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        apiUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    CustomEntityModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [])
    ], CustomEntityModalComponent);
    return CustomEntityModalComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["BasePromptFormModalComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CustomEntitiesGridComponent, _super);
    function CustomEntitiesGridComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, dynamicRepository.fork(_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CustomEntity"]), modalsService, _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CustomEntity"]) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.autoload = false;
        _this.modalItem = {
            component: CustomEntityModalComponent
        };
        _this.title = Object(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["translate"])("Custom entities");
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
            this.useRest(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        if (this.mockedItems) {
            this.useMock(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({ items: this.mockedItems }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        this.items$ = this.repository.items$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(function (items) {
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
        item = item || new _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CustomEntity"]();
        this.modalCreate = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this.modalCreate, { initialState: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this.modalCreate.initialState, { data: item }) });
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
        this.modalUpdate = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this.modalUpdate, { initialState: Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({}, this.modalUpdate.initialState, { data: item }) });
        return _super.prototype.defaultCreateUpdateModal.call(this, item);
    };
    CustomEntitiesGridComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: "custom-entities-grid",
                    template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridComponent.ctorParameters = function () { return [
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"] },
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ENTITIES_CONFIG_TOKEN"],] }] }
    ]; };
    CustomEntitiesGridComponent.propDecorators = {
        autoload: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        modalItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    CustomEntitiesGridComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"], Object])
    ], CustomEntitiesGridComponent);
    return CustomEntitiesGridComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["BaseEntityListComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridModalComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CustomEntitiesGridModalComponent, _super);
    function CustomEntitiesGridModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        return _this;
    }
    CustomEntitiesGridModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: "custom-entities-grid-modal",
                    template: "<entity-grid-modal [bindIO]>\n  <custom-entities-grid [apiUrl]=\"apiUrl\" #grid> </custom-entities-grid>\n</entity-grid-modal>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridModalComponent.ctorParameters = function () { return []; };
    CustomEntitiesGridModalComponent.propDecorators = {
        grid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ViewChild"], args: ["grid",] }],
        apiUrl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    CustomEntitiesGridModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [])
    ], CustomEntitiesGridModalComponent);
    return CustomEntitiesGridModalComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["BaseEntityListModalComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalModule = /** @class */ (function () {
    function CustomEntityModalModule() {
    }
    CustomEntityModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["PromptFormModalModule"],
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerModule"],
                        ngx_bootstrap_typeahead__WEBPACK_IMPORTED_MODULE_2__["TypeaheadModule"].forRoot(),
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntityModalComponent],
                    entryComponents: [CustomEntityModalComponent],
                    exports: [
                        CustomEntityModalComponent,
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["PromptFormModalModule"],
                        ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_1__["BsDatepickerModule"]
                    ]
                },] }
    ];
    return CustomEntityModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridModule = /** @class */ (function () {
    function CustomEntitiesGridModule() {
    }
    CustomEntitiesGridModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["WebModalsModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityGridModule"],
                        CustomEntityModalModule,
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntitiesGridComponent],
                    exports: [
                        CustomEntitiesGridComponent,
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityGridModule"],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityGridModalModule"],
                        CustomEntitiesGridModule,
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntitiesGridModalComponent],
                    entryComponents: [CustomEntitiesGridModalComponent],
                    exports: [
                        CustomEntitiesGridModalComponent,
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityGridModalModule"],
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CustomEntityInputComponent, _super);
    function CustomEntityInputComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.modalAppendFromGrid = {
            component: CustomEntitiesGridModalComponent,
            initialState: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["translate"])("Select customEntity"),
                yesTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_6__["translate"])("Select")
            }
        };
        _this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_10__["EventEmitter"]();
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
        this.useMock(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({ items: this.mockedItems }, this.customEntitiesConfig));
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: "custom-entity-input",
                    template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityInputComponent.ctorParameters = function () { return [
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"] },
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ENTITIES_CONFIG_TOKEN"],] }] }
    ]; };
    CustomEntityInputComponent.propDecorators = {
        modalAppendFromGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }],
        select: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Output"] }]
    };
    CustomEntityInputComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"], Object])
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityInputModule"],
                        CustomEntitiesGridModalModule,
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntityInputComponent],
                    exports: [
                        CustomEntityInputComponent,
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntityInputModule"],
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__extends"])(CustomEntitySelectComponent, _super);
    function CustomEntitySelectComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.searchField = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
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
            this.useRest(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { paginationMeta: { perPage: 1000 } }));
        }
        if (this.mockedItems) {
            this.useMock(Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__assign"])({ items: this.mockedItems }, this.customEntitiesConfig));
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
        return item instanceof _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CustomEntity"];
    };
    CustomEntitySelectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Component"], args: [{
                    selector: "custom-entity-select",
                    template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitySelectComponent.ctorParameters = function () { return [
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"] },
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"] },
        { type: ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Inject"], args: [_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_7__["CUSTOM_ENTITIES_CONFIG_TOKEN"],] }] }
    ]; };
    CustomEntitySelectComponent.propDecorators = {
        searchField: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["Input"] }]
    };
    CustomEntitySelectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:paramtypes", [_rucken_core__WEBPACK_IMPORTED_MODULE_6__["ModalsService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_6__["ErrorsExtractor"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"],
            ngx_repository__WEBPACK_IMPORTED_MODULE_8__["DynamicRepository"], Object])
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntitySelectModule"],
                        CustomEntitiesGridModalModule,
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_12__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntitySelectComponent],
                    exports: [
                        CustomEntitySelectComponent,
                        _rucken_web__WEBPACK_IMPORTED_MODULE_11__["EntitySelectModule"],
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



//# sourceMappingURL=custom-org-custom-lib-web.js.map

/***/ }),

/***/ "../../dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js":
/*!************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js ***!
  \************************************************************************************************************************/
/*! exports provided: RuI18n, CustomOrgCustomLibModule, DEFAULT_CUSTOM_ENTITIES_CONFIG, CUSTOM_ENTITIES_CONFIG_TOKEN, ENTITIES_PROVIDERS, CustomEntity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuI18n", function() { return RuI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOrgCustomLibModule", function() { return CustomOrgCustomLibModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CUSTOM_ENTITIES_CONFIG", function() { return DEFAULT_CUSTOM_ENTITIES_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ENTITIES_CONFIG_TOKEN", function() { return CUSTOM_ENTITIES_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES_PROVIDERS", function() { return ENTITIES_PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntity", function() { return CustomEntity; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_repository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-repository */ "../../node_modules/ngx-repository/fesm5/ngx-repository.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! class-transformer */ "../../node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! class-validator */ "../../node_modules/class-validator/index.js");
/* harmony import */ var class_validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(class_validator__WEBPACK_IMPORTED_MODULE_6__);








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
var CustomEntity = /** @class */ (function () {
    function CustomEntity() {
        this.id = undefined;
        this.name = undefined;
        this.title = undefined;
        this.createdAt = undefined;
        this.updatedAt = undefined;
    }
    /**
     * @return {?}
     */
    CustomEntity.prototype.toString = /**
     * @return {?}
     */
    function () {
        return this.title;
    };
    CustomEntity.strings = {
        id: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Id"),
        name: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Name"),
        title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Title"),
        createdAt: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Created at"),
        updatedAt: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Updated at"),
        createTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Add new custom entity "),
        viewTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Custom entity  #{{id}}"),
        updateTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Update custom entity  #{{id}}"),
        deleteTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Delete custom entity  #{{id}}"),
        deleteMessage: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Do you really want to delete custom entity ?")
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(class_validator__WEBPACK_IMPORTED_MODULE_6__["IsNotEmpty"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", String)
    ], CustomEntity.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["transformStringToDate"], { toClassOnly: true }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["transformDateToString"], { toPlainOnly: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], CustomEntity.prototype, "createdAt", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__decorate"])([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["transformStringToDate"], { toClassOnly: true }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["Transform"])(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["transformDateToString"], { toPlainOnly: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_3__["__metadata"])("design:type", Object)
    ], CustomEntity.prototype, "updatedAt", void 0);
    return CustomEntity;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var DEFAULT_CUSTOM_ENTITIES_CONFIG = {
    name: "custom_entity",
    pluralName: "custom_entities",
    autoload: true,
    paginationMeta: {
        perPage: 5
    },
    actionOptions: {
        responseData: function (data, action) {
            if (action === ngx_repository__WEBPACK_IMPORTED_MODULE_2__["ProviderActionEnum"].Delete) {
                return true;
            }
            else {
                if (action === ngx_repository__WEBPACK_IMPORTED_MODULE_2__["ProviderActionEnum"].LoadAll) {
                    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["plainToClass"])(CustomEntity, data && data.body && data.body.customEntities);
                }
                else {
                    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_5__["plainToClass"])(CustomEntity, data && data.body && data.body.customEntity);
                }
            }
        },
        responsePaginationMeta: function (data, action) {
            return {
                totalResults: data && data.body && data.body.meta && data.body.meta.totalResults,
                perPage: undefined
            };
        }
    },
    restOptions: {
        limitQueryParam: "per_page",
        pageQueryParam: "cur_page",
        searchTextQueryParam: "q"
    }
};
/** @type {?} */
var CUSTOM_ENTITIES_CONFIG_TOKEN = "CustomEntitiesConfig";

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var ENTITIES_PROVIDERS = [
    {
        provide: CUSTOM_ENTITIES_CONFIG_TOKEN,
        useValue: DEFAULT_CUSTOM_ENTITIES_CONFIG
    }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ɵ0 = {
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_4__["translate"])("English"),
    code: "en",
    translations: []
};
var CustomOrgCustomLibModule = /** @class */ (function () {
    function CustomOrgCustomLibModule() {
    }
    CustomOrgCustomLibModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]],
                    providers: [
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_4__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ0,
                            multi: true
                        },
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_4__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ1,
                            multi: true
                        },
                        ENTITIES_PROVIDERS
                    ]
                },] }
    ];
    return CustomOrgCustomLibModule;
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



//# sourceMappingURL=custom-org-custom-lib.js.map

/***/ }),

/***/ "../../node_modules/html-loader/index.js!../../node_modules/markdown-loader/index.js!../../README.md":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/node_modules/html-loader!/home/travis/build/rucken/cli/test/fixtures/generators/node_modules/markdown-loader!/home/travis/build/rucken/cli/test/fixtures/generators/README.md ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 id=\"fixtures\">Fixtures</h1>\n<p>This project was generated with <a href=\"https://github.com/angular/angular-cli\">Angular CLI</a> using <a href=\"https://nrwl.io/nx\">Nrwl Nx</a>.</p>\n<h2 id=\"nrwl-extensions-for-angular-nx\">Nrwl Extensions for Angular (Nx)</h2>\n<p><a href=\"https://nrwl.io/nx\"><img src=\"https://preview.ibb.co/mW6sdw/nx_logo.png\"></a></p>\n<p>Nx is an open source toolkit for enterprise Angular applications.</p>\n<p>Nx is designed to help you create and build enterprise grade Angular applications. It provides an opinionated approach to application project structure and patterns.</p>\n<h2 id=\"quick-start--documentation\">Quick Start &amp; Documentation</h2>\n<p><a href=\"http://nrwl.io/nx\">Watch a 5-minute video on how to get started with Nx.</a></p>\n<h2 id=\"generate-your-first-application\">Generate your first application</h2>\n<p>Run <code>ng generate app myapp</code> to generate an application. When using Nx, you can create multiple applications and libraries in the same CLI workspace. Read more <a href=\"http://nrwl.io/nx\">here</a>.</p>\n<h2 id=\"development-server\">Development server</h2>\n<p>Run <code>ng serve --project=myapp</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n<h2 id=\"code-scaffolding\">Code scaffolding</h2>\n<p>Run <code>ng generate component component-name --project=myapp</code> to generate a new component. You can also use <code>ng generate directive|pipe|service|class|guard|interface|enum|module</code>.</p>\n<h2 id=\"build\">Build</h2>\n<p>Run <code>ng build --project=myapp</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build.</p>\n<h2 id=\"running-unit-tests\">Running unit tests</h2>\n<p>Run <code>ng test</code> to execute the unit tests via <a href=\"https://karma-runner.github.io\">Karma</a>.</p>\n<h2 id=\"running-end-to-end-tests\">Running end-to-end tests</h2>\n<p>Run <code>ng e2e</code> to execute the end-to-end tests via <a href=\"http://www.protractortest.org/\">Protractor</a>.\nBefore running the tests make sure you are serving the app via <code>ng serve</code>.</p>\n<h2 id=\"further-help\">Further help</h2>\n<p>To get more help on the Angular CLI use <code>ng help</code> or go check out the <a href=\"https://github.com/angular/angular-cli/blob/master/README.md\">Angular CLI README</a>.</p>\n";

/***/ }),

/***/ "../../node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../entities-page/groups-frame/groups-frame.module": [
		"./src/app/pages/entities-page/groups-frame/groups-frame.module.ts",
		"groups-frame-groups-frame-module"
	],
	"../entities-page/users-frame/users-frame.module": [
		"./src/app/pages/entities-page/users-frame/users-frame.module.ts",
		"users-frame-users-frame-module"
	],
	"./content-types-frame/content-types-frame.module": [
		"./src/app/pages/entities-page/content-types-frame/content-types-frame.module.ts",
		"content-types-frame-content-types-frame-module"
	],
	"./custom-entities-frame/custom-entities-frame.module": [
		"./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.module.ts",
		"custom-entities-frame-custom-entities-frame-module"
	],
	"./groups-frame/groups-frame.module": [
		"./src/app/pages/entities-page/groups-frame/groups-frame.module.ts",
		"groups-frame-groups-frame-module"
	],
	"./pages/account-page/account-page.module": [
		"./src/app/pages/account-page/account-page.module.ts",
		"pages-account-page-account-page-module"
	],
	"./pages/admin-page/admin-page.module": [
		"./src/app/pages/admin-page/admin-page.module.ts",
		"pages-admin-page-admin-page-module"
	],
	"./pages/entities-page/entities-page.module": [
		"./src/app/pages/entities-page/entities-page.module.ts",
		"pages-entities-page-entities-page-module"
	],
	"./pages/home-page/home-page.module": [
		"./src/app/pages/home-page/home-page.module.ts",
		"pages-home-page-home-page-module"
	],
	"./pages/themes-page/themes-page.module": [
		"./src/app/pages/themes-page/themes-page.module.ts",
		"pages-themes-page-themes-page-module"
	],
	"./permissions-frame/permissions-frame.module": [
		"./src/app/pages/entities-page/permissions-frame/permissions-frame.module.ts",
		"permissions-frame-permissions-frame-module"
	],
	"./profile-frame/profile-frame.module": [
		"./src/app/pages/account-page/profile-frame/profile-frame.module.ts",
		"profile-frame-profile-frame-module"
	],
	"./users-frame/users-frame.module": [
		"./src/app/pages/entities-page/users-frame/users-frame.module.ts",
		"users-frame-users-frame-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.browser.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.browser.module.ts ***!
  \***************************************/
/*! exports provided: AppBrowserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBrowserModule", function() { return AppBrowserModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "../../node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "../../node_modules/@nguniversal/express-engine/fesm5/tokens.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _utils_initialize_browser_app__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/initialize-browser-app */ "./src/app/utils/initialize-browser-app.ts");











var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: _config_config__WEBPACK_IMPORTED_MODULE_9__["config"].app.id }),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_8__["AppModule"]
            ],
            providers: [
                {
                    provide: _nguniversal_express_engine_tokens__WEBPACK_IMPORTED_MODULE_4__["REQUEST"],
                    useFactory: function () {
                        return { headers: { cookie: document.cookie } };
                    }
                },
                { provide: _rucken_core__WEBPACK_IMPORTED_MODULE_5__["STORAGE_CONFIG_TOKEN"], useClass: _rucken_core__WEBPACK_IMPORTED_MODULE_5__["BrowserStorage"] },
                { provide: "ORIGIN_URL", useValue: location.origin },
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_INITIALIZER"],
                    useFactory: _utils_initialize_browser_app__WEBPACK_IMPORTED_MODULE_10__["initializeBrowserApp"],
                    multi: true,
                    deps: [_rucken_core__WEBPACK_IMPORTED_MODULE_5__["TokenService"], _rucken_web__WEBPACK_IMPORTED_MODULE_6__["ThemesService"], _rucken_core__WEBPACK_IMPORTED_MODULE_5__["LangService"]]
                }
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar\r\n  [title]=\"title\"\r\n  [showSignIn]=\"!(currentUser$ | async)\"\r\n  [showSignOut]=\"currentUser$ | async\"\r\n  (signIn)=\"onSignIn()\"\r\n  (signOut)=\"onSignOut()\"\r\n  #navbar\r\n></navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/chronos */ "../../node_modules/ngx-bootstrap/chronos/fesm5/ngx-bootstrap-chronos.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "../../node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/locale */ "../../node_modules/ngx-bootstrap/locale/fesm5/ngx-bootstrap-locale.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");















Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])("ru", ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["ruLocale"]);
Object(ngx_bootstrap_chronos__WEBPACK_IMPORTED_MODULE_8__["defineLocale"])("en", ngx_bootstrap_locale__WEBPACK_IMPORTED_MODULE_10__["enGbLocale"]);
var AppComponent = /** @class */ (function () {
    function AppComponent(_langService, _authService, _tokenService, _translateService, _bsLocaleService, _metaService, _authModalService, _platformId) {
        var _this = this;
        this._langService = _langService;
        this._authService = _authService;
        this._tokenService = _tokenService;
        this._translateService = _translateService;
        this._bsLocaleService = _bsLocaleService;
        this._metaService = _metaService;
        this._authModalService = _authModalService;
        this._platformId = _platformId;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__["Subject"]();
        this._authModalService.signInInfoMessage =
            _config_config__WEBPACK_IMPORTED_MODULE_14__["config"].authModal.signInInfoMessage;
        this._authModalService.signUpInfoMessage =
            _config_config__WEBPACK_IMPORTED_MODULE_14__["config"].authModal.signUpInfoMessage;
        this.currentUser$ = this._authService.current$;
        this._langService.current$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed$))
            .subscribe(function (lang) {
            if (lang) {
                _this._bsLocaleService.use(lang);
                _this._metaService.setTag("og:locale", lang.toLowerCase() + "-" + lang.toUpperCase());
                _this.title = _this._translateService.instant(_this._metaService.loader.settings.applicationName);
            }
        });
        this._tokenService.tokenHasExpired$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["takeUntil"])(this._destroyed$))
            .subscribe(function (result) {
            if (result === true) {
                if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(_this._platformId)) {
                    _this._authModalService.onTokenError();
                }
                else {
                    _this._authModalService.onSignOutSuccess(undefined);
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this._authModalService.onInfo();
        this.navbar.setRoutes(_app_routes__WEBPACK_IMPORTED_MODULE_13__["APP_ROUTES"]);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._destroyed$.next(true);
        this._destroyed$.complete();
    };
    AppComponent.prototype.onInfo = function () {
        this._authModalService.onInfo();
    };
    AppComponent.prototype.onSignOut = function () {
        this._authModalService.onSignOut();
    };
    AppComponent.prototype.onSignIn = function () {
        this._authModalService.onSignIn();
    };
    AppComponent.prototype.onOauthSignInSuccess = function (modal, data) {
        this._authModalService.onOauthSignInSuccess(modal, data);
    };
    AppComponent.prototype.onSignInOrInfoSuccess = function (modal, data) {
        this._authModalService.onSignInOrInfoSuccess(modal, data);
    };
    AppComponent.prototype.onSignOutSuccess = function (modal) {
        this._authModalService.onSignOutSuccess(modal);
    };
    AppComponent.prototype.onError = function (error) {
        this._authModalService.onError(error);
    };
    AppComponent.prototype.onSignInError = function (modal, error) {
        this._authModalService.onSignInError(modal, error);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])("navbar"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _rucken_web__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_7__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rucken_core__WEBPACK_IMPORTED_MODULE_5__["LangService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_5__["TokenService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_9__["BsLocaleService"],
            _ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__["MetaService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_5__["AuthModalService"],
            Object])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "../../node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-permissions */ "../../node_modules/ngx-permissions/ngx-permissions.umd.js");
/* harmony import */ var ngx_permissions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ngx_permissions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _utils_meta_factory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./utils/meta-factory */ "./src/app/utils/meta-factory.ts");
/* harmony import */ var _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @custom-org/custom-lib */ "../../dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js");
/* harmony import */ var _custom_org_custom_lib_web__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @custom-org/custom-lib-web */ "../../dist/custom-org/custom-lib-web/fesm5/custom-org-custom-lib-web.js");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"].withServerTransition({
                    appId: _config_config__WEBPACK_IMPORTED_MODULE_15__["config"].app.id
                }),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["TransferHttpCacheModule"].forRoot(),
                ngx_permissions__WEBPACK_IMPORTED_MODULE_11__["NgxPermissionsModule"].forRoot(),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["AuthModule"].forRoot({
                    apiUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl,
                    oauth: {
                        providers: _config_config__WEBPACK_IMPORTED_MODULE_15__["config"].oauth
                    }
                }),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["AccountModule"].forRoot({
                    apiUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].apiUrl
                }),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["LangModule"].forRoot({
                    languages: _config_config__WEBPACK_IMPORTED_MODULE_15__["config"].app.languages
                }),
                _rucken_web__WEBPACK_IMPORTED_MODULE_8__["ThemesModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_14__["APP_ROUTES"], {
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__["PreloadAllModules"],
                    initialNavigation: "enabled"
                }),
                _ngx_meta_core__WEBPACK_IMPORTED_MODULE_5__["MetaModule"].forRoot({
                    provide: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_5__["MetaLoader"],
                    useFactory: _utils_meta_factory__WEBPACK_IMPORTED_MODULE_17__["metaFactory"],
                    deps: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateService"]]
                }),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["AuthModalModule"].forRoot({
                    oauth: {
                        providers: _config_config__WEBPACK_IMPORTED_MODULE_15__["config"].oauth
                    }
                }),
                ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
                ngx_bind_io__WEBPACK_IMPORTED_MODULE_9__["NgxBindIOModule"].forRoot(),
                _rucken_core__WEBPACK_IMPORTED_MODULE_7__["RuckenCoreModule"],
                _rucken_web__WEBPACK_IMPORTED_MODULE_8__["RuckenWebModule"],
                _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_18__["CustomOrgCustomLibModule"],
                _custom_org_custom_lib_web__WEBPACK_IMPORTED_MODULE_19__["CustomOrgCustomLibWebModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: OAUTH_ROUTES, APP_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OAUTH_ROUTES", function() { return OAUTH_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTES", function() { return APP_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _pages_account_page_account_page_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/account-page/account-page.routes */ "./src/app/pages/account-page/account-page.routes.ts");
/* harmony import */ var _pages_admin_page_admin_page_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/admin-page/admin-page.routes */ "./src/app/pages/admin-page/admin-page.routes.ts");
/* harmony import */ var _pages_entities_page_entities_page_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/entities-page/entities-page.routes */ "./src/app/pages/entities-page/entities-page.routes.ts");
/* harmony import */ var _pages_home_page_home_page_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home-page/home-page.routes */ "./src/app/pages/home-page/home-page.routes.ts");
/* harmony import */ var _pages_themes_page_themes_page_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/themes-page/themes-page.routes */ "./src/app/pages/themes-page/themes-page.routes.ts");






var OAUTH_ROUTES = [
    {
        path: "auth/facebook",
        component: _rucken_core__WEBPACK_IMPORTED_MODULE_0__["AuthEmptyPageComponent"],
        canActivate: [_rucken_core__WEBPACK_IMPORTED_MODULE_0__["OauthGuard"]],
        data: {
            visible: false,
            oauth: {
                provider: "facebook",
                redirectTo: {
                    ifSuccess: "/home",
                    ifFail: "/home"
                }
            }
        }
    },
    {
        path: "auth/google-plus",
        component: _rucken_core__WEBPACK_IMPORTED_MODULE_0__["AuthEmptyPageComponent"],
        canActivate: [_rucken_core__WEBPACK_IMPORTED_MODULE_0__["OauthGuard"]],
        data: {
            visible: false,
            oauth: {
                provider: "google-plus",
                redirectTo: {
                    ifSuccess: "/home",
                    ifFail: "/home"
                }
            }
        }
    }
];
var APP_ROUTES = OAUTH_ROUTES.concat([
    {
        path: "",
        redirectTo: "/home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: "./pages/home-page/home-page.module#HomePageModule",
        data: _pages_home_page_home_page_routes__WEBPACK_IMPORTED_MODULE_4__["HOME_PAGE_ROUTES"][0].data
    },
    {
        path: "entities",
        loadChildren: "./pages/entities-page/entities-page.module#EntitiesPageModule",
        data: _pages_entities_page_entities_page_routes__WEBPACK_IMPORTED_MODULE_3__["ENTITIES_PAGE_ROUTES"][0].data
    },
    {
        path: "themes",
        loadChildren: "./pages/themes-page/themes-page.module#ThemesPageModule",
        data: _pages_themes_page_themes_page_routes__WEBPACK_IMPORTED_MODULE_5__["THEMES_PAGE_ROUTES"][0].data
    },
    {
        path: "account",
        loadChildren: "./pages/account-page/account-page.module#AccountPageModule",
        data: _pages_account_page_account_page_routes__WEBPACK_IMPORTED_MODULE_1__["ACCOUNT_PAGE_ROUTES"][0].data
    },
    {
        path: "admin",
        loadChildren: "./pages/admin-page/admin-page.module#AdminPageModule",
        data: _pages_admin_page_admin_page_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_PAGE_ROUTES"][0].data
    },
    {
        path: "**",
        redirectTo: "home"
    }
]);


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "../../node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "../../node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "../../node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _i18n_ru_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../i18n/ru.i18n */ "./src/app/i18n/ru.i18n.ts");





_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["fas"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["fab"]);
var config = {
    app: {
        id: "custom-app",
        title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Custom app"),
        description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Core with UI for web todo application maked on Angular7+ based on Rucken template"),
        languages: [
            {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Russian"),
                code: "ru",
                translations: [_i18n_ru_i18n__WEBPACK_IMPORTED_MODULE_4__["RuI18n"]]
            }
        ]
    },
    authModal: {
        signInInfoMessage: {
            text: "<p>{{title}}</p><ul><li>{{user1}}</li><li>{{user2}}</li><li>{{user3}}</li></ul>",
            data: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Demo users:"),
                user1: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("user with admin group: admin@admin.com, password: 12345678"),
                user2: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("user with user group: user1@user1.com, password: 12345678"),
                user3: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("user with user group: user2@user2.com, password: 12345678")
            }
        },
        signUpInfoMessage: ""
    },
    oauth: [
        {
            name: "facebook",
            icon: ["fab", "facebook-square"],
            signInTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Sign in with Facebook")
        },
        {
            name: "google-plus",
            icon: ["fab", "google-plus"],
            signInTitle: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_3__["translate"])("Sign in with Google+")
        }
    ]
};


/***/ }),

/***/ "./src/app/i18n/ru.i18n.ts":
/*!*********************************!*\
  !*** ./src/app/i18n/ru.i18n.ts ***!
  \*********************************/
/*! exports provided: RuI18n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuI18n", function() { return RuI18n; });
var RuI18n = {};


/***/ }),

/***/ "./src/app/pages/account-page/account-page.children-routes.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/account-page/account-page.children-routes.ts ***!
  \********************************************************************/
/*! exports provided: ACCOUNT_PAGE_CHILDREN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_PAGE_CHILDREN_ROUTES", function() { return ACCOUNT_PAGE_CHILDREN_ROUTES; });
/* harmony import */ var _profile_frame_profile_frame_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile-frame/profile-frame.routes */ "./src/app/pages/account-page/profile-frame/profile-frame.routes.ts");

var ACCOUNT_PAGE_CHILDREN_ROUTES = [
    { path: "", redirectTo: "/account/profile", pathMatch: "full" },
    {
        path: "profile",
        loadChildren: "./profile-frame/profile-frame.module#ProfileFrameModule",
        data: _profile_frame_profile_frame_routes__WEBPACK_IMPORTED_MODULE_0__["PROFILE_FRAME_ROUTES"][0].data
    }
];


/***/ }),

/***/ "./src/app/pages/account-page/account-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/account-page/account-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-2\">\n      <nav-sidebar parentUrl=\"/account\" #sidebar></nav-sidebar>\n    </div>\n    <div class=\"col-sm-9 col-md-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account-page/account-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/account-page/account-page.component.ts ***!
  \**************************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var _account_page_children_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account-page.children-routes */ "./src/app/pages/account-page/account-page.children-routes.ts");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");






var AccountPageComponent = /** @class */ (function () {
    function AccountPageComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    AccountPageComponent.prototype.ngOnInit = function () {
        this.sidebar.setRoutes(_account_page_children_routes__WEBPACK_IMPORTED_MODULE_4__["ACCOUNT_PAGE_CHILDREN_ROUTES"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebar"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _rucken_web__WEBPACK_IMPORTED_MODULE_3__["NavSidebarComponent"])
    ], AccountPageComponent.prototype, "sidebar", void 0);
    AccountPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "account-page",
            template: __webpack_require__(/*! ./account-page.component.html */ "./src/app/pages/account-page/account-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AccountPageComponent);
    return AccountPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-page/account-page.routes.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/account-page/account-page.routes.ts ***!
  \***********************************************************/
/*! exports provided: ACCOUNT_PAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCOUNT_PAGE_ROUTES", function() { return ACCOUNT_PAGE_ROUTES; });
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _account_page_children_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-page.children-routes */ "./src/app/pages/account-page/account-page.children-routes.ts");
/* harmony import */ var _account_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-page.component */ "./src/app/pages/account-page/account-page.component.ts");




var ACCOUNT_PAGE_ROUTES = [
    {
        path: "",
        component: _account_page_component__WEBPACK_IMPORTED_MODULE_3__["AccountPageComponent"],
        canActivate: [_rucken_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsGuard"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["MetaGuard"]],
        data: {
            name: "account",
            permissions: {
                only: "read_account-page",
                redirectTo: "/home"
            },
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_1__["translate"])("Account"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_1__["translate"])("Account page")
            }
        },
        children: _account_page_children_routes__WEBPACK_IMPORTED_MODULE_2__["ACCOUNT_PAGE_CHILDREN_ROUTES"]
    }
];


/***/ }),

/***/ "./src/app/pages/account-page/profile-frame/profile-frame.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/account-page/profile-frame/profile-frame.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <profile-panel\n    [yesTitle]=\"'Update' | translate\"\n    [apiUrl]=\"apiUrl\"\n    [enableSave]=\"'change_profile' | perm: false | async\"\n  ></profile-panel>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/account-page/profile-frame/profile-frame.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/account-page/profile-frame/profile-frame.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ProfileFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileFrameComponent", function() { return ProfileFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var ProfileFrameComponent = /** @class */ (function () {
    function ProfileFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    ProfileFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "profile-frame",
            template: __webpack_require__(/*! ./profile-frame.component.html */ "./src/app/pages/account-page/profile-frame/profile-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileFrameComponent);
    return ProfileFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/account-page/profile-frame/profile-frame.routes.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/account-page/profile-frame/profile-frame.routes.ts ***!
  \**************************************************************************/
/*! exports provided: PROFILE_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PROFILE_FRAME_ROUTES", function() { return PROFILE_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _profile_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-frame.component */ "./src/app/pages/account-page/profile-frame/profile-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var PROFILE_FRAME_ROUTES = [
    {
        path: "",
        component: _profile_frame_component__WEBPACK_IMPORTED_MODULE_1__["ProfileFrameComponent"],
        canActivate: [_rucken_core__WEBPACK_IMPORTED_MODULE_0__["PermissionsGuard"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "profile",
            permissions: {
                only: "read_profile-frame",
                redirectTo: "/home"
            },
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Profile"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Profile frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/admin-page/admin-page.children-routes.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/admin-page/admin-page.children-routes.ts ***!
  \****************************************************************/
/*! exports provided: ADMIN_PAGE_CHILDREN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PAGE_CHILDREN_ROUTES", function() { return ADMIN_PAGE_CHILDREN_ROUTES; });
/* harmony import */ var _entities_page_groups_frame_groups_frame_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entities-page/groups-frame/groups-frame.routes */ "./src/app/pages/entities-page/groups-frame/groups-frame.routes.ts");
/* harmony import */ var _entities_page_users_frame_users_frame_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../entities-page/users-frame/users-frame.routes */ "./src/app/pages/entities-page/users-frame/users-frame.routes.ts");


var ADMIN_PAGE_CHILDREN_ROUTES = [
    { path: "", redirectTo: "/admin/users", pathMatch: "full" },
    {
        path: "users",
        loadChildren: "../entities-page/users-frame/users-frame.module#UsersFrameModule",
        data: _entities_page_users_frame_users_frame_routes__WEBPACK_IMPORTED_MODULE_1__["USERS_FRAME_ROUTES"][0].data
    },
    {
        path: "groups",
        loadChildren: "../entities-page/groups-frame/groups-frame.module#GroupsFrameModule",
        data: _entities_page_groups_frame_groups_frame_routes__WEBPACK_IMPORTED_MODULE_0__["GROUPS_FRAME_ROUTES"][0].data
    }
];


/***/ }),

/***/ "./src/app/pages/admin-page/admin-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/admin-page/admin-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-2\">\n      <nav-sidebar parentUrl=\"/admin\" #sidebar></nav-sidebar>\n    </div>\n    <div class=\"col-sm-9 col-md-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/admin-page/admin-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/admin-page/admin-page.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var _admin_page_children_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-page.children-routes */ "./src/app/pages/admin-page/admin-page.children-routes.ts");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");





var AdminPageComponent = /** @class */ (function () {
    function AdminPageComponent() {
    }
    AdminPageComponent.prototype.ngOnInit = function () {
        this.sidebar.setRoutes(_admin_page_children_routes__WEBPACK_IMPORTED_MODULE_3__["ADMIN_PAGE_CHILDREN_ROUTES"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebar"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _rucken_web__WEBPACK_IMPORTED_MODULE_2__["NavSidebarComponent"])
    ], AdminPageComponent.prototype, "sidebar", void 0);
    AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "admin-page",
            template: __webpack_require__(/*! ./admin-page.component.html */ "./src/app/pages/admin-page/admin-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        })
    ], AdminPageComponent);
    return AdminPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/admin-page/admin-page.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/admin-page/admin-page.routes.ts ***!
  \*******************************************************/
/*! exports provided: ADMIN_PAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADMIN_PAGE_ROUTES", function() { return ADMIN_PAGE_ROUTES; });
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _admin_page_children_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-page.children-routes */ "./src/app/pages/admin-page/admin-page.children-routes.ts");
/* harmony import */ var _admin_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-page.component */ "./src/app/pages/admin-page/admin-page.component.ts");




var ADMIN_PAGE_ROUTES = [
    {
        path: "",
        component: _admin_page_component__WEBPACK_IMPORTED_MODULE_3__["AdminPageComponent"],
        canActivate: [_rucken_core__WEBPACK_IMPORTED_MODULE_1__["PermissionsGuard"], _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["MetaGuard"]],
        data: {
            name: "admin",
            permissions: {
                only: "read_admin-page",
                redirectTo: "/home"
            },
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_1__["translate"])("Administration"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_1__["translate"])("Administration page")
            }
        },
        children: _admin_page_children_routes__WEBPACK_IMPORTED_MODULE_2__["ADMIN_PAGE_CHILDREN_ROUTES"]
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/content-types-frame/content-types-frame.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/pages/entities-page/content-types-frame/content-types-frame.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <content-types-grid [apiUrl]=\"apiUrl\"></content-types-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/content-types-frame/content-types-frame.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/pages/entities-page/content-types-frame/content-types-frame.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ContentTypesFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentTypesFrameComponent", function() { return ContentTypesFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var ContentTypesFrameComponent = /** @class */ (function () {
    function ContentTypesFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    ContentTypesFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "content-types-frame",
            template: __webpack_require__(/*! ./content-types-frame.component.html */ "./src/app/pages/entities-page/content-types-frame/content-types-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContentTypesFrameComponent);
    return ContentTypesFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/content-types-frame/content-types-frame.routes.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/entities-page/content-types-frame/content-types-frame.routes.ts ***!
  \***************************************************************************************/
/*! exports provided: CONTENT_TYPES_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_TYPES_FRAME_ROUTES", function() { return CONTENT_TYPES_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _content_types_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content-types-frame.component */ "./src/app/pages/entities-page/content-types-frame/content-types-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var CONTENT_TYPES_FRAME_ROUTES = [
    {
        path: "",
        component: _content_types_frame_component__WEBPACK_IMPORTED_MODULE_1__["ContentTypesFrameComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "content-types",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Content types"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Content types frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <custom-entities-grid\n    [apiUrl]=\"apiUrl\"\n    [autoload]=\"true\"\n  ></custom-entities-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: CustomEntitiesFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesFrameComponent", function() { return CustomEntitiesFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");






var CustomEntitiesFrameComponent = /** @class */ (function () {
    function CustomEntitiesFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    CustomEntitiesFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "custom-entities-frame",
            template: __webpack_require__(/*! ./custom-entities-frame.component.html */ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], CustomEntitiesFrameComponent);
    return CustomEntitiesFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.routes.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.routes.ts ***!
  \*******************************************************************************************/
/*! exports provided: CUSTOM_ENTITIES_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ENTITIES_FRAME_ROUTES", function() { return CUSTOM_ENTITIES_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _custom_entities_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-entities-frame.component */ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var CUSTOM_ENTITIES_FRAME_ROUTES = [
    {
        path: "",
        component: _custom_entities_frame_component__WEBPACK_IMPORTED_MODULE_1__["CustomEntitiesFrameComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "custom-entities",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Custom entities"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Custom entities frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/entities-page.children-routes.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/entities-page/entities-page.children-routes.ts ***!
  \**********************************************************************/
/*! exports provided: ENTITIES_PAGE_CHILDREN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES_PAGE_CHILDREN_ROUTES", function() { return ENTITIES_PAGE_CHILDREN_ROUTES; });
/* harmony import */ var _content_types_frame_content_types_frame_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content-types-frame/content-types-frame.routes */ "./src/app/pages/entities-page/content-types-frame/content-types-frame.routes.ts");
/* harmony import */ var _custom_entities_frame_custom_entities_frame_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-entities-frame/custom-entities-frame.routes */ "./src/app/pages/entities-page/custom-entities-frame/custom-entities-frame.routes.ts");
/* harmony import */ var _groups_frame_groups_frame_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./groups-frame/groups-frame.routes */ "./src/app/pages/entities-page/groups-frame/groups-frame.routes.ts");
/* harmony import */ var _permissions_frame_permissions_frame_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./permissions-frame/permissions-frame.routes */ "./src/app/pages/entities-page/permissions-frame/permissions-frame.routes.ts");
/* harmony import */ var _users_frame_users_frame_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-frame/users-frame.routes */ "./src/app/pages/entities-page/users-frame/users-frame.routes.ts");





var ENTITIES_PAGE_CHILDREN_ROUTES = [
    { path: "", redirectTo: "/entities/content-types", pathMatch: "full" },
    {
        path: "content-types",
        loadChildren: "./content-types-frame/content-types-frame.module#ContentTypesFrameModule",
        data: _content_types_frame_content_types_frame_routes__WEBPACK_IMPORTED_MODULE_0__["CONTENT_TYPES_FRAME_ROUTES"][0].data
    },
    {
        path: "groups",
        loadChildren: "./groups-frame/groups-frame.module#GroupsFrameModule",
        data: _groups_frame_groups_frame_routes__WEBPACK_IMPORTED_MODULE_2__["GROUPS_FRAME_ROUTES"][0].data
    },
    {
        path: "permissions",
        loadChildren: "./permissions-frame/permissions-frame.module#PermissionsFrameModule",
        data: _permissions_frame_permissions_frame_routes__WEBPACK_IMPORTED_MODULE_3__["PERMISSIONS_FRAME_ROUTES"][0].data
    },
    {
        path: "users",
        loadChildren: "./users-frame/users-frame.module#UsersFrameModule",
        data: _users_frame_users_frame_routes__WEBPACK_IMPORTED_MODULE_4__["USERS_FRAME_ROUTES"][0].data
    },
    {
        path: "custom-entities",
        loadChildren: "./custom-entities-frame/custom-entities-frame.module#CustomEntitiesFrameModule",
        data: _custom_entities_frame_custom_entities_frame_routes__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ENTITIES_FRAME_ROUTES"][0].data
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/entities-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/entities-page/entities-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-3 col-md-2\">\n      <nav-sidebar parentUrl=\"/entities\" #sidebar></nav-sidebar>\n    </div>\n    <div class=\"col-sm-9 col-md-10\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/entities-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/entities-page/entities-page.component.ts ***!
  \****************************************************************/
/*! exports provided: EntitiesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntitiesPageComponent", function() { return EntitiesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var _entities_page_children_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entities-page.children-routes */ "./src/app/pages/entities-page/entities-page.children-routes.ts");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");






var EntitiesPageComponent = /** @class */ (function () {
    function EntitiesPageComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    EntitiesPageComponent.prototype.ngOnInit = function () {
        this.sidebar.setRoutes(_entities_page_children_routes__WEBPACK_IMPORTED_MODULE_4__["ENTITIES_PAGE_CHILDREN_ROUTES"]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("sidebar"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _rucken_web__WEBPACK_IMPORTED_MODULE_3__["NavSidebarComponent"])
    ], EntitiesPageComponent.prototype, "sidebar", void 0);
    EntitiesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_5__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "entities-page",
            template: __webpack_require__(/*! ./entities-page.component.html */ "./src/app/pages/entities-page/entities-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], EntitiesPageComponent);
    return EntitiesPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/entities-page.routes.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/entities-page/entities-page.routes.ts ***!
  \*************************************************************/
/*! exports provided: ENTITIES_PAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTITIES_PAGE_ROUTES", function() { return ENTITIES_PAGE_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _entities_page_children_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entities-page.children-routes */ "./src/app/pages/entities-page/entities-page.children-routes.ts");
/* harmony import */ var _entities_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entities-page.component */ "./src/app/pages/entities-page/entities-page.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");




var ENTITIES_PAGE_ROUTES = [
    {
        path: "",
        component: _entities_page_component__WEBPACK_IMPORTED_MODULE_2__["EntitiesPageComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_3__["MetaGuard"]],
        data: {
            name: "entities",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Entities"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Entities page")
            }
        },
        children: _entities_page_children_routes__WEBPACK_IMPORTED_MODULE_1__["ENTITIES_PAGE_CHILDREN_ROUTES"]
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/groups-frame/groups-frame.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/entities-page/groups-frame/groups-frame.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <groups-grid [apiUrl]=\"apiUrl\"></groups-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/groups-frame/groups-frame.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/entities-page/groups-frame/groups-frame.component.ts ***!
  \****************************************************************************/
/*! exports provided: GroupsFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsFrameComponent", function() { return GroupsFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var GroupsFrameComponent = /** @class */ (function () {
    function GroupsFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    GroupsFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "groups-frame",
            template: __webpack_require__(/*! ./groups-frame.component.html */ "./src/app/pages/entities-page/groups-frame/groups-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GroupsFrameComponent);
    return GroupsFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/groups-frame/groups-frame.routes.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/entities-page/groups-frame/groups-frame.routes.ts ***!
  \*************************************************************************/
/*! exports provided: GROUPS_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPS_FRAME_ROUTES", function() { return GROUPS_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _groups_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./groups-frame.component */ "./src/app/pages/entities-page/groups-frame/groups-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var GROUPS_FRAME_ROUTES = [
    {
        path: "",
        component: _groups_frame_component__WEBPACK_IMPORTED_MODULE_1__["GroupsFrameComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "groups",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Groups"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Groups frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/permissions-frame/permissions-frame.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/pages/entities-page/permissions-frame/permissions-frame.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <permissions-grid [apiUrl]=\"apiUrl\"></permissions-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/permissions-frame/permissions-frame.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/entities-page/permissions-frame/permissions-frame.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PermissionsFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionsFrameComponent", function() { return PermissionsFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var PermissionsFrameComponent = /** @class */ (function () {
    function PermissionsFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    PermissionsFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "permissions-frame",
            template: __webpack_require__(/*! ./permissions-frame.component.html */ "./src/app/pages/entities-page/permissions-frame/permissions-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PermissionsFrameComponent);
    return PermissionsFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/permissions-frame/permissions-frame.routes.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/entities-page/permissions-frame/permissions-frame.routes.ts ***!
  \***********************************************************************************/
/*! exports provided: PERMISSIONS_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERMISSIONS_FRAME_ROUTES", function() { return PERMISSIONS_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _permissions_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./permissions-frame.component */ "./src/app/pages/entities-page/permissions-frame/permissions-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var PERMISSIONS_FRAME_ROUTES = [
    {
        path: "",
        component: _permissions_frame_component__WEBPACK_IMPORTED_MODULE_1__["PermissionsFrameComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "permissions",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Permissions"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Permissions frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/entities-page/users-frame/users-frame.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/entities-page/users-frame/users-frame.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span class=\"ident\">{{ parentTitle$ | async | translate }}:</span>\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <users-grid [apiUrl]=\"apiUrl\"></users-grid>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/entities-page/users-frame/users-frame.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/entities-page/users-frame/users-frame.component.ts ***!
  \**************************************************************************/
/*! exports provided: UsersFrameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersFrameComponent", function() { return UsersFrameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");






var UsersFrameComponent = /** @class */ (function () {
    function UsersFrameComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl;
        this.parentTitle$ = this._activatedRoute.parent.parent.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    UsersFrameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "users-frame",
            template: __webpack_require__(/*! ./users-frame.component.html */ "./src/app/pages/entities-page/users-frame/users-frame.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], UsersFrameComponent);
    return UsersFrameComponent;
}());



/***/ }),

/***/ "./src/app/pages/entities-page/users-frame/users-frame.routes.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/entities-page/users-frame/users-frame.routes.ts ***!
  \***********************************************************************/
/*! exports provided: USERS_FRAME_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS_FRAME_ROUTES", function() { return USERS_FRAME_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _users_frame_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users-frame.component */ "./src/app/pages/entities-page/users-frame/users-frame.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var USERS_FRAME_ROUTES = [
    {
        path: "",
        component: _users_frame_component__WEBPACK_IMPORTED_MODULE_1__["UsersFrameComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "users",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Users"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Users frame")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <h3 class=\"page-header\">\n    <span>{{ title$ | async | translate }}</span>\n  </h3>\n  <div [innerHTML]=\"readme | safeHtml\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");





var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
        this.readme = __webpack_require__(/*! html-loader!markdown-loader!./../../../../../../README.md */ "../../node_modules/html-loader/index.js!../../node_modules/markdown-loader/index.js!../../README.md").replace('<h1 id="custom-app">custom-app</h1>', "");
        this.title$ = this._activatedRoute.data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data && data.meta && data.meta.title; }));
    }
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_4__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "home-page",
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/pages/home-page/home-page.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.routes.ts ***!
  \*****************************************************/
/*! exports provided: HOME_PAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOME_PAGE_ROUTES", function() { return HOME_PAGE_ROUTES; });
/* harmony import */ var _home_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var HOME_PAGE_ROUTES = [
    {
        path: "",
        component: _home_page_component__WEBPACK_IMPORTED_MODULE_0__["HomePageComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "home",
            visible: false,
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_1__["translate"])("Home")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/themes-page/themes-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/themes-page/themes-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-3 col-md-2\">\r\n      <ul class=\"nav nav-sidebar\">\r\n        <li\r\n          [ngClass]=\"{ active: (currentTheme$ | async) === theme.url }\"\r\n          *ngFor=\"let theme of items$ | async\"\r\n        >\r\n          <a (click)=\"setCurrentTheme(theme.url)\" href=\"javascript:void(0)\">\r\n            {{ theme.name | translate }}\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div class=\"col-sm-9 col-md-10\">\r\n      <!-- Navbar\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section clearfix\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"navbar\">Navbar</h1>\r\n            </div>\r\n\r\n            <div class=\"bs-component\">\r\n              <nav class=\"navbar navbar-default\">\r\n                <div class=\"container-fluid\">\r\n                  <div class=\"navbar-header\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"navbar-toggle collapsed\"\r\n                      data-toggle=\"collapse\"\r\n                      data-target=\"#bs-example-navbar-collapse-1\"\r\n                    >\r\n                      <span class=\"sr-only\">Toggle navigation</span>\r\n                      <span class=\"icon-bar\"></span>\r\n                      <span class=\"icon-bar\"></span>\r\n                      <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                      Brand\r\n                    </a>\r\n                  </div>\r\n\r\n                  <div\r\n                    class=\"collapse navbar-collapse\"\r\n                    id=\"bs-example-navbar-collapse-1\"\r\n                  >\r\n                    <ul class=\"nav navbar-nav\">\r\n                      <li class=\"active\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          Link\r\n                          <span class=\"sr-only\">(current)</span>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Link</a>\r\n                      </li>\r\n                      <li class=\"dropdown\">\r\n                        <a\r\n                          href=\"javascript:void(0)\"\r\n                          class=\"dropdown-toggle\"\r\n                          data-toggle=\"dropdown\"\r\n                          role=\"button\"\r\n                          aria-expanded=\"false\"\r\n                        >\r\n                          Dropdown\r\n                          <span class=\"caret\"></span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Another action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Something else here</a>\r\n                          </li>\r\n                          <li class=\"divider\"></li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Separated link</a>\r\n                          </li>\r\n                          <li class=\"divider\"></li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\"\r\n                              >One more separated link</a\r\n                            >\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                    </ul>\r\n                    <form class=\"navbar-form navbar-left\" role=\"search\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Search\"\r\n                        />\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-default\">\r\n                        Submit\r\n                      </button>\r\n                    </form>\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Link</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </nav>\r\n            </div>\r\n\r\n            <div class=\"bs-component\">\r\n              <nav class=\"navbar navbar-inverse\">\r\n                <div class=\"container-fluid\">\r\n                  <div class=\"navbar-header\">\r\n                    <button\r\n                      type=\"button\"\r\n                      class=\"navbar-toggle collapsed\"\r\n                      data-toggle=\"collapse\"\r\n                      data-target=\"#bs-example-navbar-collapse-2\"\r\n                    >\r\n                      <span class=\"sr-only\">Toggle navigation</span>\r\n                      <span class=\"icon-bar\"></span>\r\n                      <span class=\"icon-bar\"></span>\r\n                      <span class=\"icon-bar\"></span>\r\n                    </button>\r\n                    <a class=\"navbar-brand\" href=\"javascript:void(0)\">\r\n                      Brand\r\n                    </a>\r\n                  </div>\r\n\r\n                  <div\r\n                    class=\"collapse navbar-collapse\"\r\n                    id=\"bs-example-navbar-collapse-2\"\r\n                  >\r\n                    <ul class=\"nav navbar-nav\">\r\n                      <li class=\"active\">\r\n                        <a href=\"javascript:void(0)\">\r\n                          Link\r\n                          <span class=\"sr-only\">(current)</span>\r\n                        </a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Link</a>\r\n                      </li>\r\n                      <li class=\"dropdown\">\r\n                        <a\r\n                          href=\"javascript:void(0)\"\r\n                          class=\"dropdown-toggle\"\r\n                          data-toggle=\"dropdown\"\r\n                          role=\"button\"\r\n                          aria-expanded=\"false\"\r\n                        >\r\n                          Dropdown\r\n                          <span class=\"caret\"></span>\r\n                        </a>\r\n                        <ul class=\"dropdown-menu\" role=\"menu\">\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Another action</a>\r\n                          </li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Something else here</a>\r\n                          </li>\r\n                          <li class=\"divider\"></li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\">Separated link</a>\r\n                          </li>\r\n                          <li class=\"divider\"></li>\r\n                          <li>\r\n                            <a href=\"javascript:void(0)\"\r\n                              >One more separated link</a\r\n                            >\r\n                          </li>\r\n                        </ul>\r\n                      </li>\r\n                    </ul>\r\n                    <form class=\"navbar-form navbar-left\" role=\"search\">\r\n                      <div class=\"form-group\">\r\n                        <input\r\n                          type=\"text\"\r\n                          class=\"form-control\"\r\n                          placeholder=\"Search\"\r\n                        />\r\n                      </div>\r\n                      <button type=\"submit\" class=\"btn btn-default\">\r\n                        Submit\r\n                      </button>\r\n                    </form>\r\n                    <ul class=\"nav navbar-nav navbar-right\">\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Link</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </nav>\r\n            </div>\r\n            <!-- /example -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Buttons\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"page-header\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 id=\"buttons\">Buttons</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-7\">\r\n            <p class=\"bs-component\">\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                Default\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary\">\r\n                Primary\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-success\">\r\n                Success\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-info\">\r\n                Info\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-warning\">\r\n                Warning\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-danger\">\r\n                Danger\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-link\">\r\n                Link\r\n              </a>\r\n            </p>\r\n\r\n            <p class=\"bs-component\">\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-default disabled\">\r\n                Default\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary disabled\">\r\n                Primary\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-success disabled\">\r\n                Success\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-info disabled\">\r\n                Info\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-warning disabled\">\r\n                Warning\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-danger disabled\">\r\n                Danger\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-link disabled\">\r\n                Link\r\n              </a>\r\n            </p>\r\n\r\n            <div style=\"margin-bottom: 15px;\">\r\n              <div class=\"btn-toolbar bs-component\" style=\"margin: 0;\">\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    Default\r\n                  </a>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"btn btn-default dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                  >\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-primary\">\r\n                    Primary\r\n                  </a>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"btn btn-primary dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                  >\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-success\">\r\n                    Success\r\n                  </a>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"btn btn-success dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                  >\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-info\">\r\n                    Info\r\n                  </a>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"btn btn-info dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                  >\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-warning\">\r\n                    Warning\r\n                  </a>\r\n                  <a\r\n                    href=\"javascript:void(0)\"\r\n                    class=\"btn btn-warning dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                  >\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <p class=\"bs-component\">\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-lg\">\r\n                Large button\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary\">\r\n                Default button\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-sm\">\r\n                Small button\r\n              </a>\r\n              <a href=\"javascript:void(0)\" class=\"btn btn-primary btn-xs\">\r\n                Mini button\r\n              </a>\r\n            </p>\r\n          </div>\r\n          <div class=\"col-lg-5\">\r\n            <p class=\"bs-component\">\r\n              <a\r\n                href=\"javascript:void(0)\"\r\n                class=\"btn btn-default btn-lg btn-block\"\r\n              >\r\n                Block level button\r\n              </a>\r\n            </p>\r\n\r\n            <div class=\"bs-component\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"btn-group btn-group-justified\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Left\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Middle\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Right\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"bs-component\" style=\"margin-bottom: 15px;\">\r\n              <div class=\"btn-toolbar\">\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    1\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    2\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    3\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    4\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    5\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    6\r\n                  </a>\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    7\r\n                  </a>\r\n                </div>\r\n\r\n                <div class=\"btn-group\">\r\n                  <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                    8\r\n                  </a>\r\n                  <div class=\"btn-group\">\r\n                    <a\r\n                      href=\"javascript:void(0)\"\r\n                      class=\"btn btn-default dropdown-toggle\"\r\n                      data-toggle=\"dropdown\"\r\n                    >\r\n                      Dropdown\r\n                      <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Dropdown link</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Dropdown link</a>\r\n                      </li>\r\n                      <li>\r\n                        <a href=\"javascript:void(0)\">Dropdown link</a>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"bs-component\">\r\n              <div class=\"btn-group-vertical\">\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Button\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Button\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Button\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"btn btn-default\">\r\n                  Button\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Typography\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"typography\">Typography</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Headings -->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <h1>Heading 1</h1>\r\n              <h2>Heading 2</h2>\r\n              <h3>Heading 3</h3>\r\n              <h4>Heading 4</h4>\r\n              <h5>Heading 5</h5>\r\n              <h6>Heading 6</h6>\r\n              <p class=\"lead\">\r\n                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor\r\n                auctor.\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <h2>Example body text</h2>\r\n              <p>\r\n                Nullam quis risus eget\r\n                <a href=\"javascript:void(0)\">urna mollis ornare</a>\r\n                vel eu leo. Cum sociis natoque penatibus et magnis dis\r\n                parturient montes, nascetur ridiculus mus. Nullam id dolor id\r\n                nibh ultricies vehicula.\r\n              </p>\r\n              <p>\r\n                <small>\r\n                  This line of text is meant to be treated as fine print.\r\n                </small>\r\n              </p>\r\n              <p>\r\n                The following snippet of text is\r\n                <strong>rendered as bold text</strong>\r\n                .\r\n              </p>\r\n              <p>\r\n                The following snippet of text is\r\n                <em>rendered as italicized text</em>\r\n                .\r\n              </p>\r\n              <p>\r\n                An abbreviation of the word attribute is\r\n                <abbr title=\"attribute\">attr</abbr>\r\n                .\r\n              </p>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <h2>Emphasis classes</h2>\r\n              <p class=\"text-muted\">\r\n                Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.\r\n              </p>\r\n              <p class=\"text-primary\">\r\n                Nullam id dolor id nibh ultricies vehicula ut id elit.\r\n              </p>\r\n              <p class=\"text-warning\">\r\n                Etiam porta sem malesuada magna mollis euismod.\r\n              </p>\r\n              <p class=\"text-danger\">\r\n                Donec ullamcorper nulla non metus auctor fringilla.\r\n              </p>\r\n              <p class=\"text-success\">\r\n                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.\r\n              </p>\r\n              <p class=\"text-info\">\r\n                Maecenas sed diam eget risus varius blandit sit amet non magna.\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Blockquotes -->\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2 id=\"type-blockquotes\">Blockquotes</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"bs-component\">\r\n              <blockquote>\r\n                <p>\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                  Integer posuere erat a ante.\r\n                </p>\r\n                <small>\r\n                  Someone famous in\r\n                  <cite title=\"Source Title\">Source Title</cite>\r\n                </small>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"bs-component\">\r\n              <blockquote class=\"blockquote-reverse\">\r\n                <p>\r\n                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.\r\n                  Integer posuere erat a ante.\r\n                </p>\r\n                <small>\r\n                  Someone famous in\r\n                  <cite title=\"Source Title\">Source Title</cite>\r\n                </small>\r\n              </blockquote>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Tables\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"tables\">Tables</h1>\r\n            </div>\r\n\r\n            <div class=\"bs-component\">\r\n              <table class=\"table table-striped table-hover\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>#</th>\r\n                    <th>Column heading</th>\r\n                    <th>Column heading</th>\r\n                    <th>Column heading</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr>\r\n                    <td>1</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr class=\"info\">\r\n                    <td>3</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr class=\"success\">\r\n                    <td>4</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr class=\"danger\">\r\n                    <td>5</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr class=\"warning\">\r\n                    <td>6</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                  <tr class=\"active\">\r\n                    <td>7</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                    <td>Column content</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n            <!-- /example -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Forms\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"forms\">Forms</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <div class=\"well bs-component\">\r\n              <form class=\"form-horizontal\">\r\n                <fieldset>\r\n                  <legend>Legend</legend>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"inputEmail\" class=\"col-lg-2 control-label\">\r\n                      Email\r\n                    </label>\r\n                    <div class=\"col-lg-10\">\r\n                      <input\r\n                        type=\"text\"\r\n                        class=\"form-control\"\r\n                        id=\"inputEmail\"\r\n                        placeholder=\"Email\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"inputPassword\" class=\"col-lg-2 control-label\">\r\n                      Password\r\n                    </label>\r\n                    <div class=\"col-lg-10\">\r\n                      <input\r\n                        type=\"password\"\r\n                        class=\"form-control\"\r\n                        id=\"inputPassword\"\r\n                        placeholder=\"Password\"\r\n                      />\r\n                      <div class=\"checkbox\">\r\n                        <label>\r\n                          <input type=\"checkbox\" />\r\n                          Checkbox\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"textArea\" class=\"col-lg-2 control-label\">\r\n                      Textarea\r\n                    </label>\r\n                    <div class=\"col-lg-10\">\r\n                      <textarea\r\n                        class=\"form-control\"\r\n                        rows=\"3\"\r\n                        id=\"textArea\"\r\n                      ></textarea>\r\n                      <span class=\"help-block\">\r\n                        A longer block of help text that breaks onto a new line\r\n                        and may extend beyond one line.\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label class=\"col-lg-2 control-label\">Radios</label>\r\n                    <div class=\"col-lg-10\">\r\n                      <div class=\"radio\">\r\n                        <label>\r\n                          <input\r\n                            type=\"radio\"\r\n                            name=\"optionsRadios\"\r\n                            id=\"optionsRadios1\"\r\n                            value=\"option1\"\r\n                            checked\r\n                          />\r\n                          Option one is this\r\n                        </label>\r\n                      </div>\r\n                      <div class=\"radio\">\r\n                        <label>\r\n                          <input\r\n                            type=\"radio\"\r\n                            name=\"optionsRadios\"\r\n                            id=\"optionsRadios2\"\r\n                            value=\"option2\"\r\n                          />\r\n                          Option two can be something else\r\n                        </label>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <label for=\"select\" class=\"col-lg-2 control-label\">\r\n                      Selects\r\n                    </label>\r\n                    <div class=\"col-lg-10\">\r\n                      <select class=\"form-control\" id=\"select\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                      </select>\r\n                      <br />\r\n                      <select multiple class=\"form-control\">\r\n                        <option>1</option>\r\n                        <option>2</option>\r\n                        <option>3</option>\r\n                        <option>4</option>\r\n                        <option>5</option>\r\n                      </select>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <div class=\"col-lg-10 col-lg-offset-2\">\r\n                      <button type=\"reset\" class=\"btn btn-default\">\r\n                        Cancel\r\n                      </button>\r\n                      <button type=\"submit\" class=\"btn btn-primary\">\r\n                        Submit\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4 col-lg-offset-1\">\r\n            <form class=\"bs-component\">\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"focusedInput\">\r\n                  Focused input\r\n                </label>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"focusedInput\"\r\n                  type=\"text\"\r\n                  value=\"This is focused...\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"disabledInput\">\r\n                  Disabled input\r\n                </label>\r\n                <input\r\n                  class=\"form-control\"\r\n                  id=\"disabledInput\"\r\n                  type=\"text\"\r\n                  placeholder=\"Disabled input here...\"\r\n                  disabled\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group has-warning\">\r\n                <label class=\"control-label\" for=\"inputWarning\">\r\n                  Input warning\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputWarning\" />\r\n              </div>\r\n\r\n              <div class=\"form-group has-error\">\r\n                <label class=\"control-label\" for=\"inputError\">\r\n                  Input error\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputError\" />\r\n              </div>\r\n\r\n              <div class=\"form-group has-success\">\r\n                <label class=\"control-label\" for=\"inputSuccess\">\r\n                  Input success\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputSuccess\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"inputLarge\">\r\n                  Large input\r\n                </label>\r\n                <input\r\n                  class=\"form-control input-lg\"\r\n                  type=\"text\"\r\n                  id=\"inputLarge\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"inputDefault\">\r\n                  Default input\r\n                </label>\r\n                <input type=\"text\" class=\"form-control\" id=\"inputDefault\" />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\" for=\"inputSmall\">\r\n                  Small input\r\n                </label>\r\n                <input\r\n                  class=\"form-control input-sm\"\r\n                  type=\"text\"\r\n                  id=\"inputSmall\"\r\n                />\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label class=\"control-label\">Input addons</label>\r\n                <div class=\"input-group\">\r\n                  <span class=\"input-group-addon\">$</span>\r\n                  <input type=\"text\" class=\"form-control\" />\r\n                  <span class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" type=\"button\">\r\n                      Button\r\n                    </button>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Navs\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"navs\">Navs</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <h2 id=\"nav-tabs\">Tabs</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"nav nav-tabs\">\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\" data-toggle=\"tab\">\r\n                    Home\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" data-toggle=\"tab\" translate>\r\n                    Profile\r\n                  </a>\r\n                </li>\r\n                <li class=\"disabled\">\r\n                  <a>Disabled</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <a\r\n                    class=\"dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                    href=\"javascript:void(0)\"\r\n                  >\r\n                    Dropdown\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\" data-toggle=\"tab\">\r\n                        Action\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\" data-toggle=\"tab\">\r\n                        Another action\r\n                      </a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n              <div id=\"myTabContent\" class=\"tab-content\">\r\n                <div class=\"tab-pane fade active in\" id=\"home\">\r\n                  <p>\r\n                    Raw denim you probably haven't heard of them jean shorts\r\n                    Austin. Nesciunt tofu stumptown aliqua, retro synth master\r\n                    cleanse. Mustache cliche tempor, williamsburg carles vegan\r\n                    helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher\r\n                    synth. Cosby sweater eu banh mi, qui irure terry richardson\r\n                    ex squid. Aliquip placeat salvia cillum iphone. Seitan\r\n                    aliquip quis cardigan american apparel, butcher voluptate\r\n                    nisi qui.\r\n                  </p>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"profile\">\r\n                  <p>\r\n                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla\r\n                    single-origin coffee squid. Exercitation +1 labore velit,\r\n                    blog sartorial PBR leggings next level wes anderson artisan\r\n                    four loko farm-to-table craft beer twee. Qui photo booth\r\n                    letterpress, commodo enim craft beer mlkshk aliquip jean\r\n                    shorts ullamco ad vinyl cillum PBR. Homo nostrud organic,\r\n                    assumenda labore aesthetic magna delectus mollit.\r\n                  </p>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"dropdown1\">\r\n                  <p>\r\n                    Etsy mixtape wayfarers, ethical wes anderson tofu before\r\n                    they sold out mcsweeney's organic lomo retro fanny pack\r\n                    lo-fi farm-to-table readymade. Messenger bag gentrify\r\n                    pitchfork tattooed craft beer, iphone skateboard locavore\r\n                    carles etsy salvia banksy hoodie helvetica. DIY synth PBR\r\n                    banksy irony. Leggings gentrify squid 8-bit cred pitchfork.\r\n                  </p>\r\n                </div>\r\n                <div class=\"tab-pane fade\" id=\"dropdown2\">\r\n                  <p>\r\n                    Trust fund seitan letterpress, keytar raw denim keffiyeh\r\n                    etsy art party before they sold out master cleanse\r\n                    gluten-free squid scenester freegan cosby sweater. Fanny\r\n                    pack portland seitan DIY, art party locavore wolf cliche\r\n                    high life echo park Austin. Cred vinyl keffiyeh DIY salvia\r\n                    PBR, banh mi before they sold out farm-to-table VHS viral\r\n                    locavore cosby sweater.\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h2 id=\"nav-pills\">Pills</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"nav nav-pills\">\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">Home</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" translate>\r\n                    Profile\r\n                  </a>\r\n                </li>\r\n                <li class=\"disabled\">\r\n                  <a href=\"javascript:void(0)\">Disabled</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <a\r\n                    class=\"dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                    href=\"javascript:void(0)\"\r\n                  >\r\n                    Dropdown\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n            <br />\r\n            <div class=\"bs-component\">\r\n              <ul class=\"nav nav-pills nav-stacked\">\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">Home</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\" translate>\r\n                    Profile\r\n                  </a>\r\n                </li>\r\n                <li class=\"disabled\">\r\n                  <a href=\"javascript:void(0)\">Disabled</a>\r\n                </li>\r\n                <li class=\"dropdown\">\r\n                  <a\r\n                    class=\"dropdown-toggle\"\r\n                    data-toggle=\"dropdown\"\r\n                    href=\"javascript:void(0)\"\r\n                  >\r\n                    Dropdown\r\n                    <span class=\"caret\"></span>\r\n                  </a>\r\n                  <ul class=\"dropdown-menu\">\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Another action</a>\r\n                    </li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Something else here</a>\r\n                    </li>\r\n                    <li class=\"divider\"></li>\r\n                    <li>\r\n                      <a href=\"javascript:void(0)\">Separated link</a>\r\n                    </li>\r\n                  </ul>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h2 id=\"nav-breadcrumbs\">Breadcrumbs</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"breadcrumb\">\r\n                <li class=\"active\">Home</li>\r\n              </ul>\r\n\r\n              <ul class=\"breadcrumb\">\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">Home</a>\r\n                </li>\r\n                <li class=\"active\">Library</li>\r\n              </ul>\r\n\r\n              <ul class=\"breadcrumb\">\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">Home</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">Library</a>\r\n                </li>\r\n                <li class=\"active\">Data</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <h2 id=\"pagination\">Pagination</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"pagination\">\r\n                <li class=\"disabled\">\r\n                  <a href=\"javascript:void(0)\">«</a>\r\n                </li>\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">1</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">2</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">3</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">4</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">5</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">»</a>\r\n                </li>\r\n              </ul>\r\n\r\n              <ul class=\"pagination pagination-lg\">\r\n                <li class=\"disabled\">\r\n                  <a href=\"javascript:void(0)\">«</a>\r\n                </li>\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">1</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">2</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">3</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">»</a>\r\n                </li>\r\n              </ul>\r\n\r\n              <ul class=\"pagination pagination-sm\">\r\n                <li class=\"disabled\">\r\n                  <a href=\"javascript:void(0)\">«</a>\r\n                </li>\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">1</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">2</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">3</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">4</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">5</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">»</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h2 id=\"pager\">Pager</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"pager\">\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">Previous</a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">Next</a>\r\n                </li>\r\n              </ul>\r\n\r\n              <ul class=\"pager\">\r\n                <li class=\"previous disabled\">\r\n                  <a href=\"javascript:void(0)\">← Older</a>\r\n                </li>\r\n                <li class=\"next\">\r\n                  <a href=\"javascript:void(0)\">Newer →</a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\"></div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Indicators\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"indicators\">Indicators</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>Alerts</h2>\r\n            <div class=\"bs-component\">\r\n              <div class=\"alert alert-dismissible alert-warning\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n                  ×\r\n                </button>\r\n                <h4>Warning!</h4>\r\n                <p>\r\n                  Best check yo self, you're not looking too good. Nulla vitae\r\n                  elit libero, a pharetra augue. Praesent commodo cursus magna,\r\n                  <a href=\"javascript:void(0)\" class=\"alert-link\">\r\n                    vel scelerisque nisl consectetur et\r\n                  </a>\r\n                  .\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"alert alert-dismissible alert-danger\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n                  ×\r\n                </button>\r\n                <strong>Oh snap!</strong>\r\n                <a href=\"javascript:void(0)\" class=\"alert-link\">\r\n                  Change a few things up\r\n                </a>\r\n                and try submitting again.\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"alert alert-dismissible alert-success\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n                  ×\r\n                </button>\r\n                <strong>Well done!</strong>\r\n                You successfully read\r\n                <a href=\"javascript:void(0)\" class=\"alert-link\">\r\n                  this important alert message\r\n                </a>\r\n                .\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"alert alert-dismissible alert-info\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\">\r\n                  ×\r\n                </button>\r\n                <strong>Heads up!</strong>\r\n                This\r\n                <a href=\"javascript:void(0)\" class=\"alert-link\">\r\n                  alert needs your attention\r\n                </a>\r\n                , but it's not super important.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <h2>Labels</h2>\r\n            <div class=\"bs-component\" style=\"margin-bottom: 40px;\">\r\n              <span class=\"label label-default\">Default</span>\r\n              <span class=\"label label-primary\">Primary</span>\r\n              <span class=\"label label-success\">Success</span>\r\n              <span class=\"label label-warning\">Warning</span>\r\n              <span class=\"label label-danger\">Danger</span>\r\n              <span class=\"label label-info\">Info</span>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <h2>Badges</h2>\r\n            <div class=\"bs-component\">\r\n              <ul class=\"nav nav-pills\">\r\n                <li class=\"active\">\r\n                  <a href=\"javascript:void(0)\">\r\n                    Home\r\n                    <span class=\"badge\">42</span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">\r\n                    Profile\r\n                    <span class=\"badge\"></span>\r\n                  </a>\r\n                </li>\r\n                <li>\r\n                  <a href=\"javascript:void(0)\">\r\n                    Messages\r\n                    <span class=\"badge\">3</span>\r\n                  </a>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Progress bars\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"progress-bars\">Progress bars</h1>\r\n            </div>\r\n\r\n            <h3 id=\"progress-basic\">Basic</h3>\r\n            <div class=\"bs-component\">\r\n              <div class=\"progress\">\r\n                <div class=\"progress-bar\" style=\"width: 60%;\"></div>\r\n              </div>\r\n            </div>\r\n\r\n            <h3 id=\"progress-alternatives\">Contextual alternatives</h3>\r\n            <div class=\"bs-component\">\r\n              <div class=\"progress\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-info\"\r\n                  style=\"width: 20%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-success\"\r\n                  style=\"width: 40%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-warning\"\r\n                  style=\"width: 60%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-danger\"\r\n                  style=\"width: 80%\"\r\n                ></div>\r\n              </div>\r\n            </div>\r\n\r\n            <h3 id=\"progress-striped\">Striped</h3>\r\n            <div class=\"bs-component\">\r\n              <div class=\"progress progress-striped\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-info\"\r\n                  style=\"width: 20%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress progress-striped\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-success\"\r\n                  style=\"width: 40%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress progress-striped\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-warning\"\r\n                  style=\"width: 60%\"\r\n                ></div>\r\n              </div>\r\n\r\n              <div class=\"progress progress-striped\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-danger\"\r\n                  style=\"width: 80%\"\r\n                ></div>\r\n              </div>\r\n            </div>\r\n\r\n            <h3 id=\"progress-animated\">Animated</h3>\r\n            <div class=\"bs-component\">\r\n              <div class=\"progress progress-striped active\">\r\n                <div class=\"progress-bar\" style=\"width: 45%\"></div>\r\n              </div>\r\n            </div>\r\n\r\n            <h3 id=\"progress-stacked\">Stacked</h3>\r\n            <div class=\"bs-component\">\r\n              <div class=\"progress\">\r\n                <div\r\n                  class=\"progress-bar progress-bar-success\"\r\n                  style=\"width: 35%\"\r\n                ></div>\r\n                <div\r\n                  class=\"progress-bar progress-bar-warning\"\r\n                  style=\"width: 20%\"\r\n                ></div>\r\n                <div\r\n                  class=\"progress-bar progress-bar-danger\"\r\n                  style=\"width: 10%\"\r\n                ></div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Containers\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"containers\">Containers</h1>\r\n            </div>\r\n            <div class=\"bs-component\">\r\n              <div class=\"jumbotron\">\r\n                <h1>Jumbotron</h1>\r\n                <p>\r\n                  This is a simple hero unit, a simple jumbotron-style component\r\n                  for calling extra attention to featured content or\r\n                  information.\r\n                </p>\r\n                <p>\r\n                  <a class=\"btn btn-primary btn-lg\">Learn more</a>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>List groups</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <ul class=\"list-group\">\r\n                <li class=\"list-group-item\">\r\n                  <span class=\"badge\">14</span>\r\n                  Cras justo odio\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <span class=\"badge\">2</span>\r\n                  Dapibus ac facilisis in\r\n                </li>\r\n                <li class=\"list-group-item\">\r\n                  <span class=\"badge\">1</span>\r\n                  Morbi leo risus\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"list-group\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item active\">\r\n                  Cras justo odio\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                  Dapibus ac facilisis in\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                  Morbi leo risus\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"list-group\">\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                  <h4 class=\"list-group-item-heading\">\r\n                    List group item heading\r\n                  </h4>\r\n                  <p class=\"list-group-item-text\">\r\n                    Donec id elit non mi porta gravida at eget metus. Maecenas\r\n                    sed diam eget risus varius blandit.\r\n                  </p>\r\n                </a>\r\n                <a href=\"javascript:void(0)\" class=\"list-group-item\">\r\n                  <h4 class=\"list-group-item-heading\">\r\n                    List group item heading\r\n                  </h4>\r\n                  <p class=\"list-group-item-text\">\r\n                    Donec id elit non mi porta gravida at eget metus. Maecenas\r\n                    sed diam eget risus varius blandit.\r\n                  </p>\r\n                </a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>Panels</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">Basic panel</div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">Panel heading</div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-body\">Panel content</div>\r\n                <div class=\"panel-footer\">Panel footer</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Panel primary</h3>\r\n                </div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-success\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Panel success</h3>\r\n                </div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-warning\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Panel warning</h3>\r\n                </div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"panel panel-danger\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Panel danger</h3>\r\n                </div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n\r\n              <div class=\"panel panel-info\">\r\n                <div class=\"panel-heading\">\r\n                  <h3 class=\"panel-title\">Panel info</h3>\r\n                </div>\r\n                <div class=\"panel-body\">Panel content</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <h2>Wells</h2>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"well\">Look, I'm in a well!</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"well well-sm\">Look, I'm in a small well!</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-4\">\r\n            <div class=\"bs-component\">\r\n              <div class=\"well well-lg\">Look, I'm in a large well!</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Dialogs\r\n      ================================================== -->\r\n      <div class=\"bs-docs-section\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-12\">\r\n            <div class=\"page-header\">\r\n              <h1 id=\"dialogs\">Dialogs</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-6\">\r\n            <h2>Modals</h2>\r\n            <div class=\"bs-component\">\r\n              <div class=\"modal\">\r\n                <div class=\"modal-dialog\">\r\n                  <div class=\"modal-content\">\r\n                    <div class=\"modal-header\">\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"close\"\r\n                        data-dismiss=\"modal\"\r\n                        aria-hidden=\"true\"\r\n                      >\r\n                        ×\r\n                      </button>\r\n                      <h4 class=\"modal-title\">Modal title</h4>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                      <p>One fine body…</p>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-default\"\r\n                        data-dismiss=\"modal\"\r\n                        translate\r\n                      >\r\n                        Close\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-primary\">\r\n                        Save changes\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-lg-6\">\r\n            <h2>Popovers</h2>\r\n            <div class=\"bs-component\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-container=\"body\"\r\n                data-toggle=\"popover\"\r\n                data-placement=\"left\"\r\n                data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              >\r\n                Left\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-container=\"body\"\r\n                data-toggle=\"popover\"\r\n                data-placement=\"top\"\r\n                data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              >\r\n                Top\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-container=\"body\"\r\n                data-toggle=\"popover\"\r\n                data-placement=\"bottom\"\r\n                data-content=\"Vivamus\r\n              sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              >\r\n                Bottom\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-container=\"body\"\r\n                data-toggle=\"popover\"\r\n                data-placement=\"right\"\r\n                data-content=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\"\r\n              >\r\n                Right\r\n              </button>\r\n            </div>\r\n            <h2>Tooltips</h2>\r\n            <div class=\"bs-component\">\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-toggle=\"tooltip\"\r\n                data-placement=\"left\"\r\n                title\r\n                data-original-title=\"Tooltip on left\"\r\n              >\r\n                Left\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-toggle=\"tooltip\"\r\n                data-placement=\"top\"\r\n                title\r\n                data-original-title=\"Tooltip on top\"\r\n              >\r\n                Top\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-toggle=\"tooltip\"\r\n                data-placement=\"bottom\"\r\n                title\r\n                data-original-title=\"Tooltip on bottom\"\r\n              >\r\n                Bottom\r\n              </button>\r\n\r\n              <button\r\n                type=\"button\"\r\n                class=\"btn btn-default\"\r\n                data-toggle=\"tooltip\"\r\n                data-placement=\"right\"\r\n                title\r\n                data-original-title=\"Tooltip on right\"\r\n              >\r\n                Right\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/themes-page/themes-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/themes-page/themes-page.component.ts ***!
  \************************************************************/
/*! exports provided: ThemesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemesPageComponent", function() { return ThemesPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rucken_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rucken/web */ "../../node_modules/@rucken/web/fesm5/rucken-web.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");




var ThemesPageComponent = /** @class */ (function () {
    function ThemesPageComponent(_themesService) {
        this._themesService = _themesService;
        this.items$ = _themesService.repository.items$;
        this.currentTheme$ = _themesService.current$;
    }
    ThemesPageComponent.prototype.setCurrentTheme = function (value) {
        this._themesService.setCurrent(value);
    };
    ThemesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_3__["BindIoInner"])(),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "themes-page",
            template: __webpack_require__(/*! ./themes-page.component.html */ "./src/app/pages/themes-page/themes-page.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_rucken_web__WEBPACK_IMPORTED_MODULE_2__["ThemesService"]])
    ], ThemesPageComponent);
    return ThemesPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/themes-page/themes-page.routes.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/themes-page/themes-page.routes.ts ***!
  \*********************************************************/
/*! exports provided: THEMES_PAGE_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEMES_PAGE_ROUTES", function() { return THEMES_PAGE_ROUTES; });
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _themes_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./themes-page.component */ "./src/app/pages/themes-page/themes-page.component.ts");
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");



var THEMES_PAGE_ROUTES = [
    {
        path: "",
        component: _themes_page_component__WEBPACK_IMPORTED_MODULE_1__["ThemesPageComponent"],
        canActivate: [_ngx_meta_core__WEBPACK_IMPORTED_MODULE_2__["MetaGuard"]],
        data: {
            name: "themes",
            meta: {
                title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Themes"),
                description: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_0__["translate"])("Themes page")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var ngx_repository__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-repository */ "../../node_modules/ngx-repository/fesm5/ngx-repository.js");






var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _rucken_core__WEBPACK_IMPORTED_MODULE_4__["PipesModule"],
                ngx_repository__WEBPACK_IMPORTED_MODULE_5__["NgxRepositoryModule"].forRoot(),
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"].forChild()
            ],
            exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _rucken_core__WEBPACK_IMPORTED_MODULE_4__["PipesModule"], ngx_repository__WEBPACK_IMPORTED_MODULE_5__["NgxRepositoryModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/utils/initialize-browser-app.ts":
/*!*************************************************!*\
  !*** ./src/app/utils/initialize-browser-app.ts ***!
  \*************************************************/
/*! exports provided: initializeBrowserApp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeBrowserApp", function() { return initializeBrowserApp; });
function initializeBrowserApp(tokenService, themesService, langService) {
    return function () {
        return new Promise(function (resolve, reject) {
            langService.initializeApp().then(function (_) {
                themesService.initializeApp().then(function (__) {
                    tokenService.initializeApp().then(function (___) {
                        resolve();
                    });
                });
            });
        });
    };
}


/***/ }),

/***/ "./src/app/utils/meta-factory.ts":
/*!***************************************!*\
  !*** ./src/app/utils/meta-factory.ts ***!
  \***************************************/
/*! exports provided: metaFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaFactory", function() { return metaFactory; });
/* harmony import */ var _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");


function metaFactory(translateService) {
    return new _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["MetaStaticLoader"]({
        callback: function (key) {
            return translateService.get(key);
        },
        pageTitlePositioning: _ngx_meta_core__WEBPACK_IMPORTED_MODULE_0__["PageTitlePositioning"].PrependPageTitle,
        pageTitleSeparator: " - ",
        applicationName: _config_config__WEBPACK_IMPORTED_MODULE_1__["config"].app.title,
        defaults: {
            title: _config_config__WEBPACK_IMPORTED_MODULE_1__["config"].app.title,
            description: _config_config__WEBPACK_IMPORTED_MODULE_1__["config"].app.description,
            "og:type": "website",
            "og:locale": "en_US",
            "og:locale:alternate": "en_US,ru_RU"
        }
    });
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    server: false,
    type: "development",
    production: false,
    apiUrl: "http://localhost:3000/api"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener("DOMContentLoaded", function () {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
        .bootstrapModule(_app_app_browser_module__WEBPACK_IMPORTED_MODULE_2__["AppBrowserModule"])
        .catch(function (err) { return console.log(err); });
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/rucken/cli/test/fixtures/generators/apps/custom-app/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map