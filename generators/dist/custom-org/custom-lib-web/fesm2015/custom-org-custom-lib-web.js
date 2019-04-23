import { map } from 'rxjs/operators';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { __decorate, __metadata } from 'tslib';
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
class CustomOrgCustomLibWebModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntityModalComponent = class CustomEntityModalComponent extends BasePromptFormModalComponent {
    constructor() {
        super();
        this.apiUrl = undefined;
        this.group(CustomEntity);
    }
};
CustomEntityModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-modal",
                template: "<form [formGroup]=\"form\" novalidate>\n  <prompt-form-modal [bindIO]>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"title\" [title]=\"strings.title\" focus>\n          <input formControlName=\"title\" [readonly]=\"readonly\" />\n        </form-group>\n      </div>\n      <div class=\"col-md-12\">\n        <form-group [bindIO] name=\"name\" [title]=\"strings.name\">\n          <textarea formControlName=\"name\" [readonly]=\"readonly\"> </textarea>\n        </form-group>\n      </div>\n    </div>\n  </prompt-form-modal>\n</form>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityModalComponent.ctorParameters = () => [];
CustomEntityModalComponent.propDecorators = {
    apiUrl: [{ type: Input }]
};
CustomEntityModalComponent = __decorate([
    BindIoInner(),
    __metadata("design:paramtypes", [])
], CustomEntityModalComponent);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntitiesGridComponent = class CustomEntitiesGridComponent extends BaseEntityListComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        super(dynamicRepository.fork(CustomEntity), modalsService, CustomEntity);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this.autoload = false;
        this.modalItem = {
            component: CustomEntityModalComponent
        };
        this.title = translate("Custom entities");
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig, { autoload: this.autoload }));
        }
        this.items$ = this.repository.items$.pipe(map((/**
         * @param {?} items
         * @return {?}
         */
        items => items.map((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            return item;
        })))));
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    defaultCreateCreateModal(item) {
        item = item || new CustomEntity();
        this.modalCreate = Object.assign({}, this.modalCreate, { initialState: Object.assign({}, this.modalCreate.initialState, { data: item }) });
        return super.defaultCreateCreateModal(item);
    }
    /**
     * @param {?=} item
     * @return {?}
     */
    defaultCreateUpdateModal(item) {
        this.modalUpdate = Object.assign({}, this.modalUpdate, { initialState: Object.assign({}, this.modalUpdate.initialState, { data: item }) });
        return super.defaultCreateUpdateModal(item);
    }
};
CustomEntitiesGridComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-grid",
                template: "<entity-grid\n  [bindIO]\n  [columns]=\"['title', 'name', 'action']\"\n  [enableCreate]=\"'add_custom-entity' | perm: false | async\"\n  [enableUpdate]=\"'change_custom-entity' | perm: false | async\"\n  [enableDelete]=\"'delete_custom-entity' | perm: false | async\"\n>\n</entity-grid>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesGridComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntitiesGridModalComponent = class CustomEntitiesGridModalComponent extends BaseEntityListModalComponent {
    constructor() {
        super();
        this.apiUrl = undefined;
    }
};
CustomEntitiesGridModalComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entities-grid-modal",
                template: "<entity-grid-modal [bindIO]>\n  <custom-entities-grid [apiUrl]=\"apiUrl\" #grid> </custom-entities-grid>\n</entity-grid-modal>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitiesGridModalComponent.ctorParameters = () => [];
CustomEntitiesGridModalComponent.propDecorators = {
    grid: [{ type: ViewChild, args: ["grid",] }],
    apiUrl: [{ type: Input }]
};
CustomEntitiesGridModalComponent = __decorate([
    BindIoInner(),
    __metadata("design:paramtypes", [])
], CustomEntitiesGridModalComponent);

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitiesGridModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitiesGridModalModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntityInputComponent = class CustomEntityInputComponent extends CustomEntitiesGridComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        super(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this.modalAppendFromGrid = {
            component: CustomEntitiesGridModalComponent,
            initialState: {
                title: translate("Select customEntity"),
                yesTitle: translate("Select")
            }
        };
        this.select = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.mockedItems = [];
        this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig));
        this.mockedItemsChange.subscribe((/**
         * @param {?} items
         * @return {?}
         */
        items => this.onSelect(items[0])));
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelect(item) {
        this.select.emit(item);
    }
};
CustomEntityInputComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-input",
                template: "<entity-input [readonly]=\"readonly\" (select)=\"onAppendFromGridClick($event)\">\n  <ng-content></ng-content>\n</entity-input>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntityInputComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntityInputModule {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
let CustomEntitySelectComponent = class CustomEntitySelectComponent extends CustomEntitiesGridComponent {
    /**
     * @param {?} modalsService
     * @param {?} errorsExtractor
     * @param {?} translateService
     * @param {?} dynamicRepository
     * @param {?} customEntitiesConfig
     */
    constructor(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig) {
        super(modalsService, errorsExtractor, translateService, dynamicRepository, customEntitiesConfig);
        this.errorsExtractor = errorsExtractor;
        this.translateService = translateService;
        this.dynamicRepository = dynamicRepository;
        this.customEntitiesConfig = customEntitiesConfig;
        this.searchField = new FormControl();
        this.nameField = "title";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.mockedItems) {
            this.useRest(Object.assign({ apiUrl: this.apiUrl }, this.customEntitiesConfig, { paginationMeta: { perPage: 1000 } }));
        }
        if (this.mockedItems) {
            this.useMock(Object.assign({ items: this.mockedItems }, this.customEntitiesConfig));
        }
    }
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    checkChange(value, item) {
        return item instanceof CustomEntity;
    }
};
CustomEntitySelectComponent.decorators = [
    { type: Component, args: [{
                selector: "custom-entity-select",
                template: "<entity-select [bindIO]>\n  <ng-content></ng-content>\n</entity-select>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CustomEntitySelectComponent.ctorParameters = () => [
    { type: ModalsService },
    { type: ErrorsExtractor },
    { type: TranslateService },
    { type: DynamicRepository },
    { type: undefined, decorators: [{ type: Inject, args: [CUSTOM_ENTITIES_CONFIG_TOKEN,] }] }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CustomEntitySelectModule {
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