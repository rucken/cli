"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const content_type_dto_1 = require("../dto/content-type.dto");
class InPermissionDto {
}
tslib_1.__decorate([
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", Number)
], InPermissionDto.prototype, "id", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(100),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InPermissionDto.prototype, "name", void 0);
tslib_1.__decorate([
    class_validator_1.MaxLength(255),
    swagger_1.ApiModelProperty(),
    tslib_1.__metadata("design:type", String)
], InPermissionDto.prototype, "title", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => content_type_dto_1.ContentTypeDto),
    swagger_1.ApiModelProperty({ type: content_type_dto_1.ContentTypeDto }),
    tslib_1.__metadata("design:type", content_type_dto_1.ContentTypeDto)
], InPermissionDto.prototype, "contentType", void 0);
exports.InPermissionDto = InPermissionDto;
//# sourceMappingURL=in-permission.dto.js.map