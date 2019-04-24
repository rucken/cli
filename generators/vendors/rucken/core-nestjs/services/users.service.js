"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../entities/user.entity");
let UsersService = class UsersService {
    constructor(repository) {
        this.repository = repository;
    }
    assertUsernameAndEmail(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (options.email) {
                let userOfEmail;
                try {
                    userOfEmail = yield this.findByEmail(options);
                }
                catch (error) {
                    userOfEmail = undefined;
                }
                if (userOfEmail && userOfEmail.user.id !== options.id) {
                    throw new common_1.ConflictException(`User with email "${options.email}" is exists`);
                }
            }
            if (options.username) {
                let userOfUsername;
                try {
                    userOfUsername = yield this.findByUserName(options);
                }
                catch (error) {
                    userOfUsername = undefined;
                }
                if (userOfUsername && userOfUsername.user.id !== options.id) {
                    throw new common_1.ConflictException(`User with username "${options.username}" is exists`);
                }
            }
        });
    }
    create(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.assertUsernameAndEmail({
                    id: options.item.id,
                    email: options.item.email,
                    username: options.item.username
                });
                options.item = yield this.repository.save(options.item);
                const { user } = yield this.findById({ id: options.item.id });
                return { user };
            }
            catch (error) {
                throw error;
            }
        });
    }
    update(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                yield this.assertUsernameAndEmail({
                    id: options.item.id,
                    email: options.item.email,
                    username: options.item.username
                });
                options.item.lastLogin = new Date();
                options.item.id = options.id;
                options.item = yield this.repository.save(options.item);
                const { user } = yield this.findById({ id: options.item.id });
                return { user };
            }
            catch (error) {
                throw error;
            }
        });
    }
    delete(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                let object = yield this.repository.findOneOrFail(options.id);
                object.groups = [];
                object = yield this.repository.save(object);
                yield this.repository.delete(options.id);
                return { user: null };
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
                    relations: ['groups', 'groups.permissions']
                });
                return { user: item };
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
                let qb = this.repository.createQueryBuilder('user');
                if (options.group) {
                    qb = qb.leftJoinAndSelect('user.groups', 'group').where('group.id = :group', { group: options.group });
                }
                else {
                    qb = qb.leftJoinAndSelect('user.groups', 'group');
                    qb = qb.leftJoinAndSelect('group.permissions', 'permission');
                    qb = qb.leftJoinAndSelect('permission.contentType', 'contentType');
                }
                if (options.q) {
                    qb = qb.where('user.first_name like :q or user.last_name like :q or user.username like :q or user.id = :id', {
                        q: `%${options.q}%`,
                        id: +options.q
                    });
                }
                options.sort = options.sort && new user_entity_1.User().hasOwnProperty(options.sort.replace('-', '')) ? options.sort : '-id';
                const field = options.sort.replace('-', '');
                if (options.sort) {
                    if (options.sort[0] === '-') {
                        qb = qb.orderBy('user.' + field, 'DESC');
                    }
                    else {
                        qb = qb.orderBy('user.' + field, 'ASC');
                    }
                }
                qb = qb.skip((options.curPage - 1) * options.perPage).take(options.perPage);
                objects = yield qb.getManyAndCount();
                return {
                    users: objects[0],
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
    findByEmail(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.repository.findOneOrFail({
                    where: {
                        email: options.email
                    },
                    relations: ['groups', 'groups.permissions']
                });
                return {
                    user: item
                };
            }
            catch (error) {
                throw new common_1.NotFoundException(`User with email "${options.email}" not founded`);
            }
        });
    }
    findByUserName(options) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            try {
                const item = yield this.repository.findOneOrFail({
                    where: {
                        username: options.username
                    },
                    relations: ['groups', 'groups.permissions']
                });
                return {
                    user: item
                };
            }
            catch (error) {
                throw new common_1.NotFoundException(`User with username "${options.username}" not founded`);
            }
        });
    }
};
UsersService = tslib_1.__decorate([
    common_1.Injectable(),
    tslib_1.__param(0, typeorm_1.InjectRepository(user_entity_1.User)),
    tslib_1.__metadata("design:paramtypes", [typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map