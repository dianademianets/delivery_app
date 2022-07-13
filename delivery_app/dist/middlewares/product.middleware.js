"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMiddleware = void 0;
const errors_1 = require("../errors");
const product_validators_1 = require("../validators/product.validators");
class ProductMiddleware {
    async validateCreateProduct(req, res, next) {
        try {
            const { error, value } = await product_validators_1.productValidator.createProduct.validate(req.body);
            if (error) {
                next(new errors_1.ErrorHandler(error.details[0].message));
                return;
            }
            req.product = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const { error, value } = await product_validators_1.productValidator.updateProduct.validate(req.body);
            if (error) {
                next(new errors_1.ErrorHandler(error.details[0].message));
                return;
            }
            req.product = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.productMiddleware = new ProductMiddleware();
//# sourceMappingURL=product.middleware.js.map