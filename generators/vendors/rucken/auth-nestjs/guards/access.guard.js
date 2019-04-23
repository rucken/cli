"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var AccessGuard_1;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const passport_1 = require("@nestjs/passport");
const core_nestjs_1 = require("@rucken/core-nestjs");
let AccessGuard = AccessGuard_1 = class AccessGuard extends passport_1.AuthGuard('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const _super = Object.create(null, {
            canActivate: { get: () => super.canActivate }
        });
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield _super.canActivate.call(this, context);
            }
            catch (error) {
                common_1.Logger.error('Error in canActivate', error.message, AccessGuard_1.name);
            }
            const roles = this.reflector.get('roles', context.getHandler());
            const permissions = this.reflector.get('permissions', context.getHandler());
            const request = context.switchToHttp().getRequest();
            const user = request.user;
            const hasRole = roles ? roles.filter(roleName => user && user instanceof core_nestjs_1.User && user[roleName]).length > 0 : null;
            const hasPermission = permissions ? user && user instanceof core_nestjs_1.User && user.checkPermissions(permissions) : null;
            return hasRole === true || hasPermission === true || (hasRole === null && hasPermission === null);
        });
    }
};
AccessGuard = AccessGuard_1 = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [core_1.Reflector])
], AccessGuard);
exports.AccessGuard = AccessGuard;
//# sourceMappingURL=access.guard.js.map