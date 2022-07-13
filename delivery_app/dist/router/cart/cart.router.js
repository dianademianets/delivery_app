"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const router = (0, express_1.Router)();
router.get('/', controller_1.cartController.getCarts);
router.delete('/:id', controller_1.cartController.deleteCart);
router.delete('/', controller_1.cartController.createCart);
router.post('/:productId', controller_1.cartController.addProductToCart);
exports.cartRouter = router;
//# sourceMappingURL=cart.router.js.map