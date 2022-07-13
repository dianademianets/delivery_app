"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopService = void 0;
const repositories_1 = require("../../repositories");
class ShopService {
    async findShops() {
        return repositories_1.shopRepository.findShops();
    }
    async createdShop(shop) {
        return repositories_1.shopRepository.createdShop({ ...shop });
    }
    async findShopById(id) {
        return repositories_1.shopRepository.findShopById(id);
    }
    async updateShopById(id, shop) {
        return repositories_1.shopRepository.updateShopById({ id, title: shop.title });
    }
    async deleteShopById(id) {
        return repositories_1.shopRepository.deleteShopById({ id });
    }
}
exports.shopService = new ShopService();
//# sourceMappingURL=shop.service.js.map