import { ICartProduct } from '../entity/cartProduct';

export const calculateCartPrice = (cartProducts: ICartProduct[]): number => cartProducts.reduce((previousValue, currentValue) => {
    previousValue += currentValue.price * currentValue.count;

    return previousValue;
}, 0);
