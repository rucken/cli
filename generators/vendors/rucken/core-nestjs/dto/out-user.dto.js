"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const user_dto_1 = require("../dto/user.dto");
class OutUserDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => user_dto_1.UserDto),
    swagger_1.ApiModelProperty({ type: user_dto_1.UserDto }),
    tslib_1.__metadata("design:type", user_dto_1.UserDto)
], OutUserDto.prototype, "user", void 0);
exports.OutUserDto = OutUserDto;
//# sourceMappingURL=out-user.dto.js.map