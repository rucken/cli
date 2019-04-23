"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const permission_dto_1 = require("../dto/permission.dto");
class GroupWithPermissionsDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], GroupWithPermissionsDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(100),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], GroupWithPermissionsDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(255),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], GroupWithPermissionsDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => permission_dto_1.PermissionDto),
    swagger_1.ApiModelProperty({ type: permission_dto_1.PermissionDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], GroupWithPermissionsDto.prototype, "permissions", void 0);
exports.GroupWithPermissionsDto = GroupWithPermissionsDto;
//# sourceMappingURL=group-with-permissions.dto.js.map