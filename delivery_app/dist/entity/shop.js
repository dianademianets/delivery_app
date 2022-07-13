"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shop = void 0;
const typeorm_1 = require("typeorm");
const commonFields_1 = require("./commonFields");
const product_1 = require("./product");
const config_1 = require("../config/config");
let Shop = class Shop extends commonFields_1.CommonFields {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Shop.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_1.Product, (product) => product.shop),
    __metadata("design:type", Array)
], Shop.prototype, "products", void 0);
Shop = __decorate([
    (0, typeorm_1.Entity)('Shops', { database: config_1.config.POSTGRESQL_DB_NAME })
], Shop);
exports.Shop = Shop;
//# sourceMappingURL=shop.js.map