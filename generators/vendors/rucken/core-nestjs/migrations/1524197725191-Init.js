"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class Init1524197725191 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'integer'
                    },
                    {
                        name: 'password',
                        type: 'varchar(128)',
                        isNullable: false
                    },
                    {
                        name: 'is_superuser',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_staff',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'is_active',
                        type: 'boolean',
                        isNullable: false
                    },
                    {
                        name: 'username',
                        type: 'varchar(150)',
                        isNullable: false
                    },
                    {
                        name: 'first_name',
                        type: 'varchar(30)',
                        isNullable: true
                    },
                    {
                        name: 'last_name',
                        type: 'varchar(30)',
                        isNullable: true
                    },
                    {
                        name: 'email',
                        type: 'varchar(254)',
                        isNullable: false
                    },
                    {
                        name: 'last_login',
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        default: queryRunner.connection.driver.mappedDataTypes.updateDateDefault
                    },
                    {
                        name: 'date_joined',
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        isNullable: false,
                        default: queryRunner.connection.driver.mappedDataTypes.createDateDefault
                    },
                    {
                        name: 'date_of_birth',
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        isNullable: true
                    }
                ]
            }), true);
            yield queryRunner.changeColumn('users', 'id', new typeorm_1.TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            }));
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createIndex('users', new typeorm_1.TableIndex({
                    name: 'IDX_USE_E',
                    columnNames: ['email']
                }));
                yield queryRunner.createIndex('users', new typeorm_1.TableIndex({
                    name: 'UQ_USE_U',
                    isUnique: true,
                    columnNames: ['username']
                }));
            }
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'groups',
                columns: [
                    {
                        name: 'id',
                        type: 'integer'
                    },
                    {
                        name: 'name',
                        type: 'varchar(100)',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar(255)',
                        isNullable: false
                    }
                ]
            }), true);
            yield queryRunner.changeColumn('groups', 'id', new typeorm_1.TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            }));
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createIndex('groups', new typeorm_1.TableIndex({
                    name: 'UQ_GRO_N',
                    isUnique: true,
                    columnNames: ['name']
                }));
                yield queryRunner.createIndex('groups', new typeorm_1.TableIndex({
                    name: 'UQ_GRO_T',
                    isUnique: true,
                    columnNames: ['title']
                }));
            }
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'content_types',
                columns: [
                    {
                        name: 'id',
                        type: 'integer'
                    },
                    {
                        name: 'name',
                        type: 'varchar(100)',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar(255)',
                        isNullable: false
                    }
                ]
            }), true);
            yield queryRunner.changeColumn('content_types', 'id', new typeorm_1.TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            }));
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'permissions',
                columns: [
                    {
                        name: 'id',
                        type: 'integer'
                    },
                    {
                        name: 'name',
                        type: 'varchar(100)',
                        isNullable: false
                    },
                    {
                        name: 'title',
                        type: 'varchar(255)',
                        isNullable: false
                    },
                    {
                        name: 'content_type_id',
                        type: 'integer'
                    }
                ]
            }), true);
            yield queryRunner.changeColumn('permissions', 'id', new typeorm_1.TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            }));
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createForeignKey('permissions', new typeorm_1.TableForeignKey({
                    name: 'FK_PER_C_T_ID',
                    columnNames: ['content_type_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'content_types',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('permissions', new typeorm_1.TableIndex({
                    name: 'IDX_PER_C_T_ID',
                    columnNames: ['content_type_id']
                }));
            }
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'user_groups',
                columns: [
                    {
                        name: 'user_id',
                        type: 'integer',
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: 'group_id',
                        type: 'integer',
                        isNullable: false,
                        isPrimary: true
                    }
                ]
            }), true);
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createForeignKey('user_groups', new typeorm_1.TableForeignKey({
                    name: 'FK_USE_GRO_U_ID',
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('user_groups', new typeorm_1.TableIndex({
                    name: 'IDX_USE_GRO_U_ID',
                    columnNames: ['user_id']
                }));
                yield queryRunner.createForeignKey('user_groups', new typeorm_1.TableForeignKey({
                    name: 'FK_USE_GRO_G_ID',
                    columnNames: ['group_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'groups',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('user_groups', new typeorm_1.TableIndex({
                    name: 'IDX_USE_GRO_G_ID',
                    columnNames: ['group_id']
                }));
            }
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'group_permissions',
                columns: [
                    {
                        name: 'group_id',
                        type: 'integer',
                        isNullable: false,
                        isPrimary: true
                    },
                    {
                        name: 'permission_id',
                        type: 'integer',
                        isNullable: false,
                        isPrimary: true
                    }
                ]
            }), true);
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createForeignKey('group_permissions', new typeorm_1.TableForeignKey({
                    name: 'FK_GRO_PER_G_ID',
                    columnNames: ['group_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'groups',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('group_permissions', new typeorm_1.TableIndex({
                    name: 'IDX_GRO_PER_G_ID',
                    columnNames: ['group_id']
                }));
                yield queryRunner.createForeignKey('group_permissions', new typeorm_1.TableForeignKey({
                    name: 'FK_GRO_PER_P_ID',
                    columnNames: ['permission_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'permissions',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('group_permissions', new typeorm_1.TableIndex({
                    name: 'IDX_GRO_PER_P_ID',
                    columnNames: ['permission_id']
                }));
            }
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
}
exports.Init1524197725191 = Init1524197725191;
//# sourceMappingURL=1524197725191-Init.js.map