import { IGooglePlusConfig } from '../interfaces/google-plus-config.interface';
import { AuthService } from '../services/auth.service';
import { OauthTokensAccesstokensService } from '../services/oauth-tokens-accesstokens.service';
export declare class GooglePlusStrategy {
    private readonly googlePlusConfig;
    private readonly oauthTokensAccesstokensService;
    private readonly authService;
    constructor(googlePlusConfig: IGooglePlusConfig, oauthTokensAccesstokensService: OauthTokensAccesstokensService, authService: AuthService);
    private init;
}
