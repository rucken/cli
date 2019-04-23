"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_local_1 = require("passport-local");
const auth_service_1 = require("../services/auth.service");
let LocalStrategySignIn = class LocalStrategySignIn extends passport_1.PassportStrategy(passport_local_1.Strategy, 'signin') {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        });
        this.authService = authService;
    }
    validate(req, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const { user } = yield this.authService.signIn({ email, password });
            return user;
        });
    }
};
LocalStrategySignIn = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], LocalStrategySignIn);
exports.LocalStrategySignIn = LocalStrategySignIn;
let LocalStrategySignUp = class LocalStrategySignUp extends passport_1.PassportStrategy(passport_local_1.Strategy, 'signup') {
    constructor(authService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        });
        this.authService = authService;
    }
    validate(req, email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (req.user) {
                return req.user;
            }
            const { user } = yield this.authService.signUp({
                email,
                password,
                username: req.body.username
            });
            return user;
        });
    }
};
LocalStrategySignUp = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__metadata("design:paramtypes", [auth_service_1.AuthService])
], LocalStrategySignUp);
exports.LocalStrategySignUp = LocalStrategySignUp;
//# sourceMappingURL=local.strategy.js.map