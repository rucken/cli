"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const class_transformer_1 = require("class-transformer");
const typeorm_2 = require("typeorm");
const group_entity_1 = require("../entities/group.entity");
let GroupsService = class GroupsService {
    constructor(repository) {
        this.repository = repository;
    }
    create(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                options.item = yield this.repository.save(options.item);
                return { group: options.item };
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
                return { group: options.item };
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
                item.permissions = [];
                item = yield this.repository.save(item);
                yield this.repository.delete(options.id);
                return { group: null };
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
                return { group: item };
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
                let qb = this.repository.createQueryBuilder('group');
                qb = qb.leftJoinAndSelect('group.permissions', 'permission');
                qb = qb.leftJoinAndSelect('permission.contentType', 'contentType');
                if (options.q) {
                    qb = qb.where('group.title like :q or group.name like :q or group.id = :id', {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                options.sort = options.sort && new group_entity_1.Group().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
                const field = options.sort.replace('-', '');
                if (options.sort) {
                    if (options.sort[0] === '-') {
                        qb = qb.orderBy('group.' + field, 'DESC');
                    }
                    else {
                        qb = qb.orderBy('group.' + field, 'ASC');
                    }
                }
                qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
                objects = yield qb.getManyAndCount();
                return {
                    groups: objects[0],
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
    getGroupByName(options) {
        const groups = (this.items ? this.items : []).filter(group => group.name === options.name);
        if (groups.length) {
            return groups[0];
        }
        throw new common_1.NotFoundException(`Group with name "${options.name}" not exists`);
    }
    preloadAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.items) {
                try {
                    const groups = yield this.repository
                        .createQueryBuilder('group')
                        .leftJoinAndSelect('group.permissions', 'permission')
                        .getMany();
                    this.items = class_transformer_1.plainToClass(group_entity_1.Group, groups);
                }
                catch (error) {
                    throw error;
                }
            }
        });
    }
};
GroupsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(group_entity_1.Group)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], GroupsService);
exports.GroupsService = GroupsService;
//# sourceMappingURL=groups.service.js.map