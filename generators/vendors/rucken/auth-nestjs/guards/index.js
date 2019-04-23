"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const access_guard_1 = require("./access.guard");
exports.AUTH_APP_GUARDS = [{ provide: core_1.APP_GUARD, useClass: access_guard_1.AccessGuard, multi: true }];
//# sourceMappingURL=index.js.map