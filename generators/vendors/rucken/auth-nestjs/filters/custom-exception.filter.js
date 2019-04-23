"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var CustomExceptionFilter_1;
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
let CustomExceptionFilter = CustomExceptionFilter_1 = class CustomExceptionFilter {
    response(exception, host, data, status) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        common_1.Logger.error(JSON.stringify(exception), undefined, CustomExceptionFilter_1.name);
        response.status(status ? status : common_1.HttpStatus.BAD_REQUEST).json(data);
    }
    catch(exception, host) {
        if (exception instanceof jsonwebtoken_1.JsonWebTokenError) {
            this.response(exception, host, {
                message: exception.message
            });
        }
    }
};
CustomExceptionFilter = CustomExceptionFilter_1 = tslib_1.__decorate([
    common_1.Catch(jsonwebtoken_1.JsonWebTokenError)
], CustomExceptionFilter);
exports.CustomExceptionFilter = CustomExceptionFilter;
//# sourceMappingURL=custom-exception.filter.js.map