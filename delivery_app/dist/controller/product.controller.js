"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const service_1 = require("../service");
class ProductController {
    async createProduct(req, res, next) {
        try {
            const createdProduct = await service_1.productService.createProduct(req.body);
            return res.json(createdProduct);
        }
        catch (e) {
            next(e);
        }
    }
    async getProductByShopId(req, res, next) {
        try {
            const { shopId } = req.params;
            const products = await service_1.productService.findProductByShopId(Number(shopId));
            return res.json(products);
        }
        catch (e) {
            next(e);
        }
    }
    async getProductById(req, res, next) {
        try {
            const { id } = req.params;
            const products = await service_1.productService.findProductById(Number(id));
            return res.json(products);
        }
        catch (e) {
            next(e);
        }
    }
    async getProducts(req, res, next) {
        try {
            const products = await service_1.productService.findProducts();
            return res.json(products);
        }
        catch (e) {
            next(e);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { id } = req.params;
            const { text, title, price, stockCount, photos } = req.body;
            const product = { id: Number(id), text, title, price, stockCount, photos };
            const updateOne = await service_1.productService.updateProductById(product);
            return res.json(updateOne);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const { id } = req.params;
            const deleteOne = await service_1.productService.deleteProductById(Number(id));
            return res.json(deleteOne);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.productController = new ProductController();
//# sourceMappingURL=product.controller.js.map