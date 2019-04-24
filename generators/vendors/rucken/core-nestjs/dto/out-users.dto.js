"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const meta_dto_1 = require("../dto/meta.dto");
const user_dto_1 = require("../dto/user.dto");
class OutUsersDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => user_dto_1.UserDto),
    swagger_1.ApiModelProperty({ type: user_dto_1.UserDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], OutUsersDto.prototype, "users", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => meta_dto_1.MetaDto),
    swagger_1.ApiModelProperty({ type: meta_dto_1.MetaDto }),
    tslib_1.__metadata("design:type", meta_dto_1.MetaDto)
], OutUsersDto.prototype, "meta", void 0);
exports.OutUsersDto = OutUsersDto;
//# sourceMappingURL=out-users.dto.js.map