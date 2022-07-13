"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableProducts1657178294791 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableProducts1657178294791 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
                }, {
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
    async down(queryRunner) {
        await queryRunner.dropTable('Products', true);
    }
}
exports.CreateTableProducts1657178294791 = CreateTableProducts1657178294791;
//# sourceMappingURL=1657178294791-CreateTableProducts.js.map