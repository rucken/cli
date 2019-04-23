import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProviderActionEnum } from 'ngx-repository';
import { __decorate, __metadata } from 'tslib';
import { transformDateToString, transformStringToDate, translate, LANGUAGES_ITEM_CONFIG_TOKEN } from '@rucken/core';
import { Transform, plainToClass } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

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
        id: translate("Id"),
        name: translate("Name"),
        title: translate("Title"),
        createdAt: translate("Created at"),
        updatedAt: translate("Updated at"),
        createTitle: translate("Add new custom entity "),
        viewTitle: translate("Custom entity  #{{id}}"),
        updateTitle: translate("Update custom entity  #{{id}}"),
        deleteTitle: translate("Delete custom entity  #{{id}}"),
        deleteMessage: translate("Do you really want to delete custom entity ?")
    };
    __decorate([
        IsNotEmpty(),
        __metadata("design:type", String)
    ], CustomEntity.prototype, "name", void 0);
    __decorate([
        Transform(transformStringToDate, { toClassOnly: true }),
        Transform(transformDateToString, { toPlainOnly: true }),
        __metadata("design:type", Object)
    ], CustomEntity.prototype, "createdAt", void 0);
    __decorate([
        Transform(transformStringToDate, { toClassOnly: true }),
        Transform(transformDateToString, { toPlainOnly: true }),
        __metadata("design:type", Object)
    ], CustomEntity.prototype, "updatedAt", void 0);
    return CustomEntity;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        responseData: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        function (data, action) {
            if (action === ProviderActionEnum.Delete) {
                return true;
            }
            else {
                if (action === ProviderActionEnum.LoadAll) {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntities);
                }
                else {
                    return plainToClass(CustomEntity, data && data.body && data.body.customEntity);
                }
            }
        }),
        responsePaginationMeta: (/**
         * @param {?} data
         * @param {?} action
         * @return {?}
         */
        function (data, action) {
            return {
                totalResults: data && data.body && data.body.meta && data.body.meta.totalResults,
                perPage: undefined
            };
        })
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
var CustomOrgCustomLibModule = /** @class */ (function () {
    function CustomOrgCustomLibModule() {
    }
    CustomOrgCustomLibModule.decorators = [
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
                        },
                        ENTITIES_PROVIDERS
                    ]
                },] }
    ];
    return CustomOrgCustomLibModule;
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

export { RuI18n, CustomOrgCustomLibModule, DEFAULT_CUSTOM_ENTITIES_CONFIG, CUSTOM_ENTITIES_CONFIG_TOKEN, ENTITIES_PROVIDERS, CustomEntity };

//# sourceMappingURL=custom-org-custom-lib.js.map