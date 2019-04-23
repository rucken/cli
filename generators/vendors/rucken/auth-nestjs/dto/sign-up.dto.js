"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class SignUpDto {
    constructor() {
        this.firstName = undefined;
        this.lastName = undefined;
    }
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsEmail(),
    class_validator_1.MaxLength(254),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "email", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(150),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(128),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "password", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], SignUpDto.prototype, "lastName", void 0);
exports.SignUpDto = SignUpDto;
//# sourceMappingURL=sign-up.dto.js.map