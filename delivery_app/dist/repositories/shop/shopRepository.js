"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRepository = void 0;
const typeorm_1 = require("typeorm");
const shop_1 = require("../../entity/shop");
let ShopRepository = class ShopRepository extends typeorm_1.Repository {
    async createdShop(shop) {
        return (0, typeorm_1.getManager)().getRepository(shop_1.Shop).save(shop);
    }
    async findShops() {
        return (0, typeorm_1.getManager)().getRepository(shop_1.Shop)
            .find({ relations: ['products'] });
    }
    async findShopById(id) {
        return (0, typeorm_1.getManager)().getRepository(shop_1.Shop)
            .createQueryBuilder('shop')
            .where('shop.id=:id', { id })
            .getOne();
    }
    async updateShopById(shop) {
        return (0, typeorm_1.getManager)().getRepository(shop_1.Shop)
            .update({ id: shop.id }, { title: shop.title });
    }
    async deleteShopById(findObject) {
        return (0, typeorm_1.getManager)().getRepository(shop_1.Shop)
            .delete(findObject);
    }
};
ShopRepository = __decorate([
    (0, typeorm_1.EntityRepository)(shop_1.Shop)
], ShopRepository);
exports.shopRepository = new ShopRepository();
//# sourceMappingURL=shopRepository.js.map