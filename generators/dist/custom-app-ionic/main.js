(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../dist/custom-org/custom-lib-ionic/fesm5/custom-org-custom-lib-ionic.js":
/*!************************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/dist/custom-org/custom-lib-ionic/fesm5/custom-org-custom-lib-ionic.js ***!
  \************************************************************************************************************************************/
/*! exports provided: RuI18n, CustomOrgCustomLibIonicModule, CustomEntitiesListComponent, CustomEntitiesListModule, CustomEntitiesListFiltersModalComponent, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN, CustomEntitiesListFiltersModalModule, customEntitiesListFiltersModalServiceInitializeApp, CustomEntitiesListFiltersModalService, CustomEntitiesListFiltersModal, CustomEntityModalComponent, CustomEntityModalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuI18n", function() { return RuI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomOrgCustomLibIonicModule", function() { return CustomOrgCustomLibIonicModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListComponent", function() { return CustomEntitiesListComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListModule", function() { return CustomEntitiesListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListFiltersModalComponent", function() { return CustomEntitiesListFiltersModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG", function() { return DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN", function() { return CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListFiltersModalModule", function() { return CustomEntitiesListFiltersModalModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customEntitiesListFiltersModalServiceInitializeApp", function() { return customEntitiesListFiltersModalServiceInitializeApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListFiltersModalService", function() { return CustomEntitiesListFiltersModalService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntitiesListFiltersModal", function() { return CustomEntitiesListFiltersModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityModalComponent", function() { return CustomEntityModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomEntityModalModule", function() { return CustomEntityModalModule; });
/* harmony import */ var ngx_repository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-repository */ "../../node_modules/ngx-repository/fesm5/ngx-repository.js");
/* harmony import */ var _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @custom-org/custom-lib */ "../../dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var bind_observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bind-observable */ "../../node_modules/bind-observable/dist/bind-observable.es5.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "../../node_modules/class-transformer/index.js");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _rucken_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
/* harmony import */ var _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @rucken/ionic */ "../../node_modules/@rucken/ionic/fesm5/rucken-ionic.js");
/* harmony import */ var ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");















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
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("English"),
    code: "en",
    translations: []
};
var CustomOrgCustomLibIonicModule = /** @class */ (function () {
    function CustomOrgCustomLibIonicModule() {
    }
    CustomOrgCustomLibIonicModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"]],
                    providers: [
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_11__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ0,
                            multi: true
                        },
                        {
                            provide: _rucken_core__WEBPACK_IMPORTED_MODULE_11__["LANGUAGES_ITEM_CONFIG_TOKEN"],
                            useValue: ɵ1,
                            multi: true
                        }
                    ]
                },] }
    ];
    return CustomOrgCustomLibIonicModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.class = undefined;
        _this.group(_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_1__["CustomEntity"]);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: "custom-entity-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    CustomEntityModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [])
    ], CustomEntityModalComponent);
    return CustomEntityModalComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["BasePromptFormModalComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesListFiltersModal = /** @class */ (function () {
    function CustomEntitiesListFiltersModal() {
        this.id = undefined;
        this.sortField = undefined;
        this.sortType = undefined;
    }
    CustomEntitiesListFiltersModal.strings = {
        sortField: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Sort field"),
        sortType: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Sort type")
    };
    CustomEntitiesListFiltersModal.sortFields = [
        { id: "id", title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Id") },
        { id: "title", title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Title") }
    ];
    CustomEntitiesListFiltersModal.sortTypes = [
        { id: "asc", title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Asc") },
        { id: "desc", title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Desc") }
    ];
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["serializeModel"])(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInput"])),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Transform"])(Object(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["keyToSelectInput"])({ items: CustomEntitiesListFiltersModal.sortFields }), { toClassOnly: true, groups: ["manual"] }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Transform"])(Object(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["selectInputToKey"])({ items: CustomEntitiesListFiltersModal.sortFields }), { toPlainOnly: true, groups: ["manual"] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInput"])
    ], CustomEntitiesListFiltersModal.prototype, "sortField", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["serializeModel"])(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInput"])),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Transform"])(Object(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["keyToSelectInput"])({ items: CustomEntitiesListFiltersModal.sortTypes }), { toClassOnly: true, groups: ["manual"] }),
        Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Transform"])(Object(_rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["selectInputToKey"])({ items: CustomEntitiesListFiltersModal.sortTypes }), { toPlainOnly: true, groups: ["manual"] }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInput"])
    ], CustomEntitiesListFiltersModal.prototype, "sortType", void 0);
    return CustomEntitiesListFiltersModal;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} customEntitiesListFiltersModalService
 * @return {?}
 */
function customEntitiesListFiltersModalServiceInitializeApp(customEntitiesListFiltersModalService) {
    return function () { return customEntitiesListFiltersModalService.initializeApp(); };
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
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["plainToClass"])(CustomEntitiesListFiltersModal, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
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
            .setItem(this.storageKeyName, JSON.stringify(Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["classToPlain"])(!value ? this.getDefault() : value, {
            groups: ["manual"]
        })))
            .then(function (_) { return (_this.current = value); });
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.initCurrent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this._storage.getItem(_this.storageKeyName).then(function (data) {
                if (data && data !== "undefined") {
                    try {
                        resolve(Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["plainToClass"])(CustomEntitiesListFiltersModal, (/** @type {?} */ (JSON.parse(data))), { groups: ["manual"] }));
                    }
                    catch (error) {
                        resolve(_this.getCurrent());
                    }
                }
                else {
                    resolve(_this.getCurrent());
                }
            });
        });
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.initializeApp = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.initCurrent().then(function (value) {
                _this.setCurrent(value);
                resolve();
            });
        });
    };
    CustomEntitiesListFiltersModalService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Injectable"] }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_rucken_core__WEBPACK_IMPORTED_MODULE_11__["STORAGE_CONFIG_TOKEN"],] }] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(bind_observable__WEBPACK_IMPORTED_MODULE_3__["BindObservable"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:type", CustomEntitiesListFiltersModal)
    ], CustomEntitiesListFiltersModalService.prototype, "current", void 0);
    return CustomEntitiesListFiltersModalService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesListFiltersModalComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CustomEntitiesListFiltersModalComponent, _super);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: "custom-entities-list-filters-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalComponent.ctorParameters = function () { return [
        { type: CustomEntitiesListFiltersModalService }
    ]; };
    CustomEntitiesListFiltersModalComponent.propDecorators = {
        class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    CustomEntitiesListFiltersModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [CustomEntitiesListFiltersModalService])
    ], CustomEntitiesListFiltersModalComponent);
    return CustomEntitiesListFiltersModalComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["BasePromptFormModalComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesListComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(CustomEntitiesListComponent, _super);
    function CustomEntitiesListComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
        var _this = _super.call(this, dynamicRepository.fork(_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_1__["CustomEntity"]), modalsService, _custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_1__["CustomEntity"]) || this;
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
        _this.title = Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Custom entities");
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
            this.useRest(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ apiUrl: this.apiUrl, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        if (this.mockedItems) {
            this.useMock(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ items: this.mockedItems, infinity: true }, this.customEntitiesConfig, { autoload: false }));
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var title, message, result, error_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        title = Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["interpolate"])(this.translateService.instant(this.strings.deleteTitle), item);
                        message = Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["interpolate"])(this.translateService.instant(this.strings.deleteMessage), item);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, ((/** @type {?} */ (this
                                .modalsService))).confirmAsync({
                                title: title,
                                message: message
                            })];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.repository.delete(item.id).subscribe(function (deletedItem) {
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                            }, function (error) { return _this.onError(error); });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var modalRef;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = item || new CustomEntitiesListFiltersModal();
                        return [4 /*yield*/, this.modalsService.createAsync(CustomEntitiesListFiltersModalComponent, {
                                class: "secondary",
                                initialState: {
                                    title: Object(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["translate"])("Custom entities filters"),
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var modalRef;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createFiltersModal(data)];
                    case 1:
                        modalRef = _a.sent();
                        modalRef.instance.yes.subscribe(function (modal) {
                            modal.hide();
                            _this.onChangeFilter();
                        });
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var useCustomModalComponent, modalRef, _a;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        useCustomModalComponent = this.modalUpdate.component || this.modalItem.component;
                        if (!!useCustomModalComponent) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.createUpdateModal(item)];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        _a = undefined;
                        _b.label = 3;
                    case 3:
                        modalRef = _a;
                        if (!!modalRef) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.defaultCreateUpdateModal(item)];
                    case 4:
                        modalRef = _b.sent();
                        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["isDevMode"])() && !useCustomModalComponent) {
                            console.warn('Method "createUpdateModal" is not defined', this);
                        }
                        _b.label = 5;
                    case 5:
                        modalRef.instance.yes.subscribe(function (modal) {
                            modal.processing = true;
                            _this.repository.update(item.id, modal.getData()).subscribe(function (updatedItem) {
                                modal.processing = false;
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                                modal.hide();
                            }, function (error) { return _this.onUpdateError(modal, error); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomEntitiesListComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"], args: [{
                    selector: "custom-entities-list",
                    template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListComponent.ctorParameters = function () { return [
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_11__["ModalsService"] },
        { type: _rucken_core__WEBPACK_IMPORTED_MODULE_11__["ErrorsExtractor"] },
        { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"] },
        { type: ngx_repository__WEBPACK_IMPORTED_MODULE_0__["DynamicRepository"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Inject"], args: [_custom_org_custom_lib__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ENTITIES_CONFIG_TOKEN"],] }] },
        { type: CustomEntitiesListFiltersModalService }
    ]; };
    CustomEntitiesListComponent.propDecorators = {
        list: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ViewChild"], args: ["list",] }],
        modalItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        modalView: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }],
        title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"] }]
    };
    CustomEntitiesListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__decorate"])([
        Object(ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["BindIoInner"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__metadata"])("design:paramtypes", [_rucken_core__WEBPACK_IMPORTED_MODULE_11__["ModalsService"],
            _rucken_core__WEBPACK_IMPORTED_MODULE_11__["ErrorsExtractor"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateService"],
            ngx_repository__WEBPACK_IMPORTED_MODULE_0__["DynamicRepository"], Object, CustomEntitiesListFiltersModalService])
    ], CustomEntitiesListComponent);
    return CustomEntitiesListComponent;
}(_rucken_core__WEBPACK_IMPORTED_MODULE_11__["BaseEntityListComponent"]));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalModule = /** @class */ (function () {
    function CustomEntityModalModule() {
    }
    CustomEntityModalModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["FormGroupModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(),
                        _rucken_core__WEBPACK_IMPORTED_MODULE_11__["DirectivesModule"],
                        _rucken_core__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["PromptFormModalModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInputModule"],
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntityModalComponent],
                    entryComponents: [CustomEntityModalComponent],
                    exports: [CustomEntityModalComponent, _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["FormGroupModule"]]
                },] }
    ];
    return CustomEntityModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["FormGroupModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(),
                        _rucken_core__WEBPACK_IMPORTED_MODULE_11__["DirectivesModule"],
                        _rucken_core__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["PromptFormModalModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["SelectInputModule"],
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntitiesListFiltersModalComponent],
                    entryComponents: [CustomEntitiesListFiltersModalComponent],
                    exports: [CustomEntitiesListFiltersModalComponent, _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["FormGroupModule"]]
                },] }
    ];
    return CustomEntitiesListFiltersModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesListModule = /** @class */ (function () {
    function CustomEntitiesListModule() {
    }
    CustomEntitiesListModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["IonicModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["IonicModalsModule"],
                        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"].forChild(),
                        _rucken_core__WEBPACK_IMPORTED_MODULE_11__["PipesModule"],
                        _rucken_ionic__WEBPACK_IMPORTED_MODULE_12__["EntityListModule"],
                        CustomEntityModalModule,
                        CustomEntitiesListFiltersModalModule,
                        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                        ngx_bind_io__WEBPACK_IMPORTED_MODULE_13__["NgxBindIOModule"]
                    ],
                    declarations: [CustomEntitiesListComponent],
                    exports: [CustomEntitiesListComponent]
                },] }
    ];
    return CustomEntitiesListModule;
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



//# sourceMappingURL=custom-org-custom-lib-ionic.js.map

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

/***/ "../../node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$":
/*!**************************************************************************************************************************************************************************!*\
  !*** /home/travis/build/rucken/cli/test/fixtures/generators/node_modules/@ionic/core/dist/esm/es5/build lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0jv2gqw7.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/0jv2gqw7.entry.js",
		"common",
		10
	],
	"./0jv2gqw7.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/0jv2gqw7.sc.entry.js",
		"common",
		11
	],
	"./1hlqf399.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/1hlqf399.entry.js",
		"common",
		54
	],
	"./1hlqf399.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/1hlqf399.sc.entry.js",
		"common",
		55
	],
	"./1smtjtrp.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/1smtjtrp.entry.js",
		"common",
		56
	],
	"./1smtjtrp.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/1smtjtrp.sc.entry.js",
		"common",
		57
	],
	"./2fikn3fc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/2fikn3fc.entry.js",
		0,
		"common",
		128
	],
	"./2fikn3fc.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/2fikn3fc.sc.entry.js",
		0,
		"common",
		129
	],
	"./3ul05w05.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/3ul05w05.entry.js",
		"common",
		58
	],
	"./3ul05w05.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/3ul05w05.sc.entry.js",
		"common",
		59
	],
	"./4zh8hiut.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/4zh8hiut.entry.js",
		0,
		"common",
		130
	],
	"./4zh8hiut.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/4zh8hiut.sc.entry.js",
		0,
		"common",
		131
	],
	"./5esrbynz.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5esrbynz.entry.js",
		"common",
		102
	],
	"./5esrbynz.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5esrbynz.sc.entry.js",
		"common",
		103
	],
	"./5ptcnpes.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5ptcnpes.entry.js",
		"common",
		12
	],
	"./5ptcnpes.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5ptcnpes.sc.entry.js",
		"common",
		13
	],
	"./5pwuvxkr.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5pwuvxkr.entry.js",
		"common",
		60
	],
	"./5pwuvxkr.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5pwuvxkr.sc.entry.js",
		"common",
		61
	],
	"./5vxaf0jn.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5vxaf0jn.entry.js",
		"common",
		62
	],
	"./5vxaf0jn.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/5vxaf0jn.sc.entry.js",
		"common",
		63
	],
	"./6dsdnxyn.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6dsdnxyn.entry.js",
		"common",
		64
	],
	"./6dsdnxyn.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6dsdnxyn.sc.entry.js",
		"common",
		65
	],
	"./6kgso7pq.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6kgso7pq.entry.js",
		"common",
		14
	],
	"./6kgso7pq.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6kgso7pq.sc.entry.js",
		"common",
		15
	],
	"./6pwd4qif.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6pwd4qif.entry.js",
		"common",
		104
	],
	"./6pwd4qif.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/6pwd4qif.sc.entry.js",
		"common",
		105
	],
	"./7xggbwe8.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/7xggbwe8.entry.js",
		"common",
		66
	],
	"./7xggbwe8.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/7xggbwe8.sc.entry.js",
		"common",
		67
	],
	"./8odyguue.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/8odyguue.entry.js",
		"common",
		68
	],
	"./8odyguue.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/8odyguue.sc.entry.js",
		"common",
		69
	],
	"./aavh7iu1.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/aavh7iu1.entry.js",
		0,
		"common",
		132
	],
	"./aavh7iu1.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/aavh7iu1.sc.entry.js",
		0,
		"common",
		133
	],
	"./admmxern.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/admmxern.entry.js",
		"common",
		70
	],
	"./admmxern.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/admmxern.sc.entry.js",
		"common",
		71
	],
	"./apfh3flu.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/apfh3flu.entry.js",
		"common",
		16
	],
	"./apfh3flu.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/apfh3flu.sc.entry.js",
		"common",
		17
	],
	"./bngjpe45.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/bngjpe45.entry.js",
		"common",
		18
	],
	"./bngjpe45.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/bngjpe45.sc.entry.js",
		"common",
		19
	],
	"./cwd9g9my.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/cwd9g9my.entry.js",
		"common",
		100
	],
	"./cwd9g9my.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/cwd9g9my.sc.entry.js",
		"common",
		101
	],
	"./dsb5jv5r.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/dsb5jv5r.entry.js",
		"common",
		20
	],
	"./dsb5jv5r.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/dsb5jv5r.sc.entry.js",
		"common",
		21
	],
	"./ejapjnva.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ejapjnva.entry.js",
		"common",
		72
	],
	"./ejapjnva.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ejapjnva.sc.entry.js",
		"common",
		73
	],
	"./fuq8m3zo.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/fuq8m3zo.entry.js",
		"common",
		22
	],
	"./fuq8m3zo.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/fuq8m3zo.sc.entry.js",
		"common",
		23
	],
	"./fwzyk2t9.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/fwzyk2t9.entry.js",
		"common",
		24
	],
	"./fwzyk2t9.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/fwzyk2t9.sc.entry.js",
		"common",
		25
	],
	"./g7y3qohv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/g7y3qohv.entry.js",
		0,
		"common",
		136
	],
	"./g7y3qohv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/g7y3qohv.sc.entry.js",
		0,
		"common",
		137
	],
	"./gbcxupo7.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/gbcxupo7.entry.js",
		"common",
		74
	],
	"./gbcxupo7.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/gbcxupo7.sc.entry.js",
		"common",
		75
	],
	"./gtqqbhae.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/gtqqbhae.entry.js",
		"common",
		26
	],
	"./gtqqbhae.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/gtqqbhae.sc.entry.js",
		"common",
		27
	],
	"./hdjqcfvf.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hdjqcfvf.entry.js",
		"common",
		28
	],
	"./hdjqcfvf.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hdjqcfvf.sc.entry.js",
		"common",
		29
	],
	"./helxzsef.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/helxzsef.entry.js",
		138
	],
	"./helxzsef.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/helxzsef.sc.entry.js",
		139
	],
	"./hg9mfbbd.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hg9mfbbd.entry.js",
		"common",
		76
	],
	"./hg9mfbbd.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hg9mfbbd.sc.entry.js",
		"common",
		77
	],
	"./hqq2qdqe.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hqq2qdqe.entry.js",
		0,
		"common",
		140
	],
	"./hqq2qdqe.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/hqq2qdqe.sc.entry.js",
		0,
		"common",
		141
	],
	"./i5bu78vq.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/i5bu78vq.entry.js",
		"common",
		78
	],
	"./i5bu78vq.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/i5bu78vq.sc.entry.js",
		"common",
		79
	],
	"./ibsc94yw.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ibsc94yw.entry.js",
		"common",
		106
	],
	"./ibsc94yw.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ibsc94yw.sc.entry.js",
		"common",
		107
	],
	"./ipk81gk6.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ipk81gk6.entry.js",
		142
	],
	"./ipk81gk6.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ipk81gk6.sc.entry.js",
		143
	],
	"./iqlhkurd.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/iqlhkurd.entry.js",
		"common",
		80
	],
	"./iqlhkurd.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/iqlhkurd.sc.entry.js",
		"common",
		81
	],
	"./isuxxasv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/isuxxasv.entry.js",
		"common",
		82
	],
	"./isuxxasv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/isuxxasv.sc.entry.js",
		"common",
		83
	],
	"./j241fzpw.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j241fzpw.entry.js",
		"common",
		30
	],
	"./j241fzpw.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j241fzpw.sc.entry.js",
		"common",
		31
	],
	"./j6a9duez.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j6a9duez.entry.js",
		"common",
		32
	],
	"./j6a9duez.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j6a9duez.sc.entry.js",
		"common",
		33
	],
	"./j9orjvxv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j9orjvxv.entry.js",
		"common",
		112
	],
	"./j9orjvxv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j9orjvxv.sc.entry.js",
		"common",
		113
	],
	"./j9sczdb9.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j9sczdb9.entry.js",
		"common",
		34
	],
	"./j9sczdb9.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/j9sczdb9.sc.entry.js",
		"common",
		35
	],
	"./jdmqrxbv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/jdmqrxbv.entry.js",
		"common",
		36
	],
	"./jdmqrxbv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/jdmqrxbv.sc.entry.js",
		"common",
		37
	],
	"./jpkvsu5y.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.entry.js",
		"common",
		114
	],
	"./jpkvsu5y.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/jpkvsu5y.sc.entry.js",
		"common",
		115
	],
	"./k4hoilf4.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/k4hoilf4.entry.js",
		"common",
		84
	],
	"./k4hoilf4.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/k4hoilf4.sc.entry.js",
		"common",
		85
	],
	"./ka5tcqxv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ka5tcqxv.entry.js",
		0,
		"common",
		144
	],
	"./ka5tcqxv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ka5tcqxv.sc.entry.js",
		0,
		"common",
		145
	],
	"./ksgex3rj.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ksgex3rj.entry.js",
		"common",
		38
	],
	"./ksgex3rj.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ksgex3rj.sc.entry.js",
		"common",
		39
	],
	"./kwsaahen.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/kwsaahen.entry.js",
		2,
		"common",
		146
	],
	"./kwsaahen.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/kwsaahen.sc.entry.js",
		2,
		"common",
		147
	],
	"./mri9bdlj.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/mri9bdlj.entry.js",
		148
	],
	"./mri9bdlj.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/mri9bdlj.sc.entry.js",
		149
	],
	"./okzvvz1s.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/okzvvz1s.entry.js",
		"common",
		40
	],
	"./okzvvz1s.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/okzvvz1s.sc.entry.js",
		"common",
		41
	],
	"./omfdyboy.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/omfdyboy.entry.js",
		"common",
		116
	],
	"./omfdyboy.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/omfdyboy.sc.entry.js",
		"common",
		117
	],
	"./oopkmdhe.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/oopkmdhe.entry.js",
		0,
		"common",
		108
	],
	"./oopkmdhe.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/oopkmdhe.sc.entry.js",
		0,
		"common",
		109
	],
	"./paaaniyp.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/paaaniyp.entry.js",
		"common",
		118
	],
	"./paaaniyp.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/paaaniyp.sc.entry.js",
		"common",
		119
	],
	"./pcvyposn.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/pcvyposn.entry.js",
		"common",
		42
	],
	"./pcvyposn.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/pcvyposn.sc.entry.js",
		"common",
		43
	],
	"./qcbg1abo.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qcbg1abo.entry.js",
		"common",
		120
	],
	"./qcbg1abo.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qcbg1abo.sc.entry.js",
		"common",
		121
	],
	"./qjwxr7dv.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qjwxr7dv.entry.js",
		"common",
		44
	],
	"./qjwxr7dv.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qjwxr7dv.sc.entry.js",
		"common",
		45
	],
	"./qmw4agos.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qmw4agos.entry.js",
		0,
		"common",
		150
	],
	"./qmw4agos.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qmw4agos.sc.entry.js",
		0,
		"common",
		151
	],
	"./qoe6pe8v.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qoe6pe8v.entry.js",
		"common",
		46
	],
	"./qoe6pe8v.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qoe6pe8v.sc.entry.js",
		"common",
		47
	],
	"./qqusykhh.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qqusykhh.entry.js",
		"common",
		86
	],
	"./qqusykhh.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qqusykhh.sc.entry.js",
		"common",
		87
	],
	"./qutdmiwk.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qutdmiwk.entry.js",
		0,
		"common",
		152
	],
	"./qutdmiwk.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/qutdmiwk.sc.entry.js",
		0,
		"common",
		153
	],
	"./rcclotvr.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rcclotvr.entry.js",
		2,
		"common",
		154
	],
	"./rcclotvr.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rcclotvr.sc.entry.js",
		2,
		"common",
		155
	],
	"./rkecsmgc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rkecsmgc.entry.js",
		"common",
		122
	],
	"./rkecsmgc.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rkecsmgc.sc.entry.js",
		"common",
		123
	],
	"./rrpxfm2a.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rrpxfm2a.entry.js",
		156
	],
	"./rrpxfm2a.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rrpxfm2a.sc.entry.js",
		157
	],
	"./rvwuhvz4.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rvwuhvz4.entry.js",
		0,
		"common",
		158
	],
	"./rvwuhvz4.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/rvwuhvz4.sc.entry.js",
		0,
		"common",
		159
	],
	"./tlbladaf.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/tlbladaf.entry.js",
		"common",
		48
	],
	"./tlbladaf.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/tlbladaf.sc.entry.js",
		"common",
		49
	],
	"./tsx41s3c.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/tsx41s3c.entry.js",
		"common",
		50
	],
	"./tsx41s3c.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/tsx41s3c.sc.entry.js",
		"common",
		51
	],
	"./txpe5bol.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/txpe5bol.entry.js",
		"common",
		88
	],
	"./txpe5bol.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/txpe5bol.sc.entry.js",
		"common",
		89
	],
	"./vhwyavqm.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/vhwyavqm.entry.js",
		"common",
		52
	],
	"./vhwyavqm.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/vhwyavqm.sc.entry.js",
		"common",
		53
	],
	"./vnwnpb93.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/vnwnpb93.entry.js",
		"common",
		124
	],
	"./vnwnpb93.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/vnwnpb93.sc.entry.js",
		"common",
		125
	],
	"./w6supv7p.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/w6supv7p.entry.js",
		"common",
		90
	],
	"./w6supv7p.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/w6supv7p.sc.entry.js",
		"common",
		91
	],
	"./wjdsdnuu.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/wjdsdnuu.entry.js",
		"common",
		92
	],
	"./wjdsdnuu.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/wjdsdnuu.sc.entry.js",
		"common",
		93
	],
	"./wpzpc9xw.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/wpzpc9xw.entry.js",
		0,
		"common",
		110
	],
	"./wpzpc9xw.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/wpzpc9xw.sc.entry.js",
		0,
		"common",
		111
	],
	"./xrssylnk.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/xrssylnk.entry.js",
		0,
		"common",
		160
	],
	"./xrssylnk.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/xrssylnk.sc.entry.js",
		0,
		"common",
		161
	],
	"./ylecf5ox.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ylecf5ox.entry.js",
		"common",
		94
	],
	"./ylecf5ox.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ylecf5ox.sc.entry.js",
		"common",
		95
	],
	"./yu8fzdyg.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/yu8fzdyg.entry.js",
		0,
		"common",
		162
	],
	"./yu8fzdyg.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/yu8fzdyg.sc.entry.js",
		0,
		"common",
		163
	],
	"./yxoiyuhs.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/yxoiyuhs.entry.js",
		"common",
		96
	],
	"./yxoiyuhs.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/yxoiyuhs.sc.entry.js",
		"common",
		97
	],
	"./zc63qizl.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/zc63qizl.entry.js",
		"common",
		98
	],
	"./zc63qizl.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/zc63qizl.sc.entry.js",
		"common",
		99
	],
	"./ziv0mko0.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ziv0mko0.entry.js",
		"common",
		126
	],
	"./ziv0mko0.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/ziv0mko0.sc.entry.js",
		"common",
		127
	],
	"./zxjlzr69.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/zxjlzr69.entry.js",
		0,
		"common",
		164
	],
	"./zxjlzr69.sc.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/es5/build/zxjlzr69.sc.entry.js",
		0,
		"common",
		165
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
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@ionic/core/dist/esm/es5/build lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$";
module.exports = webpackAsyncContext;

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
	"./pages/custom-entities-page/custom-entities-page.module": [
		"./src/app/pages/custom-entities-page/custom-entities-page.module.ts",
		"pages-custom-entities-page-custom-entities-page-module"
	],
	"./pages/groups-page/groups-page.module": [
		"./src/app/pages/groups-page/groups-page.module.ts",
		"pages-groups-page-groups-page-module"
	],
	"./pages/home-page/home-page.module": [
		"./src/app/pages/home-page/home-page.module.ts",
		"pages-home-page-home-page-module"
	],
	"./pages/profile-page/profile-page.module": [
		"./src/app/pages/profile-page/profile-page.module.ts",
		"pages-profile-page-profile-page-module"
	],
	"./pages/users-page/users-page.module": [
		"./src/app/pages/users-page/users-page.module.ts",
		"pages-users-page-users-page-module"
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
		return __webpack_require__.t(id, 7);
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var core_2 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var ionic_1 = __webpack_require__(/*! @rucken/ionic */ "../../node_modules/@rucken/ionic/fesm5/rucken-ionic.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var config_1 = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
var initialize_app_1 = __webpack_require__(/*! ./utils/initialize-app */ "./src/app/utils/initialize-app.ts");
var AppBrowserModule = /** @class */ (function () {
    function AppBrowserModule() {
    }
    AppBrowserModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [
                platform_browser_1.BrowserModule.withServerTransition({ appId: config_1.config.app.id }),
                app_module_1.AppModule
            ],
            providers: [
                { provide: core_2.STORAGE_CONFIG_TOKEN, useClass: core_2.BrowserStorage },
                { provide: "ORIGIN_URL", useValue: location.origin },
                {
                    provide: core_1.APP_INITIALIZER,
                    useFactory: initialize_app_1.initializeApp,
                    multi: true,
                    deps: [
                        core_2.TokenService,
                        core_2.LangService,
                        ionic_1.UsersListFiltersModalService,
                        ionic_1.GroupsListFiltersModalService
                    ]
                }
            ]
        })
    ], AppBrowserModule);
    return AppBrowserModule;
}());
exports.AppBrowserModule = AppBrowserModule;


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\n  <ion-split-pane>\n    <ion-menu>\n      <ion-header>\n        <ion-toolbar color=\"primary\">\n          <ion-title>{{ title | translate }}</ion-title>\n          <ion-buttons slot=\"end\">\n            <ion-button (click)=\"onSwitchLang()\">\n              <ion-icon slot=\"icon-only\" src=\"assets/svg/earth.svg\"></ion-icon>\n            </ion-button>\n          </ion-buttons>\n        </ion-toolbar>\n      </ion-header>\n      <ion-content>\n        <app-navbar\n          [title]=\"title\"\n          [showSignIn]=\"!(currentUser$ | async)\"\n          [showSignOut]=\"currentUser$ | async\"\n          [showAbout]=\"true\"\n          (signIn)=\"onSignIn()\"\n          (signOut)=\"onSignOut()\"\n          (about)=\"onAbout()\"\n          #navbar\n        >\n        </app-navbar>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet main></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var ngx_1 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/ngx/index.js");
var ngx_2 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/ngx/index.js");
var angular_1 = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/dist/fesm5.js");
var core_2 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
var core_3 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var core_4 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var ionic_1 = __webpack_require__(/*! @rucken/ionic */ "../../node_modules/@rucken/ionic/fesm5/rucken-ionic.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var app_routes_1 = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var config_1 = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(_alertController, _authModalService, _authService, _langService, _platform, _splashScreen, _statusBar, _translateService, _metaService, _tokenService, _groupsService, _permissionsService, _modalsService, _platformId) {
        var _this = this;
        this._alertController = _alertController;
        this._authModalService = _authModalService;
        this._authService = _authService;
        this._langService = _langService;
        this._platform = _platform;
        this._splashScreen = _splashScreen;
        this._statusBar = _statusBar;
        this._translateService = _translateService;
        this._metaService = _metaService;
        this._tokenService = _tokenService;
        this._groupsService = _groupsService;
        this._permissionsService = _permissionsService;
        this._modalsService = _modalsService;
        this._platformId = _platformId;
        this._destroyed$ = new rxjs_1.Subject();
        this._authModalService.signInInfoMessage =
            config_1.config.authModal.signInInfoMessage;
        this._authModalService.signUpInfoMessage =
            config_1.config.authModal.signUpInfoMessage;
        this.languages$ = this._langService.languages$;
        this.currentLang$ = this._langService.current$;
        this.currentUser$ = this._authService.current$;
        this.currentLang$.pipe(operators_1.takeUntil(this._destroyed$)).subscribe(function (lang) {
            if (lang) {
                _this._metaService.setTag("og:locale", lang.toLowerCase() + "-" + lang.toUpperCase());
                _this.title = _this._translateService.instant(_this._metaService.loader.settings.applicationName);
            }
        });
        this.currentUser$.pipe(operators_1.takeUntil(this._destroyed$)).subscribe(function (user) {
            if (user) {
                if (user.permissionNames.includes("read_group")) {
                    _this._groupsService.repository.reloadAll();
                }
                if (user.permissionNames.includes("read_permission")) {
                    _this._permissionsService.repository.reloadAll();
                }
            }
        });
        if (common_1.isPlatformBrowser(this._platformId)) {
            this._tokenService.tokenHasExpired$
                .pipe(operators_1.takeUntil(this._destroyed$))
                .subscribe(function (result) {
                if (result === true) {
                    if (common_1.isPlatformBrowser(_this._platformId)) {
                        _this._authModalService.onTokenError();
                    }
                    else {
                        _this._authModalService.onSignOutSuccess(undefined);
                    }
                }
            });
        }
        this._platform.ready().then(function () {
            _this._statusBar.styleDefault();
            _this._splashScreen.hide();
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        this._authModalService.onInfo();
        this.navbar.setRoutes(app_routes_1.APP_ROUTES);
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._destroyed$.next(true);
        this._destroyed$.complete();
    };
    AppComponent.prototype.onSwitchLang = function () {
        this.onSwitchLangAsync().then();
    };
    AppComponent.prototype.onSwitchLangAsync = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._alertController.create({
                            header: this._translateService.instant("Select language"),
                            inputs: this._langService.languages.map(function (lang) {
                                return ({
                                    name: "lang",
                                    type: "radio",
                                    label: _this._translateService.instant(lang.title),
                                    value: lang.code,
                                    checked: _this._langService.current === lang.code
                                });
                            }),
                            buttons: [
                                {
                                    text: this._translateService.instant("Cancel"),
                                    role: "cancel",
                                    cssClass: "secondary"
                                },
                                {
                                    text: this._translateService.instant("Select"),
                                    handler: function (value) {
                                        _this._langService.setCurrent(value);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
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
    AppComponent.prototype.onAbout = function (data) {
        this._modalsService.info({
            title: config_1.config.app.title,
            message: config_1.config.app.description
        });
    };
    tslib_1.__decorate([
        core_1.ViewChild("navbar"),
        tslib_1.__metadata("design:type", ionic_1.NavbarComponent)
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        tslib_1.__param(13, core_1.Inject(core_1.PLATFORM_ID)),
        tslib_1.__metadata("design:paramtypes", [angular_1.AlertController,
            core_4.AuthModalService,
            core_4.AuthService,
            core_4.LangService,
            angular_1.Platform,
            ngx_1.SplashScreen,
            ngx_2.StatusBar,
            core_3.TranslateService,
            core_2.MetaService,
            core_4.TokenService,
            ionic_1.GroupsService,
            ionic_1.PermissionsService,
            core_4.ModalsService,
            Object])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var ngx_1 = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/ngx/index.js");
var ngx_2 = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/ngx/index.js");
var angular_1 = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/dist/fesm5.js");
var storage_1 = __webpack_require__(/*! @ionic/storage */ "../../node_modules/@ionic/storage/fesm5/ionic-storage.js");
var core_2 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
var core_3 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var core_4 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var ionic_1 = __webpack_require__(/*! @rucken/ionic */ "../../node_modules/@rucken/ionic/fesm5/rucken-ionic.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var ngx_permissions_1 = __webpack_require__(/*! ngx-permissions */ "../../node_modules/ngx-permissions/ngx-permissions.umd.js");
var ngx_remote_config_1 = __webpack_require__(/*! ngx-remote-config */ "../../node_modules/ngx-remote-config/fesm5/ngx-remote-config.js");
var environment_1 = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var app_routes_1 = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
var config_1 = __webpack_require__(/*! ./config/config */ "./src/app/config/config.ts");
var shared_module_1 = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
var meta_factory_1 = __webpack_require__(/*! ./utils/meta-factory */ "./src/app/utils/meta-factory.ts");
var custom_lib_1 = __webpack_require__(/*! @custom-org/custom-lib */ "../../dist/custom-org/custom-lib/fesm5/custom-org-custom-lib.js");
var custom_lib_ionic_1 = __webpack_require__(/*! @custom-org/custom-lib-ionic */ "../../dist/custom-org/custom-lib-ionic/fesm5/custom-org-custom-lib-ionic.js");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            declarations: [app_component_1.AppComponent],
            entryComponents: [],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                http_1.HttpClientModule,
                ngx_remote_config_1.NgxRemoteConfigModule.forRoot({
                    withoutIterceptor: !environment_1.environment.production,
                    url: !environment_1.environment.production ? undefined : environment_1.environment.remoteConfig.url,
                    default: !environment_1.environment.production
                        ? undefined
                        : environment_1.environment.remoteConfig.default
                }),
                storage_1.IonicStorageModule.forRoot(),
                core_3.TranslateModule.forRoot(),
                platform_browser_1.BrowserModule.withServerTransition({ appId: "custom-app-ionic" }),
                core_4.TransferHttpCacheModule.forRoot(),
                ngx_permissions_1.NgxPermissionsModule.forRoot(),
                angular_1.IonicModule.forRoot(),
                core_4.AuthModule.forRoot({
                    apiUrl: environment_1.environment.apiUrl,
                    oauth: {
                        providers: config_1.config.oauth
                    }
                }),
                core_4.AccountModule.forRoot({
                    apiUrl: environment_1.environment.apiUrl
                }),
                core_4.LangModule.forRoot({
                    languages: config_1.config.app.languages
                }),
                router_1.RouterModule.forRoot(app_routes_1.APP_ROUTES, {
                    preloadingStrategy: router_1.PreloadAllModules,
                    initialNavigation: "enabled"
                }),
                core_2.MetaModule.forRoot({
                    provide: core_2.MetaLoader,
                    useFactory: meta_factory_1.metaFactory,
                    deps: [core_3.TranslateService]
                }),
                core_4.AuthModalModule.forRoot({
                    oauth: {
                        providers: config_1.config.oauth
                    }
                }),
                ngx_bind_io_1.NgxBindIOModule.forRoot(),
                ionic_1.UsersListFiltersModalModule.forRoot(),
                ionic_1.GroupsListFiltersModalModule.forRoot(),
                core_4.RuckenCoreModule,
                ionic_1.RuckenIonicModule,
                custom_lib_1.CustomOrgCustomLibModule,
                custom_lib_ionic_1.CustomOrgCustomLibIonicModule,
                custom_lib_ionic_1.CustomEntitiesListFiltersModalModule.forRoot()
            ],
            providers: [
                {
                    provide: core_4.CONTENT_TYPES_CONFIG_TOKEN,
                    useValue: tslib_1.__assign({}, core_4.DEFAULT_CONTENT_TYPES_CONFIG, { apiUrl: environment_1.environment.apiUrl })
                },
                {
                    provide: core_4.PERMISSIONS_CONFIG_TOKEN,
                    useValue: tslib_1.__assign({}, core_4.DEFAULT_PERMISSIONS_CONFIG, { apiUrl: environment_1.environment.apiUrl })
                },
                {
                    provide: core_4.USERS_CONFIG_TOKEN,
                    useValue: tslib_1.__assign({}, ionic_1.IONIC_DEFAULT_USERS_CONFIG, { apiUrl: environment_1.environment.apiUrl })
                },
                {
                    provide: core_4.GROUPS_CONFIG_TOKEN,
                    useValue: tslib_1.__assign({}, core_4.DEFAULT_GROUPS_CONFIG, { apiUrl: environment_1.environment.apiUrl })
                },
                ngx_2.StatusBar,
                ngx_1.SplashScreen,
                { provide: router_1.RouteReuseStrategy, useClass: angular_1.IonicRouteStrategy }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var custom_entities_page_routes_1 = __webpack_require__(/*! ./pages/custom-entities-page/custom-entities-page.routes */ "./src/app/pages/custom-entities-page/custom-entities-page.routes.ts");
var groups_page_routes_1 = __webpack_require__(/*! ./pages/groups-page/groups-page.routes */ "./src/app/pages/groups-page/groups-page.routes.ts");
var home_page_routes_1 = __webpack_require__(/*! ./pages/home-page/home-page.routes */ "./src/app/pages/home-page/home-page.routes.ts");
var profile_page_routes_1 = __webpack_require__(/*! ./pages/profile-page/profile-page.routes */ "./src/app/pages/profile-page/profile-page.routes.ts");
var users_page_routes_1 = __webpack_require__(/*! ./pages/users-page/users-page.routes */ "./src/app/pages/users-page/users-page.routes.ts");
exports.APP_ROUTES = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    },
    {
        path: "home",
        loadChildren: "./pages/home-page/home-page.module#HomePageModule",
        data: home_page_routes_1.HOME_PAGE_ROUTES[0].data
    },
    {
        path: "users",
        loadChildren: "./pages/users-page/users-page.module#UsersPageModule",
        data: users_page_routes_1.USERS_PAGE_ROUTES[0].data
    },
    {
        path: "groups",
        loadChildren: "./pages/groups-page/groups-page.module#GroupsPageModule",
        data: groups_page_routes_1.GROUPS_PAGE_ROUTES[0].data
    },
    {
        path: "profile",
        loadChildren: "./pages/profile-page/profile-page.module#ProfilePageModule",
        data: profile_page_routes_1.PROFILE_PAGE_ROUTES[0].data
    },
    {
        path: "custom-entities",
        loadChildren: "./pages/custom-entities-page/custom-entities-page.module#CustomEntitiesPageModule",
        data: custom_entities_page_routes_1.CUSTOM_ENTITIES_PAGE_ROUTES[0].data
    },
    {
        path: "**",
        redirectTo: "home"
    }
];


/***/ }),

/***/ "./src/app/config/config.ts":
/*!**********************************!*\
  !*** ./src/app/config/config.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var ru_i18n_1 = __webpack_require__(/*! ../i18n/ru.i18n */ "./src/app/i18n/ru.i18n.ts");
exports.config = {
    app: {
        id: "custom-app-ionic",
        title: core_1.translate("Custom app ionic"),
        description: core_1.translate("Admin UI for Ionic4 with Angular7+ mobile custom-app-ionic application based on Rucken template"),
        languages: [
            {
                title: core_1.translate("Russian"),
                code: "ru",
                translations: [ru_i18n_1.RuI18n]
            }
        ]
    },
    authModal: {
        signInInfoMessage: {
            text: "\n<ion-list>\n  <ion-item>\n    <ion-label text-wrap>\n    <small>{{user1}}</small>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>\n    <small>{{user2}}</small>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-label text-wrap>\n    <small>{{user3}}</small>\n    </ion-label>\n  </ion-item>\n</ion-list>\n",
            data: {
                title: core_1.translate("Demo users:"),
                user1: core_1.translate("Admin: admin@admin.com<br/>Password: 12345678"),
                user2: core_1.translate("User 1: user1@user1.com<br/>Password: 12345678"),
                user3: core_1.translate("User 2: user2@user2.com<br/>Password: 12345678")
            }
        },
        signUpInfoMessage: ""
    },
    oauth: [
        {
            name: "facebook",
            icon: ["fab", "facebook-square"],
            signInTitle: core_1.translate("Sign in with Facebook")
        },
        {
            name: "google-plus",
            icon: ["fab", "google-plus"],
            signInTitle: core_1.translate("Sign in with Google+")
        }
    ]
};


/***/ }),

/***/ "./src/app/i18n/ru.i18n.ts":
/*!*********************************!*\
  !*** ./src/app/i18n/ru.i18n.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RuI18n = {};


/***/ }),

/***/ "./src/app/pages/custom-entities-page/custom-entities-page.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/pages/custom-entities-page/custom-entities-page.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title$ | async | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"customEntityList.onFilterClick()\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar\n      (ionChange)=\"customEntityList.setSearchText($event)\"\n      [placeholder]=\"'Search' | translate\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <custom-entities-list\n    [apiUrl]=\"apiUrl\"\n    #customEntityList\n  ></custom-entities-list>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    *ngIf=\"customEntityList?.list?.notReadonlyAndEnableCreate$ | async\"\n  >\n    <ion-fab-button (click)=\"customEntityList.onCreateClick()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/custom-entities-page/custom-entities-page.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/custom-entities-page/custom-entities-page.component.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var CustomEntitiesPageComponent = /** @class */ (function () {
    function CustomEntitiesPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.apiUrl = environment_1.environment.apiUrl;
        this.title$ = activatedRoute.data.pipe(operators_1.map(function (data) { return data && data.meta && data.meta.title; }));
    }
    CustomEntitiesPageComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "custom-entities-page",
            template: __webpack_require__(/*! ./custom-entities-page.component.html */ "./src/app/pages/custom-entities-page/custom-entities-page.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], CustomEntitiesPageComponent);
    return CustomEntitiesPageComponent;
}());
exports.CustomEntitiesPageComponent = CustomEntitiesPageComponent;


/***/ }),

/***/ "./src/app/pages/custom-entities-page/custom-entities-page.routes.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/custom-entities-page/custom-entities-page.routes.ts ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var custom_entities_page_component_1 = __webpack_require__(/*! ./custom-entities-page.component */ "./src/app/pages/custom-entities-page/custom-entities-page.component.ts");
var core_2 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
exports.CUSTOM_ENTITIES_PAGE_ROUTES = [
    {
        path: "",
        component: custom_entities_page_component_1.CustomEntitiesPageComponent,
        canActivate: [core_1.PermissionsGuard, core_2.MetaGuard],
        data: {
            name: "custom-entities",
            icon: "list-box",
            permissions: {
                only: "read_custom-entities-frame",
                redirectTo: "/home"
            },
            meta: {
                title: core_1.translate("Custom entities"),
                description: core_1.translate("Custom entities page")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/groups-page/groups-page.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/groups-page/groups-page.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title$ | async | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"groupList.onFilterClick()\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar\n      (ionChange)=\"groupList.setSearchText($event)\"\n      [placeholder]=\"'Search' | translate\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <groups-list [apiUrl]=\"apiUrl\" #groupList></groups-list>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    *ngIf=\"groupList?.list?.notReadonlyAndEnableCreate$ | async\"\n  >\n    <ion-fab-button (click)=\"groupList.onCreateClick()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/groups-page/groups-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/groups-page/groups-page.component.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var GroupsPageComponent = /** @class */ (function () {
    function GroupsPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.apiUrl = environment_1.environment.apiUrl;
        this.title$ = activatedRoute.data.pipe(operators_1.map(function (data) { return data && data.meta && data.meta.title; }));
    }
    GroupsPageComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "groups-page",
            template: __webpack_require__(/*! ./groups-page.component.html */ "./src/app/pages/groups-page/groups-page.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], GroupsPageComponent);
    return GroupsPageComponent;
}());
exports.GroupsPageComponent = GroupsPageComponent;


/***/ }),

/***/ "./src/app/pages/groups-page/groups-page.routes.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/groups-page/groups-page.routes.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
var core_2 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var groups_page_component_1 = __webpack_require__(/*! ./groups-page.component */ "./src/app/pages/groups-page/groups-page.component.ts");
exports.GROUPS_PAGE_ROUTES = [
    {
        path: "",
        component: groups_page_component_1.GroupsPageComponent,
        canActivate: [core_2.PermissionsGuard, core_1.MetaGuard],
        data: {
            name: "groups",
            icon: "people",
            permissions: {
                only: "read_groups-frame",
                redirectTo: "/home"
            },
            meta: {
                title: core_2.translate("Groups"),
                description: core_2.translate("Groups page")
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

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title$ | async | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button href=\"https://github.com/rucken/ionic\">\n        <ion-icon slot=\"icon-only\" name=\"logo-github\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding-top padding>\n  <div [innerHTML]=\"readme | safeHtml\"></div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/home-page/home-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var HomePageComponent = /** @class */ (function () {
    function HomePageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.readme = __webpack_require__(/*! html-loader!markdown-loader!./../../../../../../README.md */ "../../node_modules/html-loader/index.js!../../node_modules/markdown-loader/index.js!../../README.md").replace('<h1 id="custom-app-ionic">custom-app-ionic</h1>', "");
        this.title$ = activatedRoute.data.pipe(operators_1.map(function (data) { return data && data.meta && data.meta.title; }));
    }
    HomePageComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "home-page",
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/pages/home-page/home-page.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], HomePageComponent);
    return HomePageComponent;
}());
exports.HomePageComponent = HomePageComponent;


/***/ }),

/***/ "./src/app/pages/home-page/home-page.routes.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/home-page/home-page.routes.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
var core_2 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var home_page_component_1 = __webpack_require__(/*! ./home-page.component */ "./src/app/pages/home-page/home-page.component.ts");
exports.HOME_PAGE_ROUTES = [
    {
        path: "",
        component: home_page_component_1.HomePageComponent,
        canActivate: [core_1.MetaGuard],
        data: {
            name: "home",
            icon: "home",
            meta: {
                title: core_2.translate("Home"),
                description: core_2.translate("Home page")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title$ | async | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button\n        (click)=\"profilePanel.onSaveClick()\"\n        [disabled]=\"(profilePanel.processing$ | async) || profilePanel.disabled\"\n      >\n        <ion-icon slot=\"icon-only\" name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding-top>\n  <profile-panel [apiUrl]=\"apiUrl\" #profilePanel></profile-panel>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var ProfilePageComponent = /** @class */ (function () {
    function ProfilePageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.apiUrl = environment_1.environment.apiUrl;
        this.title$ = activatedRoute.data.pipe(operators_1.map(function (data) { return data && data.meta && data.meta.title; }));
    }
    ProfilePageComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "profile-page",
            template: __webpack_require__(/*! ./profile-page.component.html */ "./src/app/pages/profile-page/profile-page.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], ProfilePageComponent);
    return ProfilePageComponent;
}());
exports.ProfilePageComponent = ProfilePageComponent;


/***/ }),

/***/ "./src/app/pages/profile-page/profile-page.routes.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-page/profile-page.routes.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var profile_page_component_1 = __webpack_require__(/*! ./profile-page.component */ "./src/app/pages/profile-page/profile-page.component.ts");
var core_2 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
exports.PROFILE_PAGE_ROUTES = [
    {
        path: "",
        component: profile_page_component_1.ProfilePageComponent,
        canActivate: [core_1.PermissionsGuard, core_2.MetaGuard],
        data: {
            name: "profile",
            icon: "contact",
            permissions: {
                only: "read_profile-frame",
                redirectTo: "/home"
            },
            meta: {
                title: core_1.translate("Profile"),
                description: core_1.translate("Profile page")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/pages/users-page/users-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>{{ title$ | async | translate }}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"userList.onFilterClick()\">\n        <ion-icon slot=\"icon-only\" name=\"options\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar color=\"primary\">\n    <ion-searchbar\n      (ionChange)=\"userList.setSearchText($event)\"\n      [placeholder]=\"'Search' | translate\"\n    ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <users-list [apiUrl]=\"apiUrl\" #userList></users-list>\n  <ion-fab\n    vertical=\"bottom\"\n    horizontal=\"end\"\n    slot=\"fixed\"\n    *ngIf=\"userList?.list?.notReadonlyAndEnableCreate$ | async\"\n  >\n    <ion-fab-button (click)=\"userList.onCreateClick()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/users-page/users-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/users-page/users-page.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/fesm5/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
var ngx_bind_io_1 = __webpack_require__(/*! ngx-bind-io */ "../../node_modules/ngx-bind-io/fesm5/ngx-bind-io.js");
var environment_1 = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var UsersPageComponent = /** @class */ (function () {
    function UsersPageComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.apiUrl = environment_1.environment.apiUrl;
        this.title$ = activatedRoute.data.pipe(operators_1.map(function (data) { return data && data.meta && data.meta.title; }));
    }
    UsersPageComponent = tslib_1.__decorate([
        ngx_bind_io_1.BindIoInner(),
        core_1.Component({
            selector: "users-page",
            template: __webpack_require__(/*! ./users-page.component.html */ "./src/app/pages/users-page/users-page.component.html"),
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], UsersPageComponent);
    return UsersPageComponent;
}());
exports.UsersPageComponent = UsersPageComponent;


/***/ }),

/***/ "./src/app/pages/users-page/users-page.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/users-page/users-page.routes.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var users_page_component_1 = __webpack_require__(/*! ./users-page.component */ "./src/app/pages/users-page/users-page.component.ts");
var core_2 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
exports.USERS_PAGE_ROUTES = [
    {
        path: "",
        component: users_page_component_1.UsersPageComponent,
        canActivate: [core_1.PermissionsGuard, core_2.MetaGuard],
        data: {
            name: "users",
            icon: "person",
            permissions: {
                only: "read_users-frame",
                redirectTo: "/home"
            },
            meta: {
                title: core_1.translate("Users"),
                description: core_1.translate("Users page")
            }
        }
    }
];


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
var common_1 = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var angular_1 = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/dist/fesm5.js");
var core_2 = __webpack_require__(/*! @ngx-translate/core */ "../../node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var core_3 = __webpack_require__(/*! @rucken/core */ "../../node_modules/@rucken/core/fesm5/rucken-core.js");
var ngx_repository_1 = __webpack_require__(/*! ngx-repository */ "../../node_modules/ngx-repository/fesm5/ngx-repository.js");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                core_3.PipesModule,
                ngx_repository_1.NgxRepositoryModule.forRoot(),
                core_2.TranslateModule.forChild(),
                angular_1.IonicModule
            ],
            exports: [
                common_1.CommonModule,
                core_3.PipesModule,
                ngx_repository_1.NgxRepositoryModule,
                core_2.TranslateModule,
                angular_1.IonicModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;


/***/ }),

/***/ "./src/app/utils/initialize-app.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/initialize-app.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initializeApp(tokenService, langService, usersListFiltersModalService, groupsListFiltersModalService) {
    return function () {
        return new Promise(function (resolve, reject) {
            langService.initializeApp().then(function (_) {
                tokenService.initializeApp().then(function (___) {
                    usersListFiltersModalService.initializeApp().then(function (____) {
                        groupsListFiltersModalService.initializeApp().then(function (_____) {
                            resolve();
                        });
                    });
                });
            });
        });
    };
}
exports.initializeApp = initializeApp;


/***/ }),

/***/ "./src/app/utils/meta-factory.ts":
/*!***************************************!*\
  !*** ./src/app/utils/meta-factory.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @ngx-meta/core */ "../../node_modules/@ngx-meta/core/fesm5/ngx-meta-core.js");
var config_1 = __webpack_require__(/*! ../config/config */ "./src/app/config/config.ts");
function metaFactory(translateService) {
    return new core_1.MetaStaticLoader({
        callback: function (key) {
            return translateService.get(key);
        },
        pageTitlePositioning: core_1.PageTitlePositioning.PrependPageTitle,
        pageTitleSeparator: " - ",
        applicationName: config_1.config.app.title,
        defaults: {
            title: config_1.config.app.title,
            description: config_1.config.app.description,
            "og:type": "website",
            "og:locale": "en_US",
            "og:locale:alternate": "en_US,ru_RU"
        }
    });
}
exports.metaFactory = metaFactory;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
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
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
var app_browser_module_1 = __webpack_require__(/*! ./app/app.browser.module */ "./src/app/app.browser.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic()
    .bootstrapModule(app_browser_module_1.AppBrowserModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/rucken/cli/test/fixtures/generators/apps/custom-app-ionic/src/main.ts */"./src/main.ts");


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