"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const permission_entity_1 = require("../entities/permission.entity");
let PermissionsService = class PermissionsService {
    constructor(repository) {
        this.repository = repository;
    }
    create(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                options.item = yield this.repository.save(options.item);
                return { permission: options.item };
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
                return { permission: options.item };
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.repository.delete(options.id);
                return { permission: null };
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
                    relations: ['contentType']
                });
                return { permission: item };
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
                let qb = this.repository.createQueryBuilder('permission');
                qb = qb.leftJoinAndSelect('permission.contentType', 'contentType');
                if (options.group) {
                    qb = qb.leftJoin('permission.groups', 'group').where('group.id = :group', { group: options.group });
                }
                if (options.q) {
                    qb = qb.where('permission.name like :q or permission.title like :q or permission.id = :id', {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                if (options.contentType) {
                    qb = qb.where('contentType.id = :contentType', {
                        contentType: options.contentType
                    });
                }
                options.sort =
                    options.sort && new permission_entity_1.Permission().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
                const field = options.sort.replace('-', '');
                if (options.sort) {
                    if (options.sort[0] === '-') {
                        qb = qb.orderBy('permission.' + field, 'DESC');
                    }
                    else {
                        qb = qb.orderBy('permission.' + field, 'ASC');
                    }
                }
                qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
                objects = yield qb.getManyAndCount();
                return {
                    permissions: objects[0],
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
PermissionsService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(permission_entity_1.Permission)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], PermissionsService);
exports.PermissionsService = PermissionsService;
//# sourceMappingURL=permissions.service.js.map