"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var CustomOrgCustomLibNestjsModule_1;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_nestjs_1 = require("@rucken/core-nestjs");
const controllers_1 = require("./controllers");
const entities_1 = require("./entities");
const services_1 = require("./services");
let CustomOrgCustomLibNestjsModule = CustomOrgCustomLibNestjsModule_1 = class CustomOrgCustomLibNestjsModule {
    static forFeature(options) {
        return {
            module: CustomOrgCustomLibNestjsModule_1,
            imports: [
                core_nestjs_1.RuckenCoreModule.forFeature(options),
                typeorm_1.TypeOrmModule.forFeature(entities_1.CUSTOM_LIB_NESTJS_ENTITIES)
            ],
            providers: [...options.providers, ...services_1.CUSTOM_LIB_NESTJS_SERVICES],
            exports: [...services_1.CUSTOM_LIB_NESTJS_SERVICES]
        };
    }
    static forRoot(options) {
        return {
            module: CustomOrgCustomLibNestjsModule_1,
            imports: [
                core_nestjs_1.RuckenCoreModule.forFeature(options),
                typeorm_1.TypeOrmModule.forFeature(entities_1.CUSTOM_LIB_NESTJS_ENTITIES)
            ],
            controllers: [...controllers_1.CUSTOM_LIB_NESTJS_CONTROLLERS],
            providers: [...options.providers, ...services_1.CUSTOM_LIB_NESTJS_SERVICES],
            exports: [...services_1.CUSTOM_LIB_NESTJS_SERVICES]
        };
    }
};
CustomOrgCustomLibNestjsModule = CustomOrgCustomLibNestjsModule_1 = tslib_1.__decorate([
    common_1.Module({})
], CustomOrgCustomLibNestjsModule);
exports.CustomOrgCustomLibNestjsModule = CustomOrgCustomLibNestjsModule;
//# sourceMappingURL=custom-lib-nestjs.module.js.map