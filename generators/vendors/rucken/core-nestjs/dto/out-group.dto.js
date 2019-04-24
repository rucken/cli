"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const group_with_permissions_dto_1 = require("../dto/group-with-permissions.dto");
class OutGroupDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => group_with_permissions_dto_1.GroupWithPermissionsDto),
    swagger_1.ApiModelProperty({ type: group_with_permissions_dto_1.GroupWithPermissionsDto }),
    tslib_1.__metadata("design:type", group_with_permissions_dto_1.GroupWithPermissionsDto)
], OutGroupDto.prototype, "group", void 0);
exports.OutGroupDto = OutGroupDto;
//# sourceMappingURL=out-group.dto.js.map