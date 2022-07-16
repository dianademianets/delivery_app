import { UpdateResult } from 'typeorm';

import { ICart } from '../../entity/cart';
import { IProduct } from '../../entity/product';
import { calculateCartPrice } from '../../helpers/calculate-cart-price.helper';
import { cartRepository } from '../../repositories';

class CartService {
    public async createCart(cart: Partial<ICart>): Promise<ICart> {
        return cartRepository.createCart(cart);
    }

    public async addProductToCart(cart:ICart, product:Partial<IProduct>,productCount: number) {
        const productId=product.id;
        // @ts-ignore
        const productIndex = cart.cartProducts.findIndex((value)=> productId.toString()===value.productId.toString())

        if (productIndex !== -1) {
            cart.cartProducts[productIndex].count += productCount;
        } else {
            cart.cartProducts.push({
                productId: Number(product.id),
                count: productCount,
                price:  Number(product.price)
            });
        }
        cart.sum = calculateCartPrice(cart.cartProducts);

        return this.updateCart({ id: cart.id, sum: cart.sum });
    }

    public async updateCart(cart: Partial<ICart>): Promise<UpdateResult> {
        return cartRepository.updateCartById(cart);
    }

    public async findCarts(): Promise<ICart[]> {
        return cartRepository.findCarts();
    }

    public async findCartById(userId: number): Promise<ICart | undefined> {
        return cartRepository.findCart(userId);
    }

    public async deleteCartById(id: number) {
        return cartRepository.deleteCartById({ id });
    }
}

export const cartService = new CartService();
