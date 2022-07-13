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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const commonFields_1 = require("./commonFields");
const shop_1 = require("./shop");
const config_1 = require("../config/config");
let Product = class Product extends commonFields_1.CommonFields {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "text", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
    }),
    __metadata("design:type", Number)
], Product.prototype, "stockCount", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        width: 255,
        nullable: false,
    }),
    __metadata("design:type", String)
], Product.prototype, "photos", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Product.prototype, "shopId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => shop_1.Shop, (shop) => shop.products),
    (0, typeorm_1.JoinColumn)({ name: 'shopId' }),
    __metadata("design:type", shop_1.Shop)
], Product.prototype, "shop", void 0);
Product = __decorate([
    (0, typeorm_1.Entity)('Products', { database: config_1.config.POSTGRESQL_DB_NAME })
], Product);
exports.Product = Product;
//# sourceMappingURL=product.js.map