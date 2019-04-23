"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class InAccountDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], InAccountDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(254),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InAccountDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    class_validator_1.MaxLength(128),
    class_validator_1.IsOptional(),
    swagger_1.ApiModelPropertyOptional(),
    tslib_1.__metadata("design:type", String)
], InAccountDto.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(150),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InAccountDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InAccountDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InAccountDto.prototype, "lastName", void 0);
exports.InAccountDto = InAccountDto;
//# sourceMappingURL=in-account.dto.js.map