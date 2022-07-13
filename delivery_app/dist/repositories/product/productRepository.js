"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const typeorm_1 = require("typeorm");
const product_1 = require("../../entity/product");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async createProduct(product) {
        return (0, typeorm_1.getManager)().getRepository(product_1.Product).save(product);
    }
    async findProduct(shopId) {
        return (0, typeorm_1.getManager)().getRepository(product_1.Product)
            .createQueryBuilder('product')
            .where('product.shopId = :shopId', { shopId })
            .andWhere('product.deletedAt IS NULL')
            .getMany();
    }
    async findOneProduct(id) {
        return (0, typeorm_1.getManager)().getRepository(product_1.Product)
            .createQueryBuilder('product')
            .where('product.id = :id', { id })
            .andWhere('product.deletedAt IS NULL')
            .getOne();
    }
    async findProducts() {
        return (0, typeorm_1.getManager)().getRepository(product_1.Product)
            .createQueryBuilder('product')
            .getMany();
    }
    async updateProductById(product) {
        const { id, stockCount } = product;
        return (0, typeorm_1.getManager)().getRepository(product_1.Product)
            .update({ id }, { stockCount });
    }
    async deleteProductById(findObject) {
        return (0, typeorm_1.getManager)().getRepository(product_1.Product)
            .delete(findObject);
    }
};
ProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_1.Product)
], ProductRepository);
exports.productRepository = new ProductRepository();
//# sourceMappingURL=productRepository.js.map