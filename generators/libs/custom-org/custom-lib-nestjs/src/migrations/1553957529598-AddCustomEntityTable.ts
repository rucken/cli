import {
  ContentType1524199022084,
  Group1524199022084,
  Permission1524199022084
} from "@rucken/core-nestjs";
import { plainToClass } from "class-transformer";
import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddCustomEntityTable1553957529598 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // create table
    await queryRunner.createTable(
      new Table({
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
            default:
              queryRunner.connection.driver.mappedDataTypes.createDateDefault
          },
          {
            name: "updated_at",
            type: queryRunner.connection.driver.mappedDataTypes.createDate.toString(),
            default:
              queryRunner.connection.driver.mappedDataTypes.updateDateDefault
          }
        ]
      }),
      true
    );

    // create/load content type
    const ctNewEntity = await queryRunner.manager
      .getRepository<ContentType1524199022084>(ContentType1524199022084)
      .save(
        plainToClass(ContentType1524199022084, {
          name: "custom-entity",
          title: "CustomEntity"
        })
      );
    const ctUser = await queryRunner.manager
      .getRepository<ContentType1524199022084>(ContentType1524199022084)
      .findOneOrFail({
        where: {
          name: "user"
        }
      });

    // create permissions
    const readPermissions = await queryRunner.manager
      .getRepository<Permission1524199022084>(Permission1524199022084)
      .save(
        plainToClass(Permission1524199022084, [
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
        ])
      );
    const modifiPermissions = await queryRunner.manager
      .getRepository<Permission1524199022084>(Permission1524199022084)
      .save(
        plainToClass(Permission1524199022084, [
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
        ])
      );

    // add permissions to groups
    const gUser = await queryRunner.manager
      .getRepository<Group1524199022084>(Group1524199022084)
      .findOneOrFail({
        where: {
          name: "user"
        },
        relations: ["permissions"]
      });
    const gAdmin = await queryRunner.manager
      .getRepository<Group1524199022084>(Group1524199022084)
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
    await queryRunner.manager
      .getRepository<Group1524199022084>(Group1524199022084)
      .save([gUser, gAdmin]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
