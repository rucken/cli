import { Repository } from 'typeorm';
import { OauthTokensAccesstoken } from '../entities/oauth-tokens-accesstoken.entity';
import { ICoreConfig } from '@rucken/core-nestjs';
export declare class OauthTokensAccesstokensService {
    private readonly coreConfig;
    private readonly repository;
    constructor(coreConfig: ICoreConfig, repository: Repository<OauthTokensAccesstoken>);
    create(options: {
        item: OauthTokensAccesstoken;
    }): Promise<{
        oauthTokensAccesstoken: OauthTokensAccesstoken;
    }>;
    update(options: {
        id: number;
        item: OauthTokensAccesstoken;
    }): Promise<{
        oauthTokensAccesstoken: OauthTokensAccesstoken;
    }>;
    delete(options: {
        id: number;
    }): Promise<{
        oauthTokensAccesstoken: any;
    }>;
    findByProviderClientId(options: {
        id: number;
    }): Promise<{
        oauthTokensAccesstoken: OauthTokensAccesstoken;
    }>;
    findById(options: {
        id: number;
    }): Promise<{
        oauthTokensAccesstoken: OauthTokensAccesstoken;
    }>;
    findAll(options: {
        curPage: number;
        perPage: number;
        q?: string;
        sort?: string;
    }): Promise<{
        contentTypes: OauthTokensAccesstoken[];
        meta: {
            perPage: number;
            totalPages: number;
            totalResults: number;
            curPage: number;
        };
    }>;
}
