"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
var AuthService_1;
const common_1 = require("@nestjs/common");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_transformer_1 = require("class-transformer");
const querystring_1 = require("querystring");
const operators_1 = require("rxjs/operators");
const facebook_config_1 = require("../configs/facebook.config");
const google_plus_config_1 = require("../configs/google-plus.config");
let AuthService = AuthService_1 = class AuthService {
    constructor(coreConfig, fbConfig, googlePlusConfig, httpService, usersService, groupsService) {
        this.coreConfig = coreConfig;
        this.fbConfig = fbConfig;
        this.googlePlusConfig = googlePlusConfig;
        this.httpService = httpService;
        this.usersService = usersService;
        this.groupsService = groupsService;
        if (this.coreConfig.port) {
            this.localUri = `http://${this.coreConfig.domain}:${this.coreConfig.port}`;
        }
        else {
            this.localUri = `http://${this.coreConfig.domain}`;
        }
    }
    info(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.usersService.findById(options);
            }
            catch (error) {
                throw error;
            }
        });
    }
    signIn(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const { user } = yield this.usersService.findByEmail(options);
                if (!(yield user.validatePassword(options.password))) {
                    throw new core_nestjs_1.CustomError('Wrong password');
                }
                return yield this.usersService.update({ id: user.id, item: user });
            }
            catch (error) {
                throw error;
            }
        });
    }
    signUp(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.groupsService.preloadAll();
            }
            catch (error) {
                throw new common_1.BadRequestException('Error in load groups');
            }
            try {
                yield this.usersService.assertUsernameAndEmail({
                    email: options.email,
                    username: options.username
                });
            }
            catch (error) {
                throw error;
            }
            const group = this.groupsService.getGroupByName({ name: 'user' });
            const newUser = yield class_transformer_1.plainToClass(core_nestjs_1.User, options).setPassword(options.password);
            newUser.groups = [group];
            return this.usersService.create({ item: newUser });
        });
    }
    requestFacebookRedirectUri(host) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                `client_id=${this.fbConfig.client_id}`,
                `redirect_uri=${this.fbConfig.oauth_redirect_uri}`,
                `state=${this.fbConfig.state}`
            ];
            const redirect_uri = `${this.fbConfig.login_dialog_uri}?${queryParams.join('&')}`.replace('{host}', host);
            return {
                redirect_uri
            };
        });
    }
    facebookSignIn(code, host) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                `client_id=${this.fbConfig.client_id}`,
                `redirect_uri=${this.fbConfig.oauth_redirect_uri}`,
                `client_secret=${this.fbConfig.client_secret}`,
                `code=${code}`
            ];
            const uri = `${this.fbConfig.access_token_uri}?${queryParams.join('&')}`.replace('{host}', host);
            try {
                const response = yield this.httpService
                    .get(uri)
                    .pipe(operators_1.map(res => res.data))
                    .toPromise();
                if (response.error) {
                    common_1.Logger.error(JSON.stringify(response), undefined, AuthService_1.name);
                    throw new common_1.BadRequestException(response.error.message);
                }
                const access_token = response.access_token;
                const uriToken = `${this.localUri}/api/auth/facebook/token`;
                const profileResponse = yield this.httpService
                    .post(uriToken, querystring_1.stringify({ access_token }), {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .pipe(operators_1.map(res => res.data))
                    .toPromise();
                if (profileResponse.error) {
                    common_1.Logger.error(JSON.stringify(profileResponse), undefined, AuthService_1.name);
                    throw new common_1.BadRequestException(profileResponse.error.message);
                }
                return profileResponse;
            }
            catch (error) {
                common_1.Logger.error(JSON.stringify(error && error.response ? error.response.data : error.message), undefined, AuthService_1.name);
                throw new common_1.BadRequestException(error && error.response && error.response.data && error.response.data.error
                    ? error.response.data.error.message
                    : error.message);
            }
        });
    }
    requestGoogleRedirectUri(host) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const queryParams = [
                `client_id=${this.googlePlusConfig.client_id}`,
                `redirect_uri=${this.googlePlusConfig.oauth_redirect_uri}`,
                `response_type=${this.googlePlusConfig.response_type}`,
                `scope=${this.googlePlusConfig.scopes.join(' ')}`
            ];
            const redirect_uri = `${this.googlePlusConfig.login_dialog_uri}?${queryParams.join('&')}`.replace('{host}', host);
            return {
                redirect_uri
            };
        });
    }
    googleSignIn(code, host) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const formData = {
                code,
                client_id: this.googlePlusConfig.client_id,
                client_secret: this.googlePlusConfig.client_secret,
                redirect_uri: this.googlePlusConfig.oauth_redirect_uri.replace('{host}', host),
                grant_type: this.googlePlusConfig.grant_type
            };
            const uri = this.googlePlusConfig.access_token_uri.replace('{host}', host);
            try {
                const response = yield this.httpService
                    .post(uri, querystring_1.stringify(formData), {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .pipe(operators_1.map(res => res.data))
                    .toPromise();
                if (response.error) {
                    common_1.Logger.error(JSON.stringify(response), undefined, AuthService_1.name);
                    throw new common_1.BadRequestException(response.error_description);
                }
                const access_token = response.access_token;
                const uriToken = `${this.localUri}/api/auth/google-plus/token`;
                const profileResponse = yield this.httpService
                    .post(uriToken, querystring_1.stringify({ access_token }), {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
                })
                    .pipe(operators_1.map(res => res.data))
                    .toPromise();
                if (profileResponse.error) {
                    common_1.Logger.error(JSON.stringify(profileResponse), undefined, AuthService_1.name);
                    throw new common_1.BadRequestException(profileResponse.error_description);
                }
                return profileResponse;
            }
            catch (error) {
                common_1.Logger.error(JSON.stringify(error && error.response ? error.response.data : error.message), undefined, AuthService_1.name);
                throw new common_1.BadRequestException(error && error.response && error.response.data ? error.response.data.error_description : error.message);
            }
        });
    }
};
AuthService = AuthService_1 = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(core_nestjs_1.CORE_CONFIG_TOKEN)),
    tslib_1.__param(1, common_1.Inject(facebook_config_1.FACEBOOK_CONFIG_TOKEN)),
    tslib_1.__param(2, common_1.Inject(google_plus_config_1.GOOGLE_PLUS_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, common_1.HttpService,
        core_nestjs_1.UsersService,
        core_nestjs_1.GroupsService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map