"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const group_dto_1 = require("../dto/group.dto");
class InCreateUserDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], InCreateUserDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(128),
    swagger_1.ApiModelPropertyOptional(),
    tslib_1.__metadata("design:type", String)
], InCreateUserDto.prototype, "password", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: String }),
    tslib_1.__metadata("design:type", Date)
], InCreateUserDto.prototype, "lastLogin", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], InCreateUserDto.prototype, "isSuperuser", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(150),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InCreateUserDto.prototype, "username", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InCreateUserDto.prototype, "firstName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(30),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InCreateUserDto.prototype, "lastName", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(254),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InCreateUserDto.prototype, "email", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], InCreateUserDto.prototype, "isStaff", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Boolean }),
    tslib_1.__metadata("design:type", Boolean)
], InCreateUserDto.prototype, "isActive", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: String }),
    tslib_1.__metadata("design:type", Date)
], InCreateUserDto.prototype, "dateJoined", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelPropertyOptional({ type: String }),
    tslib_1.__metadata("design:type", Date)
], InCreateUserDto.prototype, "dateOfBirth", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => group_dto_1.GroupDto),
    swagger_1.ApiModelProperty({ type: group_dto_1.GroupDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], InCreateUserDto.prototype, "groups", void 0);
exports.InCreateUserDto = InCreateUserDto;
//# sourceMappingURL=in-create-user.dto.js.map