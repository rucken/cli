import { DynamicRepository } from 'ngx-repository';
import { CustomEntity, CUSTOM_ENTITIES_CONFIG_TOKEN } from '@custom-org/custom-lib';
import { __decorate, __metadata, __awaiter } from 'tslib';
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
const RuI18n = {};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
const ɵ0 = {
    title: translate("Russian"),
    code: "ru",
    translations: [RuI18n]
}, ɵ1 = {
    title: translate("English"),
    code: "en",
    translations: []
};
class CustomOrgCustomLibIonicModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntityModalComponent = class CustomEntityModalComponent extends BasePromptFormModalComponent {
    constructor() {
        super();
        this.class = undefined;
        this.group(CustomEntity);
    }
};
CustomEntityModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-modal",
                template: "<prompt-form-modal\n  [bindIO]\n  [iconTopYes]=\"data.id ? 'checkmark' : 'add'\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top [class.readonly_content]=\"readonly\">\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"title\" [title]=\"strings.title\">\n        <ion-input\n          formControlName=\"title\"\n          [disableControl]=\"readonly\"\n          [autofocus]=\"true\"\n        >\n        </ion-input>\n      </form-group>\n      <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n        <ion-textarea formControlName=\"name\" [disableControl]=\"readonly\">\n        </ion-textarea>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityModalComponent.ctorParameters = () => [];
CustomEntityModalComponent.propDecorators = {
    class: [{ type: Input }]
};
CustomEntityModalComponent = __decorate([
    BindIoInner(),
    __metadata("design:paramtypes", [])
], CustomEntityModalComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitiesListFiltersModal {
    constructor() {
        this.id = undefined;
        this.sortField = undefined;
        this.sortType = undefined;
    }
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG = {
    sortField: "id",
    sortType: "desc"
};
/** @type {?} */
const CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN = "CustomEntitiesListFiltersModalConfig";

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
    () => customEntitiesListFiltersModalService.initializeApp());
}
class CustomEntitiesListFiltersModalService {
    /**
     * @param {?} _customEntitiesListFiltersModalConfig
     * @param {?} _storage
     */
    constructor(_customEntitiesListFiltersModalConfig, _storage) {
        this._customEntitiesListFiltersModalConfig = _customEntitiesListFiltersModalConfig;
        this._storage = _storage;
        this.current = undefined;
        this.storageKeyName = "custom-entities-list-filters-modal";
        this.current = this.getDefault();
    }
    /**
     * @return {?}
     */
    getDefault() {
        return plainToClass(CustomEntitiesListFiltersModal, Object.assign({}, DEFAULT_CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG, this._customEntitiesListFiltersModalConfig), {
            groups: ["manual"]
        });
    }
    /**
     * @return {?}
     */
    getCurrent() {
        return this.current;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setCurrent(value) {
        this._storage
            .setItem(this.storageKeyName, JSON.stringify(classToPlain(!value ? this.getDefault() : value, {
            groups: ["manual"]
        })))
            .then((/**
         * @param {?} _
         * @return {?}
         */
        _ => (this.current = value)));
    }
    /**
     * @return {?}
     */
    initCurrent() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this._storage.getItem(this.storageKeyName).then((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                if (data && data !== "undefined") {
                    try {
                        resolve(plainToClass(CustomEntitiesListFiltersModal, (/** @type {?} */ (JSON.parse(data))), { groups: ["manual"] }));
                    }
                    catch (error) {
                        resolve(this.getCurrent());
                    }
                }
                else {
                    resolve(this.getCurrent());
                }
            }));
        }));
    }
    /**
     * @return {?}
     */
    initializeApp() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            this.initCurrent().then((/**
             * @param {?} value
             * @return {?}
             */
            value => {
                this.setCurrent(value);
                resolve();
            }));
        }));
    }
}
CustomEntitiesListFiltersModalService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
CustomEntitiesListFiltersModalService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_LIST_FILTERS_MODAL_CONFIG_TOKEN,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [STORAGE_CONFIG_TOKEN,] }] }
];
__decorate([
    BindObservable(),
    __metadata("design:type", CustomEntitiesListFiltersModal)
], CustomEntitiesListFiltersModalService.prototype, "current", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntitiesListFiltersModalComponent = class CustomEntitiesListFiltersModalComponent extends BasePromptFormModalComponent {
    /**
     * @param {?} _customEntitiesListFiltersModalService
     */
    constructor(_customEntitiesListFiltersModalService) {
        super();
        this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        this.class = undefined;
        this.sortTypes = CustomEntitiesListFiltersModal.sortTypes;
        this.sortFields = CustomEntitiesListFiltersModal.sortFields;
        this.group(CustomEntitiesListFiltersModal);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.data = this._customEntitiesListFiltersModalService.getCurrent();
        this.hideYes = true;
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onYesClick(data) {
        this._customEntitiesListFiltersModalService.setCurrent(this.data);
        super.onYesClick(data);
    }
};
CustomEntitiesListFiltersModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-list-filters-modal",
                template: "<prompt-form-modal\n  [bindIO]\n  iconTopYes=\"checkmark\"\n  iconTopNo=\"close\"\n  [hideFooter]=\"true\"\n>\n</prompt-form-modal>\n<ion-content padding-top>\n  <prompt-form-modal [bindIO] [hideHeader]=\"true\">\n    <form [formGroup]=\"form\" novalidate>\n      <form-group [bindIO] name=\"sortField\" [title]=\"strings.sortField\">\n        <select-input\n          [items]=\"sortFields\"\n          formControlName=\"sortField\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n      <form-group [bindIO] name=\"sortType\" [title]=\"strings.sortType\">\n        <select-input\n          [items]=\"sortTypes\"\n          formControlName=\"sortType\"\n          [disableControl]=\"readonly\"\n        >\n        </select-input>\n      </form-group>\n    </form>\n  </prompt-form-modal>\n</ion-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesListFiltersModalComponent.ctorParameters = () => [
    { type: CustomEntitiesListFiltersModalService }
];
CustomEntitiesListFiltersModalComponent.propDecorators = {
    class: [{ type: Input }]
};
CustomEntitiesListFiltersModalComponent = __decorate([
    BindIoInner(),
    __metadata("design:paramtypes", [CustomEntitiesListFiltersModalService])
], CustomEntitiesListFiltersModalComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntitiesListComponent = class CustomEntitiesListComponent extends BaseEntityListComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     * @param {?} _customEntitiesListFiltersModalService
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig, _customEntitiesListFiltersModalService) {
        super(dynamicRepository.fork(CustomEntity), modalsService, CustomEntity);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this._customEntitiesListFiltersModalService = _customEntitiesListFiltersModalService;
        this.modalItem = {
            class: "primary",
            component: CustomEntityModalComponent,
            initialState: {
                hideYes: true,
                hideNo: true
            }
        };
        this.modalView = {
            class: "medium",
            component: CustomEntityModalComponent,
            initialState: {
                noClass: "medium",
                hideYes: true,
                hideNo: true
            }
        };
        this.title = translate("Custom entities");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems, infinity: true }, this.customEntitiesConfig, { autoload: false }));
        }
        this.onChangeFilter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setSearchText(event) {
        this.list.searchField.setValue(event.detail.value);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onDeleteClickAsync(item) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const title = interpolate(this.translateService.instant(this.strings.deleteTitle), item);
            /** @type {?} */
            const message = interpolate(this.translateService.instant(this.strings.deleteMessage), item);
            try {
                /** @type {?} */
                const result = yield ((/** @type {?} */ (this
                    .modalsService))).confirmAsync({
                    title,
                    message
                });
                if (result) {
                    this.repository.delete(item.id).subscribe((/**
                     * @param {?} deletedItem
                     * @return {?}
                     */
                    deletedItem => {
                        if (this.mockedItems) {
                            this.mockedItems = this.repository.items;
                            this.mockedItemsChange.emit(this.mockedItems);
                        }
                    }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    error => this.onError(error)));
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    createFiltersModal(item) {
        return __awaiter(this, void 0, void 0, function* () {
            item = item || new CustomEntitiesListFiltersModal();
            /** @type {?} */
            const modalRef = yield this.modalsService.createAsync(CustomEntitiesListFiltersModalComponent, {
                class: "secondary",
                initialState: {
                    title: translate("Custom entities filters"),
                    data: item
                }
            });
            modalRef.instance.group(CustomEntitiesListFiltersModal);
            modalRef.instance.data = item;
            return modalRef;
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onFilterClickAsync(data) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const modalRef = yield this.createFiltersModal(data);
            modalRef.instance.yes.subscribe((/**
             * @param {?} modal
             * @return {?}
             */
            (modal) => {
                modal.hide();
                this.onChangeFilter();
            }));
        });
    }
    /**
     * @param {?=} data
     * @return {?}
     */
    onFilterClick(data) {
        this.onFilterClickAsync(data).then();
    }
    /**
     * @param {?=} filter
     * @return {?}
     */
    onChangeFilter(filter) {
        if (!filter) {
            filter = {};
        }
        /** @type {?} */
        const customEntitiesListFiltersModal = this._customEntitiesListFiltersModalService.getCurrent();
        if (customEntitiesListFiltersModal.sortField) {
            filter["sort"] = customEntitiesListFiltersModal.sortField.id;
        }
        if (customEntitiesListFiltersModal.sortType) {
            filter["sort"] =
                (customEntitiesListFiltersModal.sortType.id === "asc" ? "" : "-") +
                    filter["sort"];
        }
        {
            super.onChangeFilter(filter);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onUpdateClickAsync(item) {
        return __awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const useCustomModalComponent = this.modalUpdate.component || this.modalItem.component;
            /** @type {?} */
            let modalRef = !useCustomModalComponent
                ? yield this.createUpdateModal(item)
                : undefined;
            if (!modalRef) {
                modalRef = yield this.defaultCreateUpdateModal(item);
                if (isDevMode() && !useCustomModalComponent) {
                    console.warn('Method "createUpdateModal" is not defined', this);
                }
            }
            modalRef.instance.yes.subscribe((/**
             * @param {?} modal
             * @return {?}
             */
            (modal) => {
                modal.processing = true;
                this.repository.update(item.id, modal.getData()).subscribe((/**
                 * @param {?} updatedItem
                 * @return {?}
                 */
                updatedItem => {
                    modal.processing = false;
                    if (this.mockedItems) {
                        this.mockedItems = this.repository.items;
                        this.mockedItemsChange.emit(this.mockedItems);
                    }
                    modal.hide();
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => this.onUpdateError(modal, error)));
            }));
        });
    }
};
CustomEntitiesListComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-list",
                template: "<entity-list\n  [bindIO]\n  [items]=\"items$ | async\"\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n  #list\n>\n  <ng-content></ng-content>\n</entity-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesListComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] },
    { type: CustomEntitiesListFiltersModalService }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntityModalModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitiesListFiltersModalModule {
    /**
     * @param {?=} options
     * @return {?}
     */
    static forRoot(options) {
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
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitiesListModule {
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