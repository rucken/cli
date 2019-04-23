"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const jsonwebtoken_1 = require("jsonwebtoken");
const jwt_config_1 = require("../configs/jwt.config");
let TokenService = class TokenService {
    constructor(jwtConfig) {
        this.jwtConfig = jwtConfig;
    }
    create(user) {
        return jsonwebtoken_1.sign({
            id: user.id,
            isStaff: user.isStaff,
            isActive: user.isActive,
            isSuperuser: user.isSuperuser,
            groups: user.groups.map(group => {
                return { name: group.name };
            })
        }, this.createSecretKey(user), {
            expiresIn: this.jwtConfig.expirationDelta
        });
    }
    validate(token) {
        const data = this.decode(token);
        return jsonwebtoken_1.verify(this.removeHeaderPrefix(token), this.createSecretKey(data));
    }
    decode(token) {
        return jsonwebtoken_1.decode(this.removeHeaderPrefix(token));
    }
    removeHeaderPrefix(token) {
        return this.jwtConfig.authHeaderPrefix && token && token.split(this.jwtConfig.authHeaderPrefix + ' ').length > 1
            ? token.split(this.jwtConfig.authHeaderPrefix + ' ')[1]
            : token;
    }
    extractTokenFromRequest(request) {
        const authorizationHeader = request.headers.authorization ? String(request.headers.authorization) : null;
        const token = this.removeHeaderPrefix(authorizationHeader);
        return token;
    }
    createSecretKey(user) {
        return (this.jwtConfig.secretKey +
            (user
                ? '$' +
                    user.id +
                    '$' +
                    user.isStaff +
                    '$' +
                    user.isActive +
                    '$' +
                    user.isSuperuser +
                    (user.groups ? user.groups.map(group => '$' + group.name) : '')
                : ''));
    }
};
TokenService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(jwt_config_1.JWT_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map