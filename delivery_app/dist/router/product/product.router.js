"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const middlewares_1 = require("../../middlewares");
const router = (0, express_1.Router)();
router.get('/', controller_1.productController.getProducts);
router.get('/:shopId', controller_1.productController.getProductByShopId);
router.get('/product/:id', controller_1.productController.getProductById);
router.post('/', middlewares_1.productMiddleware.validateCreateProduct, controller_1.productController.createProduct);
router.patch('/product/:id', middlewares_1.productMiddleware.updateProduct, controller_1.productController.updateProduct);
router.delete('/product/:id', controller_1.productController.deleteProduct);
exports.productRouter = router;
//# sourceMappingURL=product.router.js.map