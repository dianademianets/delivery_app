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
exports.CartProduct = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config/config");
const cart_1 = require("./cart");
const commonFields_1 = require("./commonFields");
let CartProduct = class CartProduct extends commonFields_1.CommonFields {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], CartProduct.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], CartProduct.prototype, "count", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], CartProduct.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => cart_1.Cart, (cart) => cart.cartProducts),
    (0, typeorm_1.JoinColumn)({ name: 'productId' }),
    __metadata("design:type", cart_1.Cart)
], CartProduct.prototype, "cart", void 0);
CartProduct = __decorate([
    (0, typeorm_1.Entity)('CartsProduct', { database: config_1.config.POSTGRESQL_DB_NAME })
], CartProduct);
exports.CartProduct = CartProduct;
//# sourceMappingURL=cartProduct.js.map