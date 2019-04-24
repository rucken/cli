"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const custom_entity_dto_1 = require("./custom-entity.dto");
const core_nestjs_1 = require("@rucken/core-nestjs");
class OutCustomEntitiesDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => custom_entity_dto_1.CustomEntityDto),
    swagger_1.ApiModelProperty({ type: custom_entity_dto_1.CustomEntityDto, isArray: true }),
    tslib_1.__metadata("design:type", Array)
], OutCustomEntitiesDto.prototype, "customEntities", void 0);
tslib_1.__decorate([
    class_transformer_1.Type(() => core_nestjs_1.MetaDto),
    swagger_1.ApiModelProperty({ type: core_nestjs_1.MetaDto }),
    tslib_1.__metadata("design:type", core_nestjs_1.MetaDto)
], OutCustomEntitiesDto.prototype, "meta", void 0);
exports.OutCustomEntitiesDto = OutCustomEntitiesDto;
//# sourceMappingURL=out-custom-entities.dto.js.map