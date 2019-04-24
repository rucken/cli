import { ICoreConfig } from '@rucken/core-nestjs';
import { FacebookSignInDto } from '../dto/facebook-signIn.dto';
import { FacebookTokenDto } from '../dto/facebook-token.dto';
import { GooglePlusSignInDto } from '../dto/google-plus-signIn.dto';
import { RedirectUriDto } from '../dto/redirect-uri.dto';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { TokenDto } from '../dto/token.dto';
import { UserTokenDto } from '../dto/user-token.dto';
import { AuthService } from '../services/auth.service';
import { TokenService } from '../services/token.service';
export declare class AuthController {
    private readonly coreConfig;
    private readonly authService;
    private readonly tokenService;
    constructor(coreConfig: ICoreConfig, authService: AuthService, tokenService: TokenService);
    requestJsonWebTokenAfterSignIn(req: any, signInDto: SignInDto): Promise<UserTokenDto>;
    requestJsonWebTokenAfterSignUp(req: any, signUpDto: SignUpDto): Promise<UserTokenDto>;
    requestJsonWebTokenAfterInfo(req: any, tokenDto: TokenDto): Promise<UserTokenDto>;
    requestFacebookRedirectUrl(req: any): Promise<RedirectUriDto>;
    facebookSignIn(req: any, facebookSignInDto: FacebookSignInDto): Promise<UserTokenDto>;
    requestJsonWebTokenAfterFacebookSignIn(req: any, facebookTokenDto: FacebookTokenDto): Promise<UserTokenDto>;
    requestGoogleRedirectUri(req: any): Promise<RedirectUriDto>;
    googleSignIn(req: any, googleSignInDto: GooglePlusSignInDto): Promise<any>;
    requestJsonWebTokenAfterGoogleSignIn(req: any): Promise<UserTokenDto>;
}
