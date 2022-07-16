"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartService = void 0;
const calculate_cart_price_helper_1 = require("../../helpers/calculate-cart-price.helper");
const repositories_1 = require("../../repositories");
class CartService {
    async createCart(cart) {
        return repositories_1.cartRepository.createCart(cart);
    }
    async addProductToCart(cart, product, productCount) {
        const productId = product.id;
        // @ts-ignore
        const productIndex = cart.cartProducts.findIndex((value) => productId.toString() === value.productId.toString());
        if (productIndex !== -1) {
            cart.cartProducts[productIndex].count += productCount;
        }
        else {
            cart.cartProducts.push({
                productId: Number(product.id),
                count: productCount,
                price: Number(product.price)
            });
        }
        cart.sum = (0, calculate_cart_price_helper_1.calculateCartPrice)(cart.cartProducts);
        return this.updateCart({ id: cart.id, sum: cart.sum });
    }
    async updateCart(cart) {
        return repositories_1.cartRepository.updateCartById(cart);
    }
    async findCarts() {
        return repositories_1.cartRepository.findCarts();
    }
    async findCartById(userId) {
        return repositories_1.cartRepository.findCart(userId);
    }
    async deleteCartById(id) {
        return repositories_1.cartRepository.deleteCartById({ id });
    }
}
exports.cartService = new CartService();
//# sourceMappingURL=cart.service.js.map