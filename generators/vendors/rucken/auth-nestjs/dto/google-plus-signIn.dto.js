"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GooglePlusSignInDto {
}
tslib_1.__decorate([
    class_validator_1.IsNotEmpty(),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], GooglePlusSignInDto.prototype, "code", void 0);
exports.GooglePlusSignInDto = GooglePlusSignInDto;
//# sourceMappingURL=google-plus-signIn.dto.js.map