"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const content_type_dto_1 = require("../dto/content-type.dto");
const meta_dto_1 = require("../dto/meta.dto");
class OutContentTypesDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => content_type_dto_1.ContentTypeDto),
    swagger_1.ApiModelProperty({ type: content_type_dto_1.ContentTypeDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], OutContentTypesDto.prototype, "contentTypes", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => meta_dto_1.MetaDto),
    swagger_1.ApiModelProperty({ type: meta_dto_1.MetaDto }),
    tslib_1.__metadata("design:type", meta_dto_1.MetaDto)
], OutContentTypesDto.prototype, "meta", void 0);
exports.OutContentTypesDto = OutContentTypesDto;
//# sourceMappingURL=out-content-types.dto.js.map