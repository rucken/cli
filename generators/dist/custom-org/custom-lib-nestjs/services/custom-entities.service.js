"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const custom_entity_entity_1 = require("../entities/custom-entity.entity");
let CustomEntitiesService = class CustomEntitiesService {
    constructor(repository) {
        this.repository = repository;
    }
    create(options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                options.item = yield this.repository.save(options.item);
                return { customEntity: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            options.item.id = options.id;
            try {
                options.item = yield this.repository.save(options.item);
                return { customEntity: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.delete(options.id);
                return { customEntity: null };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findById(options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let object;
                let qb = this.repository.createQueryBuilder("customEntity");
                qb = qb.andWhere("customEntity.id = :id", {
                    id: +options.id
                });
                object = yield qb.getOne();
                if (!object) {
                    throw new common_1.NotFoundException();
                }
                return { customEntity: object };
            }
            catch (error) {
                throw error;
            }
        });
    }
    findAll(options, user) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let objects;
                let qb = this.repository.createQueryBuilder("customEntity");
                if (options.q) {
                    qb = qb.andWhere("(customEntity.title like :q or customEntity.name like :q or customEntity.id = :id)", {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                options.sort =
                    options.sort &&
                        new custom_entity_entity_1.CustomEntity().hasOwnProperty(options.sort.replace("-", ""))
                        ? options.sort
                        : "-id";
                const field = options.sort.replace("-", "");
                if (options.sort) {
                    if (options.sort[0] === "-") {
                        qb = qb.orderBy("customEntity." + field, "DESC");
                    }
                    else {
                        qb = qb.orderBy("customEntity." + field, "ASC");
                    }
                }
                qb = qb
                    .skip((options.curPage - 1) * options.perPage)
                    .take(options.perPage);
                objects = yield qb.getManyAndCount();
                return {
                    customEntities: objects[0],
                    meta: {
                        perPage: options.perPage,
                        totalPages: options.perPage > objects[1]
                            ? 1
                            : Math.ceil(objects[1] / options.perPage),
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
CustomEntitiesService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(custom_entity_entity_1.CustomEntity)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], CustomEntitiesService);
exports.CustomEntitiesService = CustomEntitiesService;
//# sourceMappingURL=custom-entities.service.js.map