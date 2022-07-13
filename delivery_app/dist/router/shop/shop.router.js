"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const router = (0, express_1.Router)();
router.get('/', controller_1.shopController.getAllShops);
router.post('/', controller_1.shopController.createShop);
router.get('/:id', controller_1.shopController.getShop);
router.put('/:id', controller_1.shopController.updateShop);
router.delete('/:id', controller_1.shopController.deleteShop);
exports.shopRouter = router;
//# sourceMappingURL=shop.router.js.map