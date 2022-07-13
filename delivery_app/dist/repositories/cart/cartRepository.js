"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRepository = void 0;
const typeorm_1 = require("typeorm");
const cart_1 = require("../../entity/cart");
let CartRepository = class CartRepository extends typeorm_1.Repository {
    async createCart(cart) {
        return (0, typeorm_1.getManager)().getRepository(cart_1.Cart).save(cart);
    }
    async findCart(userId) {
        return (0, typeorm_1.getManager)().getRepository(cart_1.Cart)
            .findOne({ relations: ['cartProducts'], where: { userId } });
    }
    async findCarts() {
        return (0, typeorm_1.getManager)().getRepository(cart_1.Cart).find({ relations: ['cartProducts'] });
    }
    async updateCartById(cart) {
        const { id, sum } = cart;
        return (0, typeorm_1.getManager)().getRepository(cart_1.Cart)
            .update({ id }, { sum });
    }
    async deleteCartById(findObject) {
        return (0, typeorm_1.getManager)().getRepository(cart_1.Cart)
            .delete(findObject);
    }
};
CartRepository = __decorate([
    (0, typeorm_1.EntityRepository)(cart_1.Cart)
], CartRepository);
exports.cartRepository = new CartRepository();
//# sourceMappingURL=cartRepository.js.map