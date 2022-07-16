"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const service_1 = require("../service");
class CartController {
    async createCart(req, res, next) {
        try {
            const createdProduct = await service_1.cartService.createCart(req.body);
            return res.json(createdProduct);
        }
        catch (e) {
            next(e);
        }
    }
    async getCarts(req, res, next) {
        try {
            const getCart = await service_1.cartService.findCarts();
            return res.json(getCart);
        }
        catch (e) {
            next(e);
        }
    }
    async getCartByUserId(req, res, next) {
        try {
            const { userId } = req.params;
            const getCartByUserId = await service_1.cartService.findCartById(Number(userId));
            return res.json(getCartByUserId);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteCart(req, res, next) {
        try {
            const { id } = req.params;
            const deleteOne = await service_1.cartService.deleteCartById(Number(id));
            return res.json(deleteOne);
        }
        catch (e) {
            next(e);
        }
    }
    async addProductToCart(req, res, next) {
        try {
            const { productId } = req.params;
            const { count, userId } = req.body;
            const product = await service_1.productService.findProductById(Number(productId));
            let userCart = await service_1.cartService.findCartById(Number(userId));
            if (!userCart) {
                userCart = await service_1.cartService.createCart({ userId });
            }
            const iCart = await service_1.cartService.addProductToCart(userCart, { ...product }, count);
            await service_1.productService.updateProductById({
                id: Number(productId),
                stockCount: Number(product?.stockCount) - Number(count)
            });
            return res.json(iCart);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.cartController = new CartController();
//# sourceMappingURL=cart.controller.js.map