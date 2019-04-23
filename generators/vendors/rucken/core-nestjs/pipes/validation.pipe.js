"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const custom_validation_error_1 = require("../exceptions/custom-validation.error");
let ValidationPipe = class ValidationPipe {
    transform(value, metadata) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { metatype } = metadata;
            if (!metatype || !this.toValidate(metatype)) {
                return value;
            }
            const entity = class_transformer_1.plainToClass(metatype, value);
            const errors = yield class_validator_1.validate(entity, {
                validationError: { target: false }
            });
            if (errors.length > 0) {
                throw new custom_validation_error_1.CustomValidationError(errors);
            }
            return entity;
        });
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.find(type => metatype === type) && metatype;
    }
};
ValidationPipe = tslib_1.__decorate([
    common_1.Injectable()
], ValidationPipe);
exports.ValidationPipe = ValidationPipe;
//# sourceMappingURL=validation.pipe.js.map