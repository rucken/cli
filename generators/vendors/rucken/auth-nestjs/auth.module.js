"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var RuckenAuthModule_1;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const core_nestjs_1 = require("@rucken/core-nestjs");
const passport_1 = require("passport");
const controllers_1 = require("./controllers");
const entities_1 = require("./entities");
const services_1 = require("./services");
let RuckenAuthModule = RuckenAuthModule_1 = class RuckenAuthModule {
    static forFeature(options) {
        const providers = options && options.providers ? options.providers : [];
        return {
            module: RuckenAuthModule_1,
            imports: [common_1.HttpModule, core_nestjs_1.RuckenCoreModule.forFeature(options), typeorm_1.TypeOrmModule.forFeature([...entities_1.AUTH_ENTITIES])],
            providers: [...providers, ...services_1.AUTH_SERVICES],
            exports: [...services_1.AUTH_SERVICES]
        };
    }
    static forRoot(options) {
        const providers = options && options.providers ? options.providers : [];
        return {
            module: RuckenAuthModule_1,
            imports: [common_1.HttpModule, core_nestjs_1.RuckenCoreModule.forFeature(options), typeorm_1.TypeOrmModule.forFeature([...entities_1.AUTH_ENTITIES])],
            controllers: [...controllers_1.AUTH_CONTROLLERS],
            providers: [...providers, ...services_1.AUTH_SERVICES],
            exports: [...services_1.AUTH_SERVICES]
        };
    }
    configure(consumer) {
        consumer.apply(passport_1.authenticate('signup', { session: false, passReqToCallback: true })).forRoutes('api/auth/signup');
        consumer.apply(passport_1.authenticate('signin', { session: false, passReqToCallback: true })).forRoutes('api/auth/signin');
        consumer
            .apply(passport_1.authenticate('facebook', { session: false, passReqToCallback: true }))
            .forRoutes('api/auth/facebook/token');
        consumer
            .apply(passport_1.authenticate('google', { session: false, passReqToCallback: true }))
            .forRoutes('api/auth/google-plus/token');
    }
};
RuckenAuthModule = RuckenAuthModule_1 = tslib_1.__decorate([
    common_1.Module({})
], RuckenAuthModule);
exports.RuckenAuthModule = RuckenAuthModule;
//# sourceMappingURL=auth.module.js.map