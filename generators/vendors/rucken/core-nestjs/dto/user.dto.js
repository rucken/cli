"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const group_dto_1 = require("../dto/group.dto");
class UserDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], UserDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_transformer_1.Exclude(),
    swagger_1.ApiModelPropertyOptional(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "password", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: String }),
    tslib_1.__metadata("design:type", Date)
], UserDto.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UserDto.prototype, "isSuperuser", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(150),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(254),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], UserDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UserDto.prototype, "isStaff", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], UserDto.prototype, "isActive", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    tslib_1.__metadata("design:type", Date)
], UserDto.prototype, "dateJoined", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: String }),
    tslib_1.__metadata("design:type", Date)
], UserDto.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => group_dto_1.GroupDto),
    swagger_1.ApiModelProperty({ type: group_dto_1.GroupDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], UserDto.prototype, "groups", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map