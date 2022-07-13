"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopController = void 0;
const service_1 = require("../service");
class ShopController {
    async getAllShops(req, res, next) {
        try {
            const getAll = await service_1.shopService.findShops();
            return res.json(getAll);
        }
        catch (e) {
            next(e);
        }
    }
    async createShop(req, res, next) {
        try {
            const createdShop = await service_1.shopService.createdShop(req.body);
            return res.json(createdShop);
        }
        catch (e) {
            next(e);
        }
    }
    async getShop(req, res, next) {
        try {
            const { id } = req.params;
            const getAll = await service_1.shopService.findShopById(Number(id));
            return res.json(getAll);
        }
        catch (e) {
            next(e);
        }
    }
    async updateShop(req, res, next) {
        try {
            const { id } = req.params;
            const updateOne = await service_1.shopService.updateShopById(Number(id), req.body);
            return res.json(updateOne);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteShop(req, res, next) {
        try {
            const { id } = req.params;
            const deleteOne = await service_1.shopService.deleteShopById(Number(id));
            return res.json(deleteOne);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.shopController = new ShopController();
//# sourceMappingURL=shop.controller.js.map