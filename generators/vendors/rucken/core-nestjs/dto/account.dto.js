"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const group_with_permissions_dto_1 = require("../dto/group-with-permissions.dto");
const user_dto_1 = require("../dto/user.dto");
class AccountDto extends user_dto_1.UserDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => group_with_permissions_dto_1.GroupWithPermissionsDto),
    swagger_1.ApiModelProperty({ type: group_with_permissions_dto_1.GroupWithPermissionsDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], AccountDto.prototype, "groups", void 0);
exports.AccountDto = AccountDto;
//# sourceMappingURL=account.dto.js.map