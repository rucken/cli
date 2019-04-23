"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const content_type_entity_1 = require("../migrations_entities/1524199022084/content-type.entity");
const group_entity_1 = require("../migrations_entities/1524199022084/group.entity");
const permission_entity_1 = require("../migrations_entities/1524199022084/permission.entity");
const user_entity_1 = require("../migrations_entities/1524199022084/user.entity");
class FillData1524199022084 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ctPermission = yield queryRunner.manager
                .getRepository(content_type_entity_1.ContentType1524199022084)
                .save(class_transformer_1.plainToClass(content_type_entity_1.ContentType1524199022084, { name: 'permission', title: 'Permission' }));
            const ctGroup = yield queryRunner.manager
                .getRepository(content_type_entity_1.ContentType1524199022084)
                .save(class_transformer_1.plainToClass(content_type_entity_1.ContentType1524199022084, { name: 'group', title: 'Group' }));
            const ctContentTtype = yield queryRunner.manager
                .getRepository(content_type_entity_1.ContentType1524199022084)
                .save(class_transformer_1.plainToClass(content_type_entity_1.ContentType1524199022084, {
                name: 'content-type',
                title: 'Content type'
            }));
            const ctUser = yield queryRunner.manager
                .getRepository(content_type_entity_1.ContentType1524199022084)
                .save(class_transformer_1.plainToClass(content_type_entity_1.ContentType1524199022084, { name: 'user', title: 'User' }));
            const pPermissions = yield queryRunner.manager.getRepository(permission_entity_1.Permission1524199022084).save(class_transformer_1.plainToClass(permission_entity_1.Permission1524199022084, [
                {
                    title: 'Can add permission',
                    name: 'add_permission',
                    contentType: ctPermission
                },
                {
                    title: 'Can change permission',
                    name: 'change_permission',
                    contentType: ctPermission
                },
                {
                    title: 'Can delete permission',
                    name: 'delete_permission',
                    contentType: ctPermission
                },
                {
                    title: 'Can add group',
                    name: 'add_group',
                    contentType: ctGroup
                },
                {
                    title: 'Can change group',
                    name: 'change_group',
                    contentType: ctGroup
                },
                {
                    title: 'Can delete group',
                    name: 'delete_group',
                    contentType: ctGroup
                },
                {
                    title: 'Can add content type',
                    name: 'add_content-type',
                    contentType: ctContentTtype
                },
                {
                    title: 'Can change content type',
                    name: 'change_content-type',
                    contentType: ctContentTtype
                },
                {
                    title: 'Can delete content type',
                    name: 'delete_content-type',
                    contentType: ctContentTtype
                },
                {
                    title: 'Can add user',
                    name: 'add_user',
                    contentType: ctUser
                },
                {
                    title: 'Can change user',
                    name: 'change_user',
                    contentType: ctUser
                },
                {
                    title: 'Can delete user',
                    name: 'delete_user',
                    contentType: ctUser
                },
                {
                    title: 'Can read user',
                    name: 'read_user',
                    contentType: ctUser
                },
                {
                    title: 'Can read group',
                    name: 'read_group',
                    contentType: ctGroup
                },
                {
                    title: 'Can read permission',
                    name: 'read_permission',
                    contentType: ctPermission
                },
                {
                    title: 'Can read content type',
                    name: 'read_content-type',
                    contentType: ctContentTtype
                },
                {
                    title: 'Can change profile',
                    name: 'change_profile',
                    contentType: ctUser
                }
            ]));
            const gUser = yield queryRunner.manager.getRepository(group_entity_1.Group1524199022084).save(class_transformer_1.plainToClass(group_entity_1.Group1524199022084, {
                name: 'user',
                title: 'User',
                permissions: pPermissions.filter(item => item.name === 'change_profile')
            }));
            const gAdmin = yield queryRunner.manager.getRepository(group_entity_1.Group1524199022084).save(class_transformer_1.plainToClass(group_entity_1.Group1524199022084, {
                name: 'admin',
                title: 'Admin',
                permissions: pPermissions
            }));
            const tempUser = new user_entity_1.User1524199022084();
            const uUsers = yield queryRunner.manager.getRepository(user_entity_1.User1524199022084).save(class_transformer_1.plainToClass(user_entity_1.User1524199022084, [
                {
                    username: 'admin',
                    email: 'admin@admin.com',
                    password: yield tempUser.createPassword('12345678'),
                    firstName: 'AdminFirstName',
                    lastName: 'AdminLastName',
                    isSuperuser: false,
                    isStaff: false,
                    isActive: true,
                    groups: [gAdmin]
                },
                {
                    username: 'user1',
                    email: 'user1@user1.com',
                    password: yield tempUser.createPassword('12345678'),
                    firstName: 'User1FirstName',
                    lastName: 'User1LastName',
                    isSuperuser: false,
                    isStaff: false,
                    isActive: true,
                    groups: [gUser]
                },
                {
                    username: 'user2',
                    email: 'user2@user2.com',
                    password: yield tempUser.createPassword('12345678'),
                    firstName: 'User2FirstName',
                    lastName: 'User2LastName',
                    isSuperuser: false,
                    isStaff: false,
                    isActive: true,
                    groups: [gUser]
                }
            ]));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FillData1524199022084 = FillData1524199022084;
//# sourceMappingURL=1524199022084-FillData.js.map