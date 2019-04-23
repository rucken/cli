"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class InGroupDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], InGroupDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(100),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InGroupDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(255),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InGroupDto.prototype, "title", void 0);
exports.InGroupDto = InGroupDto;
//# sourceMappingURL=in-group.dto.js.map