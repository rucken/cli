"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
class AddOauthTokensAccesstokenTable1533634559617 {
    up(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: 'oauth_tokens_accesstokens',
                columns: [
                    {
                        name: 'id',
                        type: 'integer'
                    },
                    {
                        name: 'provider',
                        type: 'varchar(20)',
                        isNullable: false
                    },
                    {
                        name: 'provider_client_id',
                        type: 'varchar(200)',
                        isNullable: false
                    },
                    {
                        name: 'granted_at',
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        isNullable: false,
                        default: queryRunner.connection.driver.mappedDataTypes.createDateDefault
                    },
                    {
                        name: 'access_token',
                        type: 'varchar(500)',
                        isNullable: false
                    },
                    {
                        name: 'refresh_token',
                        type: 'varchar(500)'
                    },
                    {
                        name: 'expires_at',
                        type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
                        isNullable: true
                    },
                    {
                        name: 'token_type',
                        type: 'varchar(200)'
                    },
                    {
                        name: 'scope',
                        type: 'varchar(512)'
                    },
                    {
                        name: 'user_id',
                        type: 'integer'
                    }
                ]
            }), true);
            yield queryRunner.changeColumn('oauth_tokens_accesstokens', 'id', new typeorm_1.TableColumn({
                name: 'id',
                type: 'integer',
                isPrimary: true,
                isGenerated: true,
                generationStrategy: 'increment'
            }));
            if (!queryRunner.connection.driver.sqlite) {
                yield queryRunner.createForeignKey('oauth_tokens_accesstokens', new typeorm_1.TableForeignKey({
                    name: 'FK_TOK_ACC_U_ID',
                    columnNames: ['user_id'],
                    referencedColumnNames: ['id'],
                    referencedTableName: 'users',
                    onDelete: 'CASCADE'
                }));
                yield queryRunner.createIndex('oauth_tokens_accesstokens', new typeorm_1.TableIndex({
                    name: 'IDX_TOK_ACC_U_ID',
                    columnNames: ['user_id']
                }));
            }
        });
    }
    down(queryRunner) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () { });
    }
}
exports.AddOauthTokensAccesstokenTable1533634559617 = AddOauthTokensAccesstokenTable1533634559617;
//# sourceMappingURL=1533634559617-AddOauthTokensAccesstokenTable.js.map