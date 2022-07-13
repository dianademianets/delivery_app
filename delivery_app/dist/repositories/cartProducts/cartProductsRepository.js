"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartProductsRepository = void 0;
const typeorm_1 = require("typeorm");
const cartProduct_1 = require("../../entity/cartProduct");
let CartProductsRepository = class CartProductsRepository extends typeorm_1.Repository {
    async findProductIndex(productId) {
        return (0, typeorm_1.getManager)().getRepository(cartProduct_1.CartProduct)
            .createQueryBuilder('cartProducts')
            .where('cartProduct.productId = :productId', { productId })
            .andWhere('cart.deletedAt IS NULL')
            .getOne();
    }
};
CartProductsRepository = __decorate([
    (0, typeorm_1.EntityRepository)(cartProduct_1.CartProduct)
], CartProductsRepository);
exports.cartProductsRepository = new CartProductsRepository();
//# sourceMappingURL=cartProductsRepository.js.map