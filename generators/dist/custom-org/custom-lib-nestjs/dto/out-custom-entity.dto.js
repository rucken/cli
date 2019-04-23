"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const custom_entity_dto_1 = require("./custom-entity.dto");
class OutCustomEntityDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => custom_entity_dto_1.CustomEntityDto),
    swagger_1.ApiModelProperty({ type: custom_entity_dto_1.CustomEntityDto }),
    tslib_1.__metadata("design:type", custom_entity_dto_1.CustomEntityDto)
], OutCustomEntityDto.prototype, "customEntity", void 0);
exports.OutCustomEntityDto = OutCustomEntityDto;
//# sourceMappingURL=out-custom-entity.dto.js.map