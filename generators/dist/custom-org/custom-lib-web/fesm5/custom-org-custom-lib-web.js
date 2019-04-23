import { map } from 'rxjs/operators';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { __extends, __decorate, __metadata, __assign } from 'tslib';
import { FormControl } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { LANGUAGES_ITEM_CONFIG_TOKEN, translate, BasePromptFormModalComponent, BaseEntityListComponent, ErrorsExtractor, ModalsService, BaseEntityListModalComponent } from '@rucken/core';
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from '@custom-org/custom-lib';
import { DynamicRepository } from 'ngx-repository';
import { CommonModule } from '@angular/common';
import { NgModule, ChangeDetectionStrategy, Component, Input, Inject, ViewChild, EventEmitter, Output } from '@angular/core';
import { PromptFormModalModule, EntityGridModule, WebModalsModule, EntityGridModalModule, EntityInputModule, EntitySelectModule } from '@rucken/web';
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
var CustomOrgCustomLibWebModule = /** @class */ (function () {
    function CustomOrgCustomLibWebModule() {
    }
    CustomOrgCustomLibWebModule.decorators = [
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
    return CustomOrgCustomLibWebModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityModalComponent = /** @class */ (function (_super) {
    __extends(CustomEntityModalComponent, _super);
    function CustomEntityModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        _this.group(CustomEntity);
        return _this;
    }
    CustomEntityModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-modal",
                    template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityModalComponent.ctorParameters = function () { return []; };
    CustomEntityModalComponent.propDecorators = {
        apiUrl: [{ type: Input }]
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
var CustomEntitiesGridComponent = /** @class */ (function (_super) {
    __extends(CustomEntitiesGridComponent, _super);
    function CustomEntitiesGridComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, dynamicRepository.fork(CustomEntity), modalsService, CustomEntity) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.autoload = false;
        _this.modalItem = {
            component: CustomEntityModalComponent
        };
        _this.title = translate("Custom entities");
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
        this.items$ = this.repository.items$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        function (items) {
            return items.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) {
                return item;
            }));
        })));
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
        item = item || new CustomEntity();
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
        { type: Component, args: [{
                    selector: "custom-entities-grid",
                    template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntitiesGridComponent.propDecorators = {
        autoload: [{ type: Input }],
        modalItem: [{ type: Input }],
        title: [{ type: Input }]
    };
    CustomEntitiesGridComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntitiesGridComponent);
    return CustomEntitiesGridComponent;
}(BaseEntityListComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridModalComponent = /** @class */ (function (_super) {
    __extends(CustomEntitiesGridModalComponent, _super);
    function CustomEntitiesGridModalComponent() {
        var _this = _super.call(this) || this;
        _this.apiUrl = undefined;
        return _this;
    }
    CustomEntitiesGridModalComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entities-grid-modal",
                    template: "<entity-grid-modal [bindIO]>\n  <custom-entities-grid [apiUrl]=\"apiUrl\" #grid> </custom-entities-grid>\n</entity-grid-modal>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitiesGridModalComponent.ctorParameters = function () { return []; };
    CustomEntitiesGridModalComponent.propDecorators = {
        grid: [{ type: ViewChild, args: ["grid",] }],
        apiUrl: [{ type: Input }]
    };
    CustomEntitiesGridModalComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [])
    ], CustomEntitiesGridModalComponent);
    return CustomEntitiesGridModalComponent;
}(BaseEntityListModalComponent));

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
                        PromptFormModalModule,
                        BsDatepickerModule,
                        TypeaheadModule.forRoot(),
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntityModalComponent],
                    entryComponents: [CustomEntityModalComponent],
                    exports: [
                        CustomEntityModalComponent,
                        PromptFormModalModule,
                        BsDatepickerModule
                    ]
                },] }
    ];
    return CustomEntityModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridModule = /** @class */ (function () {
    function CustomEntitiesGridModule() {
    }
    CustomEntitiesGridModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        WebModalsModule,
                        EntityGridModule,
                        CustomEntityModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesGridComponent],
                    exports: [
                        CustomEntitiesGridComponent,
                        EntityGridModule,
                        CustomEntityModalModule
                    ]
                },] }
    ];
    return CustomEntitiesGridModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitiesGridModalModule = /** @class */ (function () {
    function CustomEntitiesGridModalModule() {
    }
    CustomEntitiesGridModalModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntityGridModalModule,
                        CustomEntitiesGridModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitiesGridModalComponent],
                    entryComponents: [CustomEntitiesGridModalComponent],
                    exports: [
                        CustomEntitiesGridModalComponent,
                        EntityGridModalModule,
                        CustomEntitiesGridModule
                    ]
                },] }
    ];
    return CustomEntitiesGridModalModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                title: translate("Select customEntity"),
                yesTitle: translate("Select")
            }
        };
        _this.select = new EventEmitter();
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
        this.mockedItemsChange.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        function (items) { return _this.onSelect(items[0]); }));
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
        { type: Component, args: [{
                    selector: "custom-entity-input",
                    template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntityInputComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntityInputComponent.propDecorators = {
        modalAppendFromGrid: [{ type: Input }],
        select: [{ type: Output }]
    };
    CustomEntityInputComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntityInputComponent);
    return CustomEntityInputComponent;
}(CustomEntitiesGridComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntityInputModule = /** @class */ (function () {
    function CustomEntityInputModule() {
    }
    CustomEntityInputModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntityInputModule,
                        CustomEntitiesGridModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntityInputComponent],
                    exports: [
                        CustomEntityInputComponent,
                        EntityInputModule,
                        CustomEntitiesGridModalModule
                    ]
                },] }
    ];
    return CustomEntityInputModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitySelectComponent = /** @class */ (function (_super) {
    __extends(CustomEntitySelectComponent, _super);
    function CustomEntitySelectComponent(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        var _this = _super.call(this, modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) || this;
        _this.errorsExtractor = errorsExtractor;
        _this.translateService = translateService;
        _this.dynamicRepository = dynamicRepository;
        _this.customEntitiesConfig = customEntitiesConfig;
        _this.searchField = new FormControl();
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
        return item instanceof CustomEntity;
    };
    CustomEntitySelectComponent.decorators = [
        { type: Component, args: [{
                    selector: "custom-entity-select",
                    template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CustomEntitySelectComponent.ctorParameters = function () { return [
        { type: ModalsService },
        { type: ErrorsExtractor },
        { type: TranslateService },
        { type: DynamicRepository },
        { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
    ]; };
    CustomEntitySelectComponent.propDecorators = {
        searchField: [{ type: Input }]
    };
    CustomEntitySelectComponent = __decorate([
        BindIoInner(),
        __metadata("design:paramtypes", [ModalsService,
            ErrorsExtractor,
            TranslateService,
            DynamicRepository, Object])
    ], CustomEntitySelectComponent);
    return CustomEntitySelectComponent;
}(CustomEntitiesGridComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEntitySelectModule = /** @class */ (function () {
    function CustomEntitySelectModule() {
    }
    CustomEntitySelectModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        EntitySelectModule,
                        CustomEntitiesGridModalModule,
                        NgxBindIOModule
                    ],
                    declarations: [CustomEntitySelectComponent],
                    exports: [
                        CustomEntitySelectComponent,
                        EntitySelectModule,
                        CustomEntitiesGridModalModule
                    ]
                },] }
    ];
    return CustomEntitySelectModule;
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

export { RuI18n, CustomOrgCustomLibWebModule, CustomEntitiesGridModalComponent, CustomEntitiesGridModalModule, CustomEntitiesGridComponent, CustomEntitiesGridModule, CustomEntityInputComponent, CustomEntityInputModule, CustomEntityModalComponent, CustomEntityModalModule, CustomEntitySelectComponent, CustomEntitySelectModule };

//# sourceMappingURL=custom-org-custom-lib-web.js.map