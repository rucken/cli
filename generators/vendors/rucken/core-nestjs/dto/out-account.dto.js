"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const account_dto_1 = require("../dto/account.dto");
class OutAccountDto {
}
tslib_1.__decorate([
    class_transformer_1.Type(() => account_dto_1.AccountDto),
    swagger_1.ApiModelProperty({ type: account_dto_1.AccountDto }),
    tslib_1.__metadata("design:type", account_dto_1.AccountDto)
], OutAccountDto.prototype, "user", void 0);
exports.OutAccountDto = OutAccountDto;
//# sourceMappingURL=out-account.dto.js.map