"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const users_service_1 = require("./users.service");
let AccountService = class AccountService {
    constructor(usersService) {
        this.usersService = usersService;
    }
    update(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.usersService.assertUsernameAndEmail({
                    id: options.id,
                    email: options.user.email,
                    username: options.user.username
                });
                let { user } = yield this.usersService.findById(options);
                user = class_transformer_1.plainToClassFromExist(user, {
                    email: options.user.email,
                    password: options.user.password,
                    username: options.user.username,
                    firstName: options.user.firstName,
                    lastName: options.user.lastName
                });
                yield user.setPassword(options.user.password);
                return yield this.usersService.update({ id: options.id, item: user });
            }
            catch (error) {
                throw error;
            }
        });
    }
};
AccountService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [users_service_1.UsersService])
], AccountService);
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map