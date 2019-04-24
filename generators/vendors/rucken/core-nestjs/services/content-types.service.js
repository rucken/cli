"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const content_type_entity_1 = require("../entities/content-type.entity");
let ContentTypesService = class ContentTypesService {
    constructor(repository) {
        this.repository = repository;
    }
    create(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                options.item = yield this.repository.save(options.item);
                return { contentType: options.item };
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
                return { contentType: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let item = yield this.repository.findOneOrFail(options.id, {
                    relations: ['permissions']
                });
                item.permissions = [];
                item = yield this.repository.save(item);
                yield this.repository.delete(options.id);
                return { contentType: null };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findById(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.repository.findOneOrFail(options.id, {
                    relations: ['permissions']
                });
                return { contentType: item };
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
                let qb = this.repository.createQueryBuilder('contentType');
                if (options.q) {
                    qb = qb.where('contentType.name like :q or contentType.title like :q or contentType.id = :id', {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                options.sort =
                    options.sort && new content_type_entity_1.ContentType().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
                const field = options.sort.replace('-', '');
                if (options.sort)
                    if (options.sort[0] === '-') {
                        qb = qb.orderBy('contentType.' + field, 'DESC');
                    }
                    else {
                        qb = qb.orderBy('contentType.' + field, 'ASC');
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
ContentTypesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(content_type_entity_1.ContentType)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], ContentTypesService);
exports.ContentTypesService = ContentTypesService;
//# sourceMappingURL=content-types.service.js.map