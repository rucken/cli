"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_transformer_1 = require("class-transformer");
const passport_jwt_1 = require("passport-jwt");
const token_service_1 = require("../services/token.service");
let JwtStrategy = class JwtStrategy extends passport_1.PassportStrategy(passport_jwt_1.Strategy, 'jwt') {
    constructor(tokenService, groupsService) {
        super({
            passReqToCallback: true,
            jwtFromRequest: req => {
                const token = this.tokenService.extractTokenFromRequest(req);
                return token;
            },
            secretOrKeyProvider: (req, token, done) => {
                const secretKey = this.tokenService.createSecretKey(class_transformer_1.plainToClass(core_nestjs_1.User, this.tokenService.decode(token)));
                done(null, secretKey);
            }
        });
        this.tokenService = tokenService;
        this.groupsService = groupsService;
    }
    validate(req, payload) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.groupsService.preloadAll();
            }
            catch (error) {
                throw new common_1.BadRequestException('Error in load groups');
            }
            try {
                const user = class_transformer_1.plainToClass(core_nestjs_1.User, payload);
                user.groups = user.groups.map(group => this.groupsService.getGroupByName({ name: group.name }));
                return user;
            }
            catch (error) {
                throw new common_1.UnauthorizedException();
            }
        });
    }
};
JwtStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [token_service_1.TokenService, core_nestjs_1.GroupsService])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;
//# sourceMappingURL=jwt.strategy.js.map