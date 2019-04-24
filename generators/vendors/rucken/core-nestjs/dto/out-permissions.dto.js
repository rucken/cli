"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const meta_dto_1 = require("../dto/meta.dto");
const permission_dto_1 = require("../dto/permission.dto");
class OutPermissionsDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => permission_dto_1.PermissionDto),
    swagger_1.ApiModelProperty({ type: permission_dto_1.PermissionDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], OutPermissionsDto.prototype, "permissions", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => meta_dto_1.MetaDto),
    swagger_1.ApiModelProperty({ type: meta_dto_1.MetaDto }),
    tslib_1.__metadata("design:type", meta_dto_1.MetaDto)
], OutPermissionsDto.prototype, "meta", void 0);
exports.OutPermissionsDto = OutPermissionsDto;
//# sourceMappingURL=out-permissions.dto.js.map