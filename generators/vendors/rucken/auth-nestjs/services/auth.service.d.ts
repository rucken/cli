import { HttpService } from '@nestjs/common';
import { GroupsService, User, UsersService, ICoreConfig } from '@rucken/core-nestjs';
import { RedirectUriDto } from '../dto/redirect-uri.dto';
import { SignInDto } from '../dto/sign-in.dto';
import { SignUpDto } from '../dto/sign-up.dto';
import { IFacebookConfig } from '../interfaces/facebook-config.interface';
import { IGooglePlusConfig } from '../interfaces/google-plus-config.interface';
export declare class AuthService {
    private readonly coreConfig;
    private readonly fbConfig;
    private readonly googlePlusConfig;
    private readonly httpService;
    private readonly usersService;
    private readonly groupsService;
    private localUri;
    constructor(coreConfig: ICoreConfig, fbConfig: IFacebookConfig, googlePlusConfig: IGooglePlusConfig, httpService: HttpService, usersService: UsersService, groupsService: GroupsService);
    info(options: {
        id: number;
    }): Promise<{
        user: User;
    }>;
    signIn(options: SignInDto): Promise<{
        user: User;
    }>;
    signUp(options: SignUpDto): Promise<{
        user: User;
    }>;
    requestFacebookRedirectUri(host?: string): Promise<RedirectUriDto>;
    facebookSignIn(code: string, host?: string): Promise<any>;
    requestGoogleRedirectUri(host?: string): Promise<RedirectUriDto | any>;
    googleSignIn(code: string, host?: string): Promise<any>;
}
