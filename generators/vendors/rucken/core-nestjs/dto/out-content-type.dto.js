"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const content_type_dto_1 = require("../dto/content-type.dto");
class OutContentTypeDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => content_type_dto_1.ContentTypeDto),
    swagger_1.ApiModelProperty({ type: content_type_dto_1.ContentTypeDto }),
    tslib_1.__metadata("design:type", content_type_dto_1.ContentTypeDto)
], OutContentTypeDto.prototype, "contentType", void 0);
exports.OutContentTypeDto = OutContentTypeDto;
//# sourceMappingURL=out-content-type.dto.js.map