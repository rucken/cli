(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ngx-repository'), require('@rucken/core'), require('class-transformer'), require('class-validator')) :
    typeof define === 'function' && define.amd ? define('@custom-org/custom-lib', ['exports', '@angular/common', '@angular/core', 'ngx-repository', '@rucken/core', 'class-transformer', 'class-validator'], factory) :
    (factory((global['custom-org'] = global['custom-org'] || {}, global['custom-org']['custom-lib'] = {}),global.ng.common,global.ng.core,global.ngxRepository,global.core$1,global.classTransformer,global.classValidator));
}(this, (function (exports,common,core,ngxRepository,core$1,classTransformer,classValidator) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var RuI18n = {};

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
            id: core$1.translate("Id"),
            name: core$1.translate("Name"),
            title: core$1.translate("Title"),
            createdAt: core$1.translate("Created at"),
            updatedAt: core$1.translate("Updated at"),
            createTitle: core$1.translate("Add new custom entity "),
            viewTitle: core$1.translate("Custom entity  #{{id}}"),
            updateTitle: core$1.translate("Update custom entity  #{{id}}"),
            deleteTitle: core$1.translate("Delete custom entity  #{{id}}"),
            deleteMessage: core$1.translate("Do you really want to delete custom entity ?")
        };
        __decorate([
            classValidator.IsNotEmpty(),
            __metadata("design:type", String)
        ], CustomEntity.prototype, "name", void 0);
        __decorate([
            classTransformer.Transform(core$1.transformStringToDate, { toClassOnly: true }),
            classTransformer.Transform(core$1.transformDateToString, { toPlainOnly: true }),
            __metadata("design:type", Object)
        ], CustomEntity.prototype, "createdAt", void 0);
        __decorate([
            classTransformer.Transform(core$1.transformStringToDate, { toClassOnly: true }),
            classTransformer.Transform(core$1.transformDateToString, { toPlainOnly: true }),
            __metadata("design:type", Object)
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
                if (action === ngxRepository.ProviderActionEnum.Delete) {
                    return true;
                }
                else {
                    if (action === ngxRepository.ProviderActionEnum.LoadAll) {
                        return classTransformer.plainToClass(CustomEntity, data && data.body && data.body.customEntities);
                    }
                    else {
                        return classTransformer.plainToClass(CustomEntity, data && data.body && data.body.customEntity);
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
        title: core$1.translate("Russian"),
        code: "ru",
        translations: [RuI18n]
    }, ɵ1 = {
        title: core$1.translate("English"),
        code: "en",
        translations: []
    };
    var CustomOrgCustomLibModule = /** @class */ (function () {
        function CustomOrgCustomLibModule() {
        }
        CustomOrgCustomLibModule.decorators = [
            { type: core.NgModule, args: [{
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

    exports.RuI18n = RuI18n;
    exports.CustomOrgCustomLibModule = CustomOrgCustomLibModule;
    exports.DEFAULT_CUSTOM_ENTITIES_CONFIG = DEFAULT_CUSTOM_ENTITIES_CONFIG;
    exports.CUSTOM_ENTITIES_CONFIG_TOKEN = CUSTOM_ENTITIES_CONFIG_TOKEN;
    exports.ENTITIES_PROVIDERS = ENTITIES_PROVIDERS;
    exports.CustomEntity = CustomEntity;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=custom-org-custom-lib.umd.js.map