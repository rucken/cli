"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const passport_1 = require("passport");
const GoogleTokenStrategy = require("passport-google-plus-token");
const google_plus_config_1 = require("../configs/google-plus.config");
const sign_up_dto_1 = require("../dto/sign-up.dto");
const oauth_tokens_accesstoken_entity_1 = require("../entities/oauth-tokens-accesstoken.entity");
const auth_service_1 = require("../services/auth.service");
const oauth_tokens_accesstokens_service_1 = require("../services/oauth-tokens-accesstokens.service");
let GooglePlusStrategy = class GooglePlusStrategy {
    constructor(googlePlusConfig, oauthTokensAccesstokensService, authService) {
        this.googlePlusConfig = googlePlusConfig;
        this.oauthTokensAccesstokensService = oauthTokensAccesstokensService;
        this.authService = authService;
        this.init();
    }
    init() {
        passport_1.use('google', new GoogleTokenStrategy({
            clientID: this.googlePlusConfig.client_id,
            clientSecret: this.googlePlusConfig.client_secret
        }, (accessToken, refreshToken, profile, done) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!profile.id) {
                done(null, null);
            }
            try {
                try {
                    const { oauthTokensAccesstoken } = yield this.oauthTokensAccesstokensService.findByProviderClientId({
                        id: profile.id
                    });
                    const { user } = yield this.authService.info({
                        id: oauthTokensAccesstoken.user.id
                    });
                    done(null, user);
                }
                catch (err) {
                    const email = profile.emails && profile.emails.length && profile.emails[0].value
                        ? profile.emails[0].value
                        : `${profile.id}@google.com`;
                    const username = `google_${profile.id}`;
                    const firstName = profile.name ? profile.name.givenName : `google_${profile.id}`;
                    const lastName = profile.name ? profile.name.familyName : `google_${profile.id}`;
                    const password = `google_${profile.id}`;
                    const { user } = yield this.authService.signUp(class_transformer_1.plainToClass(sign_up_dto_1.SignUpDto, {
                        email,
                        username,
                        password,
                        firstName,
                        lastName
                    }));
                    const newOauthTokensAccesstoken = new oauth_tokens_accesstoken_entity_1.OauthTokensAccesstoken();
                    newOauthTokensAccesstoken.user = user;
                    newOauthTokensAccesstoken.providerClientId = profile.id;
                    newOauthTokensAccesstoken.provider = profile.provider;
                    newOauthTokensAccesstoken.accessToken = accessToken;
                    yield this.oauthTokensAccesstokensService.create({
                        item: newOauthTokensAccesstoken
                    });
                    done(null, user);
                }
            }
            catch (err) {
                done(err, null);
            }
        })));
    }
};
GooglePlusStrategy = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(google_plus_config_1.GOOGLE_PLUS_CONFIG_TOKEN)),
    tslib_1.__metadata("design:paramtypes", [Object, oauth_tokens_accesstokens_service_1.OauthTokensAccesstokensService,
        auth_service_1.AuthService])
], GooglePlusStrategy);
exports.GooglePlusStrategy = GooglePlusStrategy;
//# sourceMappingURL=google-plus.strategy.js.map