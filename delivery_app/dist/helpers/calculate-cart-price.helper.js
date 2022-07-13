"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateCartPrice = void 0;
const calculateCartPrice = (cartProducts) => cartProducts.reduce((previousValue, currentValue) => {
    previousValue += currentValue.price * currentValue.count;
    return previousValue;
}, 0);
exports.calculateCartPrice = calculateCartPrice;
//# sourceMappingURL=calculate-cart-price.helper.js.map