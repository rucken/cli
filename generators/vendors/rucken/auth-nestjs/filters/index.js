"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const custom_exception_filter_1 = require("../filters/custom-exception.filter");
exports.AUTH_APP_FILTERS = [{ provide: core_1.APP_FILTER, useClass: custom_exception_filter_1.CustomExceptionFilter, multi: true }];
//# sourceMappingURL=index.js.map