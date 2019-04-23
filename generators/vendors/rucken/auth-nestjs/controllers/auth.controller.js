"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_transformer_1 = require("class-transformer");
const jsonwebtoken_1 = require("jsonwebtoken");
const facebook_signIn_dto_1 = require("../dto/facebook-signIn.dto");
const facebook_token_dto_1 = require("../dto/facebook-token.dto");
const google_plus_signIn_dto_1 = require("../dto/google-plus-signIn.dto");
const sign_in_dto_1 = require("../dto/sign-in.dto");
const sign_up_dto_1 = require("../dto/sign-up.dto");
const token_dto_1 = require("../dto/token.dto");
const user_token_dto_1 = require("../dto/user-token.dto");
const auth_service_1 = require("../services/auth.service");
const token_service_1 = require("../services/token.service");
let AuthController = class AuthController {
    constructor(coreConfig, authService, tokenService) {
        this.coreConfig = coreConfig;
        this.authService = authService;
        this.tokenService = tokenService;
    }
    requestJsonWebTokenAfterSignIn(req, signInDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenService.create(req.user);
            return class_transformer_1.plainToClass(user_token_dto_1.UserTokenDto, { user: req.user, token });
        });
    }
    requestJsonWebTokenAfterSignUp(req, signUpDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenService.create(req.user);
            return class_transformer_1.plainToClass(user_token_dto_1.UserTokenDto, { user: req.user, token });
        });
    }
    requestJsonWebTokenAfterInfo(req, tokenDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const validateTokenResult = yield this.tokenService.validate(tokenDto.token);
                if (validateTokenResult) {
                    const jwtPayload = yield this.tokenService.decode(tokenDto.token);
                    const { user } = yield this.authService.info({ id: jwtPayload.id });
                    const token = yield this.tokenService.create(user);
                    return class_transformer_1.plainToClass(user_token_dto_1.UserTokenDto, { user, token });
                }
                else {
                    throw new jsonwebtoken_1.JsonWebTokenError('invalid token');
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    requestFacebookRedirectUrl(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.requestFacebookRedirectUri(req.get('origin') || this.coreConfig.protocol + '://' + req.get('host'));
        });
    }
    facebookSignIn(req, facebookSignInDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.facebookSignIn(facebookSignInDto.code, req.get('origin') || this.coreConfig.protocol + '://' + req.get('host'));
        });
    }
    requestJsonWebTokenAfterFacebookSignIn(req, facebookTokenDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenService.create(req.user);
            return class_transformer_1.plainToClass(user_token_dto_1.UserTokenDto, { user: req.user, token });
        });
    }
    requestGoogleRedirectUri(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.requestGoogleRedirectUri(req.get('origin') || this.coreConfig.protocol + '://' + req.get('host'));
        });
    }
    googleSignIn(req, googleSignInDto) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.authService.googleSignIn(googleSignInDto.code, req.get('origin') || this.coreConfig.protocol + '://' + req.get('host'));
        });
    }
    requestJsonWebTokenAfterGoogleSignIn(req) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const token = yield this.tokenService.create(req.user);
            return class_transformer_1.plainToClass(user_token_dto_1.UserTokenDto, { user: req.user, token });
        });
    }
};
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post('signin'),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: user_token_dto_1.UserTokenDto,
        description: 'API View that checks the veracity of a token, returning the token if it is valid.'
    }),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, sign_in_dto_1.SignInDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestJsonWebTokenAfterSignIn", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.CREATED),
    common_1.Post('signup'),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: user_token_dto_1.UserTokenDto,
        description: `API View that receives a POST with a user's username and password.
        Returns a JSON Web Token that can be used for authenticated requests.`
    }),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, sign_up_dto_1.SignUpDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestJsonWebTokenAfterSignUp", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    common_1.Post('info'),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        type: user_token_dto_1.UserTokenDto,
        description: 'API View that checks the veracity of a token, returning the token if it is valid.'
    }),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, token_dto_1.TokenDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestJsonWebTokenAfterInfo", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'facebook/uri'
    }),
    common_1.Get('facebook/uri'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestFacebookRedirectUrl", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'facebook/signin'
    }),
    common_1.Post('facebook/signin'),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, facebook_signIn_dto_1.FacebookSignInDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "facebookSignIn", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'facebook/token'
    }),
    common_1.Post('facebook/token'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, facebook_token_dto_1.FacebookTokenDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestJsonWebTokenAfterFacebookSignIn", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'google-plus/uri'
    }),
    common_1.Get('google-plus/uri'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestGoogleRedirectUri", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'google-plus/signin'
    }),
    common_1.Post('google-plus/signin'),
    tslib_1.__param(0, common_1.Req()), tslib_1.__param(1, common_1.Body()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, google_plus_signIn_dto_1.GooglePlusSignInDto]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "googleSignIn", null);
tslib_1.__decorate([
    common_1.HttpCode(common_1.HttpStatus.OK),
    swagger_1.ApiResponse({
        status: common_1.HttpStatus.OK,
        description: 'google-plus/token'
    }),
    common_1.Post('google-plus/token'),
    tslib_1.__param(0, common_1.Req()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], AuthController.prototype, "requestJsonWebTokenAfterGoogleSignIn", null);
AuthController = tslib_1.__decorate([
    swagger_1.ApiUseTags('auth'),
    common_1.Controller('/api/auth'),
    tslib_1.__param(0, common_1.Inject(core_nestjs_1.CORE_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, auth_service_1.AuthService,
        token_service_1.TokenService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map