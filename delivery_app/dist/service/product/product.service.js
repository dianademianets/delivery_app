"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const repositories_1 = require("../../repositories");
class ProductService {
    async createProduct(product) {
        return repositories_1.productRepository.createProduct({ ...product });
    }
    async findProductByShopId(shopId) {
        return repositories_1.productRepository.findProduct(shopId);
    }
    async findProductById(id) {
        return repositories_1.productRepository.findOneProduct(id);
    }
    async findProducts() {
        return repositories_1.productRepository.findProducts();
    }
    async updateProductById(product) {
        return repositories_1.productRepository.updateProductById(product);
    }
    async deleteProductById(id) {
        return repositories_1.productRepository.deleteProductById({ id });
    }
}
exports.productService = new ProductService();
//# sourceMappingURL=product.service.js.map