"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class TokenDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty(),
    class_validator_1.IsNotEmpty(),
    tslib_1.__metadata("design:type", String)
], TokenDto.prototype, "token", void 0);
exports.TokenDto = TokenDto;
//# sourceMappingURL=token.dto.js.map