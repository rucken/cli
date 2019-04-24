"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const oauth_tokens_accesstoken_entity_1 = require("../entities/oauth-tokens-accesstoken.entity");
const core_nestjs_1 = require("@rucken/core-nestjs");
let OauthTokensAccesstokensService = class OauthTokensAccesstokensService {
    constructor(coreConfig, repository) {
        this.coreConfig = coreConfig;
        this.repository = repository;
    }
    create(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                options.item = yield this.repository.save(options.item);
                return { oauthTokensAccesstoken: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            options.item.id = options.id;
            try {
                options.item = yield this.repository.save(options.item);
                return { oauthTokensAccesstoken: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let item = yield this.repository.findOneOrFail(options.id);
                item = yield this.repository.save(item);
                yield this.repository.delete(options.id);
                return { oauthTokensAccesstoken: null };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findByProviderClientId(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.repository.findOneOrFail({
                    where: {
                        providerClientId: options.id
                    }
                });
                return { oauthTokensAccesstoken: item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findById(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.repository.findOneOrFail(options.id);
                return { oauthTokensAccesstoken: item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAll(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let objects;
                let qb = this.repository.createQueryBuilder('oauthTokensAccesstoken');
                if (options.q) {
                    qb = qb.where('oauthTokensAccesstoken.name like :q or oauthTokensAccesstoken.title like :q or oauthTokensAccesstoken.id = :id', {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                options.sort =
                    options.sort && new oauth_tokens_accesstoken_entity_1.OauthTokensAccesstoken().hasOwnProperty(options.sort.replace('-', ''))
                        ? options.sort
                        : '-id';
                const field = options.sort.replace('-', '');
                if (options.sort) {
                    if (options.sort[0] === '-') {
                        qb = qb.orderBy('oauthTokensAccesstoken.' + field, 'DESC');
                    }
                    else {
                        qb = qb.orderBy('oauthTokensAccesstoken.' + field, 'ASC');
                    }
                }
                qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
                objects = yield qb.getManyAndCount();
                return {
                    contentTypes: objects[0],
                    meta: {
                        perPage: options.perPage,
                        totalPages: options.perPage > objects[1] ? 1 : Math.ceil(objects[1] / options.perPage),
                        totalResults: objects[1],
                        curPage: options.curPage
                    }
                };
            }
            catch (error) {
                throw error;
            }
        });
    }
};
OauthTokensAccesstokensService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, common_1.Inject(core_nestjs_1.CORE_CONFIG_TOKEN)),
    tslib_1.__param(1, typeorm_1.InjectRepository(oauth_tokens_accesstoken_entity_1.OauthTokensAccesstoken)),
    tslib_1.__metadata("design:paramtypes", [Object, typeorm_2.Repository])
], OauthTokensAccesstokensService);
exports.OauthTokensAccesstokensService = OauthTokensAccesstokensService;
//# sourceMappingURL=oauth-tokens-accesstokens.service.js.map