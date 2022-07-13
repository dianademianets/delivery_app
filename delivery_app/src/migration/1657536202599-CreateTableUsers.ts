import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableUsers1657536202599 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Users',
            columns: [
                {
                    name: 'firstName',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'lastName',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'age',
                    type: 'int',
                },
                {
                    name: 'phone',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },


                {
                    name: 'createdAt',
                    type: 'timestamp',
                    isNullable: false,
                    default: 'now()',
                },

                {
                    name: 'deleteAt',
                    type: 'timestamp',
                    isNullable: true,
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Users', true);
    }
}
