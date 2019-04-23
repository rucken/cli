import { User } from '@rucken/core-nestjs';
export declare class OauthTokensAccesstoken {
    id: number;
    provider: string;
    providerClientId: string;
    grantedAt: Date;
    accessToken: string;
    refreshToken: string;
    expiresAt: Date;
    tokenType: string;
    scope: string;
    user: User;
    doBeforeInsertion(): void;
    doBeforeUpdate(): void;
}
