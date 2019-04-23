"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const group_with_permissions_dto_1 = require("../dto/group-with-permissions.dto");
const meta_dto_1 = require("../dto/meta.dto");
class OutGroupsDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => group_with_permissions_dto_1.GroupWithPermissionsDto),
    swagger_1.ApiModelProperty({ type: group_with_permissions_dto_1.GroupWithPermissionsDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], OutGroupsDto.prototype, "groups", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => meta_dto_1.MetaDto),
    swagger_1.ApiModelProperty({ type: meta_dto_1.MetaDto }),
    tslib_1.__metadata("design:type", meta_dto_1.MetaDto)
], OutGroupsDto.prototype, "meta", void 0);
exports.OutGroupsDto = OutGroupsDto;
//# sourceMappingURL=out-groups.dto.js.map