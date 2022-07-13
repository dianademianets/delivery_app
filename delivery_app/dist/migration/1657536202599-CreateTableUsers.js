"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1657536202599 = void 0;
const typeorm_1 = require("typeorm");
class CreateTableUsers1657536202599 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        await queryRunner.dropTable('Users', true);
    }
}
exports.CreateTableUsers1657536202599 = CreateTableUsers1657536202599;
//# sourceMappingURL=1657536202599-CreateTableUsers.js.map