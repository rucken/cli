import { IFacebookConfig } from '../interfaces/facebook-config.interface';
import { AuthService } from '../services/auth.service';
import { OauthTokensAccesstokensService } from '../services/oauth-tokens-accesstokens.service';
export declare class FacebookStrategy {
    private readonly fbConfig;
    private readonly oauthTokensAccesstokensService;
    private readonly authService;
    constructor(fbConfig: IFacebookConfig, oauthTokensAccesstokensService: OauthTokensAccesstokensService, authService: AuthService);
    private init;
}
