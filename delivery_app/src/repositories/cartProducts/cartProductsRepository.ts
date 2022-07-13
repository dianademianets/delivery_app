import {
    EntityRepository, getManager, Repository,
} from 'typeorm';

import {CartProduct, ICartProduct} from "../../entity/cartProduct";
import { ICartProductsRepository } from './cartProductsRepository.interface';

@EntityRepository(CartProduct)
class CartProductsRepository extends Repository<CartProduct> implements ICartProductsRepository {
    public async findProductIndex(productId: number): Promise<ICartProduct | undefined> {
        return getManager().getRepository(CartProduct)
            .createQueryBuilder('cartProducts')
            .where('cartProduct.productId = :productId', { productId })
            .andWhere('cart.deletedAt IS NULL')
            .getOne();
    }
}

export const cartProductsRepository = new CartProductsRepository();
