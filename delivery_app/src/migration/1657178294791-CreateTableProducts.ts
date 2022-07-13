import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableProducts1657178294791 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'Products',
            columns: [
                {
                    name: 'title',
                    type: 'varchar',
                    width: 250,
                    isUnique: true,
                    isNullable: false,
                },

                {
                    name: 'text',
                    type: 'varchar',
                    width: 250,
                    isNullable: false,
                },

                {
                    name: 'price',
                    type: 'int',
                }, {
                    name: 'stockCount',
                    type: 'int',
                },{
                    name: 'photos',
                    type: 'string',
                },
                {
                    name: 'shopId',
                    type: 'int',
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

            foreignKeys: [
                {
                    columnNames: ['shopId'],
                    referencedTableName: 'Shops',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('Products', true);
    }
}
