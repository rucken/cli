"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class GroupDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], GroupDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(100),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], GroupDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(255),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], GroupDto.prototype, "title", void 0);
exports.GroupDto = GroupDto;
//# sourceMappingURL=group.dto.js.map