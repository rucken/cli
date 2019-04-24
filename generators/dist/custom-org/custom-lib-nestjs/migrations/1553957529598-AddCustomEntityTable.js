"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const core_nestjs_1 = require("@rucken/core-nestjs");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
class AddCustomEntityTable1553957529598 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "custom-entities",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar(100)",
                        isNullable: false
                    },
                    {
                        name: "title",
                        type: "varchar(255)",
                        isNullable: false
                    },
                    {
                        name: "created_at",
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        isNullable: false,
                        default: queryRunner.connection.driver.mappedDataTypes.createDateDefault
                    },
                    {
                        name: "updated_at",
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        default: queryRunner.connection.driver.mappedDataTypes.updateDateDefault
                    }
                ]
            }), true);
            const ctNewEntity = yield queryRunner.manager
                .getRepository(core_nestjs_1.ContentType1524199022084)
                .save(class_transformer_1.plainToClass(core_nestjs_1.ContentType1524199022084, {
                name: "custom-entity",
                title: "CustomEntity"
            }));
            const ctUser = yield queryRunner.manager
                .getRepository(core_nestjs_1.ContentType1524199022084)
                .findOneOrFail({
                where: {
                    name: "user"
                }
            });
            const readPermissions = yield queryRunner.manager
                .getRepository(core_nestjs_1.Permission1524199022084)
                .save(class_transformer_1.plainToClass(core_nestjs_1.Permission1524199022084, [
                {
                    title: "Can read custom-entity",
                    name: "read_custom-entity",
                    contentType: ctNewEntity
                },
                {
                    title: "Can read custom-entities frame",
                    name: "read_custom-entities-frame",
                    contentType: ctUser
                },
                {
                    title: "Can read custom-entities page",
                    name: "read_custom-entities-page",
                    contentType: ctUser
                }
            ]));
            const modifiPermissions = yield queryRunner.manager
                .getRepository(core_nestjs_1.Permission1524199022084)
                .save(class_transformer_1.plainToClass(core_nestjs_1.Permission1524199022084, [
                {
                    title: "Can add custom-entity",
                    name: "add_custom-entity",
                    contentType: ctNewEntity
                },
                {
                    title: "Can change custom-entity",
                    name: "change_custom-entity",
                    contentType: ctNewEntity
                },
                {
                    title: "Can delete custom-entity",
                    name: "delete_custom-entity",
                    contentType: ctNewEntity
                }
            ]));
            const gUser = yield queryRunner.manager
                .getRepository(core_nestjs_1.Group1524199022084)
                .findOneOrFail({
                where: {
                    name: "user"
                },
                relations: ["permissions"]
            });
            const gAdmin = yield queryRunner.manager
                .getRepository(core_nestjs_1.Group1524199022084)
                .findOneOrFail({
                where: {
                    name: "admin"
                },
                relations: ["permissions"]
            });
            gUser.permissions = [
                ...gUser.permissions,
                ...readPermissions,
                ...modifiPermissions
            ];
            gAdmin.permissions = [
                ...gAdmin.permissions,
                ...readPermissions,
                ...modifiPermissions
            ];
            yield queryRunner.manager
                .getRepository(core_nestjs_1.Group1524199022084)
                .save([gUser, gAdmin]);
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
}
exports.AddCustomEntityTable1553957529598 = AddCustomEntityTable1553957529598;
//# sourceMappingURL=1553957529598-AddCustomEntityTable.js.map