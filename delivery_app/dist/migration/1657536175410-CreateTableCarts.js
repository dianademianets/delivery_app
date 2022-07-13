"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableCarts1657536175410 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableCarts1657536175410 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Carts',
            columns: [
                {
                    name: 'sum',
                    type: 'int',
                },
                {
                    name: 'userId',
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
                    columnNames: ['userId'],
                    referencedTableName: 'Users',
                    referencedColumnNames: ['id'],
                    onDelete: 'CASCADE',
                    onUpdate: 'CASCADE',
                },
            ],
        }), true);
    }
    async down(queryRunner) {
        await queryRunner.dropTable('Carts', true);
    }
}
exports.CreateTableCarts1657536175410 = CreateTableCarts1657536175410;
//# sourceMappingURL=1657536175410-CreateTableCarts.js.map