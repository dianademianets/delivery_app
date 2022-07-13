"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableCartProducts1657536272140 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableCartProducts1657536272140 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('CartProducts', true);
    }
}
exports.CreateTableCartProducts1657536272140 = CreateTableCartProducts1657536272140;
//# sourceMappingURL=1657536272140-CreateTableCartProducts.js.map