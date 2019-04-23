"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var RuckenCoreModule_1;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const controllers_1 = require("./controllers");
const entities_1 = require("./entities");
const services_1 = require("./services");
let RuckenCoreModule = RuckenCoreModule_1 = class RuckenCoreModule {
    static forFeature(options) {
        const providers = options && options.providers ? options.providers : [];
        return {
            module: RuckenCoreModule_1,
            imports: [typeorm_1.TypeOrmModule.forFeature([...entities_1.CORE_ENTITIES])],
            providers: [...providers, ...services_1.CORE_SERVICES],
            exports: [...services_1.CORE_SERVICES]
        };
    }
    static forRoot(options) {
        const providers = options && options.providers ? options.providers : [];
        return {
            module: RuckenCoreModule_1,
            imports: [typeorm_1.TypeOrmModule.forFeature([...entities_1.CORE_ENTITIES])],
            controllers: [...controllers_1.CORE_CONTROLLERS],
            providers: [...providers, ...services_1.CORE_SERVICES],
            exports: [...services_1.CORE_SERVICES]
        };
    }
};
RuckenCoreModule = RuckenCoreModule_1 = tslib_1.__decorate([
    common_1.Module({})
], RuckenCoreModule);
exports.RuckenCoreModule = RuckenCoreModule;
//# sourceMappingURL=core.module.js.map