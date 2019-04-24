import { DynamicRepository } from 'ngx-repository';
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from '@custom-org/custom-lib';
import { __extends, __decorate, __metadata, __assign, __awaiter, __generator } from 'tslib';
import { BindObservable } from 'bind-observable';
import { Transform, Type, classToPlain, plainToClass } from 'class-transformer';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule, ChangeDetectionStrategy, Component, Input, Inject, Injectable, isDevMode, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LANGUAGES_ITEM_CONFIG_TOKEN, translate, BasePromptFormModalComponent, serializeModel, STORAGE_CONFIG_TOKEN, BaseEntityListComponent, ErrorsExtractor, interpolate, ModalsService, DirectivesModule, PipesModule } from '@rucken/core';
import { keyToSelectInput, SelectInput, selectInputToKey, FormGroupModule, PromptFormModalModule, SelectInputModule, EntityListModule, IonicModalsModule } from '@rucken/ionic';
import { BindIoInner, NgxBindIOModule } from 'ngx-bind-io';

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
    title: translate("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: translate("English"),
    code: "en",
    translations: []
};
var CustomOrgCustomLibIonicModule = /** @class */ (function () {
    function CustomOrgCustomLibIonicModule() {
    }
    CustomOrgCustomLibIonicModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    providers: [
                        {
                            provide: LANGUAGES_ITEM_CONFIG_TOKEN,
                            useValue: ɵ0,
                            multi: true
                        },
                        {
                            provide: LANGUAGES_ITEM_CONFIG_TOKEN,
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalComponent = /** @class */ (function (_super) {
    __extends(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.class = undefined;
        _this.group(CustomEntity);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        class: [{ type: Input }]
    };
    CustomEntityModalComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [])
    ], CustomEntityModalComponent);
    return CustomEntityModalComponent;
}(BasePromptFormModalComponent));

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
        sortField: translate("Sort field"),
        sortType: translate("Sort type")
    };
    CustomEntitiesListFiltersModal.sortFields = [
        { id: "id", title: translate("Id") },
        { id: "title", title: translate("Title") }
    ];
    CustomEntitiesListFiltersModal.sortTypes = [
        { id: "asc", title: translate("Asc") },
        { id: "desc", title: translate("Desc") }
    ];
    __decorate([
        Type(serializeModel(SelectInput)),
        Transform(keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortFields }), { toClassOnly: true, groups: ["manual"] }),
        Transform(selectInputToKey({ items: CustomEntitiesListFiltersModal.sortFields }), { toPlainOnly: true, groups: ["manual"] }),
        __metadata("design:type", SelectInput)
    ], CustomEntitiesListFiltersModal.prototype, "sortField", void 0);
    __decorate([
        Type(serializeModel(SelectInput)),
        Transform(keyToSelectInput({ items: CustomEntitiesListFiltersModal.sortTypes }), { toClassOnly: true, groups: ["manual"] }),
        Transform(selectInputToKey({ items: CustomEntitiesListFiltersModal.sortTypes }), { toPlainOnly: true, groups: ["manual"] }),
        __metadata("design:type", SelectInput)
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
    return (/**
     * @return {?}
     */
    function () { return customEntitiesListFiltersModalService.initializeApp(); });
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
        return plainToClass(CustomEntitiesListFiltersModal, __assign({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
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
            .setItem(this.storageKeyName, JSON.stringify(classToPlain(!value ? this.getDefault() : value, {
            groups: ["manual"]
        })))
            .then((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return (_this.current = value); }));
    };
    /**
     * @return {?}
     */
    CustomEntitiesListFiltersModalService.prototype.initCurrent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this._storage.getItem(_this.storageKeyName).then((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                if (data && data !== "undefined") {
                    try {
                        resolve(plainToClass(CustomEntitiesListFiltersModal, (/** @type {?} */ (JSON.parse(data))), { groups: ["manual"] }));
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
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        function (resolve) {
            _this.initCurrent().then((/**
             * @param {?} value
             * @return {?}
             */
            function (value) {
                _this.setCurrent(value);
                resolve();
            }));
        }));
    };
    CustomEntitiesListFiltersModalService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [STORAGE_CONFIG_TOKEN,] }] }
    ]; };
    __decorate([
        BindObservable(),
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
        { type: Component, args: [{
                    selector: "custom-entities-list-filters-modal",
                    template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListFiltersModalComponent.ctorParameters = function () { return [
        { type: CustomEntitiesListFiltersModalService }
    ]; };
    CustomEntitiesListFiltersModalComponent.propDecorators = {
        class: [{ type: Input }]
    };
    CustomEntitiesListFiltersModalComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [CustomEntitiesListFiltersModalService])
    ], CustomEntitiesListFiltersModalComponent);
    return CustomEntitiesListFiltersModalComponent;
}(BasePromptFormModalComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesListComponent = /** @class */ (function (_super) {
    __extends(CustomEntitiesListComponent, _super);
    function CustomEntitiesListComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
        var _this = _super.call(this, dynamicRepository.fork(CustomEntity), modalsService, CustomEntity) || this;
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
        _this.title = translate("Custom entities");
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
                        title = interpolate(this.translateService.instant(this.strings.deleteTitle), item);
                        message = interpolate(this.translateService.instant(this.strings.deleteMessage), item);
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
                            this.repository.delete(item.id).subscribe((/**
                             * @param {?} deletedItem
                             * @return {?}
                             */
                            function (deletedItem) {
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                            }), (/**
                             * @param {?} error
                             * @return {?}
                             */
                            function (error) { return _this.onError(error); }));
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
                                    title: translate("Custom entities filters"),
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
                        modalRef.instance.yes.subscribe((/**
                         * @param {?} modal
                         * @return {?}
                         */
                        function (modal) {
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
                        if (isDevMode() && !useCustomModalComponent) {
                            console.warn('Method "createUpdateModal" is not defined', this);
                        }
                        _b.label = 5;
                    case 5:
                        modalRef.instance.yes.subscribe((/**
                         * @param {?} modal
                         * @return {?}
                         */
                        function (modal) {
                            modal.processing = true;
                            _this.repository.update(item.id, modal.getData()).subscribe((/**
                             * @param {?} updatedItem
                             * @return {?}
                             */
                            function (updatedItem) {
                                modal.processing = false;
                                if (_this.mockedItems) {
                                    _this.mockedItems = _this.repository.items;
                                    _this.mockedItemsChange.emit(_this.mockedItems);
                                }
                                modal.hide();
                            }), (/**
                             * @param {?} error
                             * @return {?}
                             */
                            function (error) { return _this.onUpdateError(modal, error); }));
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    CustomEntitiesListComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-list",
                    template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesListComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] },
        { type: CustomEntitiesListFiltersModalService }
    ]; };
    CustomEntitiesListComponent.propDecorators = {
        list: [{ type: ViewChild, args: ["list",] }],
        modalItem: [{ type: Input }],
        modalView: [{ type: Input }],
        title: [{ type: Input }]
    };
    CustomEntitiesListComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object, CustomEntitiesListFiltersModalService])
    ], CustomEntitiesListComponent);
    return CustomEntitiesListComponent;
}(BaseEntityListComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalModule = /** @class */ (function () {
    function CustomEntityModalModule() {
    }
    CustomEntityModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        FormGroupModule,
                        ReactiveFormsModule,
                        TranslateModule.forChild(),
                        DirectivesModule,
                        PipesModule,
                        PromptFormModalModule,
                        SelectInputModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntityModalComponent],
                    entryComponents: [CustomEntityModalComponent],
                    exports: [CustomEntityModalComponent, FormGroupModule]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        FormGroupModule,
                        ReactiveFormsModule,
                        TranslateModule.forChild(),
                        DirectivesModule,
                        PipesModule,
                        PromptFormModalModule,
                        SelectInputModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesListFiltersModalComponent],
                    entryComponents: [CustomEntitiesListFiltersModalComponent],
                    exports: [CustomEntitiesListFiltersModalComponent, FormGroupModule]
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
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        IonicModule,
                        IonicModalsModule,
                        TranslateModule.forChild(),
                        PipesModule,
                        EntityListModule,
                        CustomEntityModalModule,
                        CustomEntitiesListFiltersModalModule,
                        RouterModule,
                        NgxBindIOModule
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

export { RuI18n, CustomOrgCustomLibIonicModule, CustomEntitiesListComponent, CustomEntitiesListModule, CustomEntitiesListFiltersModalComponent, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN, CustomEntitiesListFiltersModalModule, customEntitiesListFiltersModalServiceInitializeApp, CustomEntitiesListFiltersModalService, CustomEntitiesListFiltersModal, CustomEntityModalComponent, CustomEntityModalModule };

//# sourceMappingURL=custom-org-custom-lib-ionic.js.map