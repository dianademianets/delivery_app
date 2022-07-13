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
exports.Cart = void 0;
const typeorm_1 = require("typeorm");
const config_1 = require("../config/config");
const cartProduct_1 = require("./cartProduct");
const commonFields_1 = require("./commonFields");
const user_1 = require("./user");
let Cart = class Cart extends commonFields_1.CommonFields {
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
    }),
    __metadata("design:type", Number)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'int',
        default: 0,
    }),
    __metadata("design:type", Number)
], Cart.prototype, "sum", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.carts),
    (0, typeorm_1.JoinColumn)({ name: 'userId' }),
    __metadata("design:type", user_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cartProduct_1.CartProduct, (cartProducts) => cartProducts.cart),
    __metadata("design:type", Array)
], Cart.prototype, "cartProducts", void 0);
Cart = __decorate([
    (0, typeorm_1.Entity)('Carts', { database: config_1.config.POSTGRESQL_DB_NAME })
], Cart);
exports.Cart = Cart;
//# sourceMappingURL=cart.js.map