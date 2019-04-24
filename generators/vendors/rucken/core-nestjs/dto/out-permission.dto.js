"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const permission_dto_1 = require("../dto/permission.dto");
class OutPermissionDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => permission_dto_1.PermissionDto),
    swagger_1.ApiModelProperty({ type: permission_dto_1.PermissionDto }),
    tslib_1.__metadata("design:type", permission_dto_1.PermissionDto)
], OutPermissionDto.prototype, "permission", void 0);
exports.OutPermissionDto = OutPermissionDto;
//# sourceMappingURL=out-permission.dto.js.map