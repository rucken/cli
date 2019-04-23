"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
let OauthTokensAccesstoken = class OauthTokensAccesstoken {
    constructor() {
        this.id = undefined;
        this.provider = undefined;
        this.providerClientId = undefined;
        this.grantedAt = undefined;
        this.accessToken = undefined;
        this.refreshToken = undefined;
        this.expiresAt = undefined;
        this.tokenType = undefined;
        this.scope = undefined;
        this.user = undefined;
    }
    doBeforeInsertion() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new core_nestjs_1.CustomValidationError(errors);
        }
    }
    doBeforeUpdate() {
        const errors = class_validator_1.validateSync(this, { validationError: { target: false } });
        if (errors.length > 0) {
            throw new core_nestjs_1.CustomValidationError(errors);
        }
    }
};
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    tslib_1.__metadata("design:type", Number)
], OauthTokensAccesstoken.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 20 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(20),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "provider", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'provider_client_id', length: 200 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(200),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "providerClientId", void 0);
tslib_1.__decorate([
    typeorm_1.CreateDateColumn({ name: 'granted_at' }),
    tslib_1.__metadata("design:type", Date)
], OauthTokensAccesstoken.prototype, "grantedAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'access_token', length: 500 }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.MaxLength(500),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "accessToken", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'refresh_token', length: 200, nullable: true }),
    class_validator_1.MaxLength(200),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "refreshToken", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ type: Date, name: 'expires_at', nullable: true }),
    tslib_1.__metadata("design:type", Date)
], OauthTokensAccesstoken.prototype, "expiresAt", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ name: 'token_type', length: 200, nullable: true }),
    class_validator_1.MaxLength(200),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "tokenType", void 0);
tslib_1.__decorate([
    typeorm_1.Column({ length: 512, nullable: true }),
    class_validator_1.MaxLength(512),
    class_validator_1.IsOptional(),
    tslib_1.__metadata("design:type", String)
], OauthTokensAccesstoken.prototype, "scope", void 0);
tslib_1.__decorate([
    typeorm_1.ManyToOne(type => core_nestjs_1.User, { eager: true }),
    class_validator_1.IsNotEmpty(),
    typeorm_1.JoinColumn({ name: 'user_id' }),
    tslib_1.__metadata("design:type", core_nestjs_1.User)
], OauthTokensAccesstoken.prototype, "user", void 0);
tslib_1.__decorate([
    typeorm_1.BeforeInsert(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OauthTokensAccesstoken.prototype, "doBeforeInsertion", null);
tslib_1.__decorate([
    typeorm_1.BeforeUpdate(),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], OauthTokensAccesstoken.prototype, "doBeforeUpdate", null);
OauthTokensAccesstoken = tslib_1.__decorate([
    typeorm_1.Entity({ name: 'oauth_tokens_accesstokens' })
], OauthTokensAccesstoken);
exports.OauthTokensAccesstoken = OauthTokensAccesstoken;
//# sourceMappingURL=oauth-tokens-accesstoken.entity.js.map