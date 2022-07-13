"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableShops1657178272818 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableShops1657178272818 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: 'Shops',
            columns: [
                {
                    name: 'title',
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
    async down(queryRunner) {
        await queryRunner.dropTable('Shops', true);
    }
}
exports.CreateTableShops1657178272818 = CreateTableShops1657178272818;
//# sourceMappingURL=1657178272818-CreateTableShops.js.map