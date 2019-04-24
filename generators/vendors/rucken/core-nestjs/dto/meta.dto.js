"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
class MetaDto {
}
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], MetaDto.prototype, "perPage", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], MetaDto.prototype, "totalPages", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], MetaDto.prototype, "totalResults", void 0);
tslib_1.__decorate([
    swagger_1.ApiModelProperty({ type: Number }),
    tslib_1.__metadata("design:type", Number)
], MetaDto.prototype, "curPage", void 0);
exports.MetaDto = MetaDto;
//# sourceMappingURL=meta.dto.js.map