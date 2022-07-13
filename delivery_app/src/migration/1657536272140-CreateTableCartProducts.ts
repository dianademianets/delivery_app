import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableCartProducts1657536272140 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'CartProducts',
            columns: [
                {
                    name: 'price',
                    type: 'int',
                }, {
                    name: 'count',
                    type: 'int',
                },
                {
                    name: 'productId',
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
                    columnNames: ['productId'],
                    referencedTableName: 'Carts',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('CartProducts', true);
    }
}
