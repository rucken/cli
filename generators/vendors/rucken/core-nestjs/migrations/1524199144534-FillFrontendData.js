"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const class_transformer_1 = require("class-transformer");
const content_type_entity_1 = require("../migrations_entities/1524199022084/content-type.entity");
const group_entity_1 = require("../migrations_entities/1524199022084/group.entity");
const permission_entity_1 = require("../migrations_entities/1524199022084/permission.entity");
class FillFrontendData1524199144534 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const gUser = yield queryRunner.manager.getRepository(group_entity_1.Group1524199022084).findOneOrFail({
                where: {
                    name: 'user'
                },
                relations: ['permissions']
            });
            const gAdmin = yield queryRunner.manager.getRepository(group_entity_1.Group1524199022084).findOneOrFail({
                where: {
                    name: 'admin'
                },
                relations: ['permissions']
            });
            const ctUser = yield queryRunner.manager
                .getRepository(content_type_entity_1.ContentType1524199022084)
                .findOneOrFail({
                where: {
                    name: 'user'
                }
            });
            const permissionTitles = {
                'read_themes-page': 'Can read themes page',
                'read_account-page': 'Can read account page',
                'read_profile-frame': 'Can read profile frame',
                'read_admin-page': 'Can read admin page',
                'read_groups-frame': 'Can read groups frame',
                'read_users-frame': 'Can read users frame'
            };
            const permissionsObjects = [];
            for (const permissionTitle in permissionTitles) {
                if (permissionTitles.hasOwnProperty(permissionTitle)) {
                    permissionsObjects.push({
                        title: permissionTitles[permissionTitle],
                        name: permissionTitle,
                        contentType: ctUser
                    });
                }
            }
            const permissions = yield queryRunner.manager
                .getRepository(permission_entity_1.Permission1524199022084)
                .save(class_transformer_1.plainToClass(permission_entity_1.Permission1524199022084, permissionsObjects));
            gUser.permissions = [
                ...gUser.permissions.filter(permission => !permissionTitles[permission.name]),
                ...permissions.filter(permission => ['read_themes-page', 'read_account-page', 'read_profile-frame'].indexOf(permission.name) !== -1)
            ];
            gAdmin.permissions = [
                ...gAdmin.permissions.filter(permission => !permissionTitles[permission.name]),
                ...permissions
            ];
            const groups = yield queryRunner.manager
                .getRepository(group_entity_1.Group1524199022084)
                .save(class_transformer_1.plainToClass(group_entity_1.Group1524199022084, [gUser, gAdmin]));
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
}
exports.FillFrontendData1524199144534 = FillFrontendData1524199144534;
//# sourceMappingURL=1524199144534-FillFrontendData.js.map