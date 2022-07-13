"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = require("express");
const product_1 = require("../product");
const shop_1 = require("../shop");
const cart_1 = require("../cart");
const user_1 = require("../user");
const router = (0, express_1.Router)();
router.use('/shops', shop_1.shopRouter);
router.use('/users', user_1.userRouter);
router.use('/products', product_1.productRouter);
router.use('/carts', cart_1.cartRouter);
exports.apiRouter = router;
//# sourceMappingURL=api.router.js.map