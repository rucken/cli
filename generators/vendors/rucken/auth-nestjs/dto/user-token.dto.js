"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const core_nestjs_1 = require("@rucken/core-nestjs");
class UserTokenDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UserTokenDto.prototype, "token", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => core_nestjs_1.AccountDto),
    swagger_1.ApiModelProperty({ type: core_nestjs_1.AccountDto }),
    tslib_1.__metadata("design:type", core_nestjs_1.AccountDto)
], UserTokenDto.prototype, "user", void 0);
exports.UserTokenDto = UserTokenDto;
//# sourceMappingURL=user-token.dto.js.map