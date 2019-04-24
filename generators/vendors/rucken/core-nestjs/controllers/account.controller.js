"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const core_config_1 = require("../configs/core.config");
const permissions_decorator_1 = require("../decorators/permissions.decorator");
const roles_decorator_1 = require("../decorators/roles.decorator");
const in_account_dto_1 = require("../dto/in-account.dto");
const out_account_dto_1 = require("../dto/out-account.dto");
const user_entity_1 = require("../entities/user.entity");
const account_service_1 = require("../services/account.service");
let AccountController = class AccountController {
    constructor(coreConfig, accountService) {
        this.coreConfig = coreConfig;
        this.accountService = accountService;
    }
    update(req, accountDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.coreConfig.demo) {
                throw new common_1.MethodNotAllowedException('Not allowed in DEMO mode');
            }
            try {
                return class_transformer_1.plainToClass(out_account_dto_1.OutAccountDto, yield this.accountService.update({
                    id: req.user && req.user.id,
                    user: class_transformer_1.plainToClass(user_entity_1.User, accountDto)
                }));
            }
            catch (error) {
                throw error;
            }
        });
    }
};
tslib_1.__decorate([
    swagger_1.ApiBearerAuth(),
    roles_decorator_1.Roles('isActive'),
    permissions_decorator_1.Permissions('change_profile'),
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post('/update'),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: out_account_dto_1.OutAccountDto,
        description: ''
    }),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, in_account_dto_1.InAccountDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AccountController.prototype, "update", null);
AccountController = tslib_1.__decorate([
    swagger_1.ApiUseTags('account'),
    common_1.Controller('/api/account'),
    tslib_1.__param(0, common_1.Inject(core_config_1.CORE_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, account_service_1.AccountService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map