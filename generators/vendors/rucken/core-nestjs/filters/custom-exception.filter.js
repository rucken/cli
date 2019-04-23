"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var CustomExceptionFilter_1;
const common_1 = require("@nestjs/common");
const core_config_1 = require("../configs/core.config");
const custom_validation_error_1 = require("../exceptions/custom-validation.error");
const custom_error_1 = require("../exceptions/custom.error");
let CustomExceptionFilter = CustomExceptionFilter_1 = class CustomExceptionFilter {
    constructor(coreConfig) {
        this.coreConfig = coreConfig;
    }
    response(exception, host, data, status) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        common_1.Logger.error(JSON.stringify(exception), undefined, CustomExceptionFilter_1.name);
        if (request.originalUrl.indexOf('/api/') !== 0 && request.accepts('html') && this.coreConfig.indexFile) {
            response.sendFile(this.coreConfig.indexFile);
        }
        else {
            response.status(status ? status : common_1.HttpStatus.BAD_REQUEST).json(data);
        }
    }
    catch(exception, host) {
        const errors = {};
        if (exception instanceof custom_validation_error_1.CustomValidationError) {
            exception.errors.forEach((error) => {
                Object.keys(error.constraints).forEach((key) => {
                    if (!errors[error.property]) {
                        errors[error.property] = [];
                    }
                    errors[error.property].push(error.constraints[key]);
                });
            });
            this.response(exception, host, {
                validationErrors: errors
            });
        }
        if (exception instanceof custom_error_1.CustomError) {
            this.response(exception, host, {
                message: exception.message
            });
        }
        if (exception instanceof SyntaxError) {
            this.response(exception, host, {
                message: 'Syntax error'
            });
        }
        if (exception instanceof common_1.HttpException) {
            this.response(exception, host, {
                message: exception.message && exception.message.message ? exception.message.message : 'Http exception'
            }, exception.getStatus());
        }
    }
};
CustomExceptionFilter = CustomExceptionFilter_1 = tslib_1.__decorate([
    common_1.Catch(SyntaxError, custom_validation_error_1.CustomValidationError, custom_error_1.CustomError, common_1.HttpException),
    tslib_1.__param(0, common_1.Inject(core_config_1.CORE_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object])
], CustomExceptionFilter);
exports.CustomExceptionFilter = CustomExceptionFilter;
//# sourceMappingURL=custom-exception.filter.js.map