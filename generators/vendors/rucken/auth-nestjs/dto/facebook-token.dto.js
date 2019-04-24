"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class FacebookTokenDto {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], FacebookTokenDto.prototype, "access_token", void 0);
exports.FacebookTokenDto = FacebookTokenDto;
//# sourceMappingURL=facebook-token.dto.js.map