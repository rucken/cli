import { ContentType, Group, Permission } from '@demo/core-nestjs';
import { Demo } from '../entities/demo.entity';
import { plainToClass } from 'class-transformer';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class AddDemoTable1533634559618
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    // create table
    await queryRunner.createTable(
      new Table({
        name: 'demo',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'name',
            type: 'varchar(100)',
            isNullable: false
          },
          {
            name: 'title',
            type: 'varchar(100)',
            isNullable: false
          },

        ]
      }),
      true
    );
    // create/load content type
    const ctNewEntity = await queryRunner.manager
      .getRepository<ContentType>(ContentType)
      .save(
        plainToClass(ContentType, { name: 'demo', title: 'Demo' })
      );
    const ctUser = await queryRunner.manager
      .getRepository<ContentType>(ContentType)
      .findOneOrFail({
        where: {
          name: 'user'
        }
      });
    // create permissions
    const readPermissions = await queryRunner.manager
      .getRepository<Permission>(Permission)
      .save(
        plainToClass(Permission, [
          {
            title: 'Can read demo',
            name: 'read_demo',
            contentType: ctNewEntity
          },
          {
            title: 'Can read demos frame',
            name: 'read_demos-frame',
            contentType: ctUser
          },
          {
            title: 'Can read demos page',
            name: 'read_demos-page',
            contentType: ctUser
          }
        ])
      );
    const modifiPermissions = await queryRunner.manager
      .getRepository<Permission>(Permission)
      .save(
        plainToClass(Permission, [
          {
            title: 'Can add demo',
            name: 'add_demo',
            contentType: ctNewEntity
          },
          {
            title: 'Can change demo',
            name: 'change_demo',
            contentType: ctNewEntity
          },
          {
            title: 'Can delete demo',
            name: 'delete_demo',
            contentType: ctNewEntity
          }
        ])
      );
    // add permissions to groups
    const gUser = await queryRunner.manager
      .getRepository<Group>(Group)
      .findOneOrFail({
        where: {
          name: 'user'
        },
        relations: ['permissions']
      });
    const gAdmin = await queryRunner.manager
      .getRepository<Group>(Group)
      .findOneOrFail({
        where: {
          name: 'admin'
        },
        relations: ['permissions']
      });
    gUser.permissions = [...gUser.permissions, ...readPermissions];
    gAdmin.permissions = [
      ...gAdmin.permissions,
      ...readPermissions,
      ...modifiPermissions
    ];
    await queryRunner.manager.getRepository<Group>(Group).save([gUser, gAdmin]);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {}
}
