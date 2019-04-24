"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var AppModule_1;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const typeorm_1 = require("@nestjs/typeorm");
const auth_nestjs_1 = require("@rucken/auth-nestjs");
const core_nestjs_1 = require("@rucken/core-nestjs");
const custom_lib_nestjs_1 = require("@custom-org/custom-lib-nestjs");
let AppModule = AppModule_1 = class AppModule {
    static forRoot(options) {
        return {
            module: AppModule_1,
            imports: [
                passport_1.PassportModule.register({ defaultStrategy: "jwt" }),
                core_nestjs_1.RuckenCoreModule.forRoot(options),
                auth_nestjs_1.RuckenAuthModule.forRoot(options),
                custom_lib_nestjs_1.CustomOrgCustomLibNestjsModule.forRoot(options),
                typeorm_1.TypeOrmModule.forRoot()
            ],
            providers: [
                ...options.providers,
                ...(options.passportProviders ? options.passportProviders : [])
            ]
        };
    }
};
AppModule = AppModule_1 = tslib_1.__decorate([
    common_1.Module({})
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map