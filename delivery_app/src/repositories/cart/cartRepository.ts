import {
    EntityRepository, getManager, Repository, UpdateResult,
} from 'typeorm';

import { Cart, ICart } from '../../entity/cart';
import { ICartRepository } from './cartRepository.interface';

@EntityRepository(Cart)
class CartRepository extends Repository<Cart> implements ICartRepository {
    public async createCart(cart: Partial<ICart>): Promise<ICart> {
        return getManager().getRepository(Cart).save(cart);
    }

    public async findCart(userId: number): Promise<ICart | undefined> {
        return getManager().getRepository(Cart)
            .findOne({relations:['cartProducts'], where:{ userId }})
    }
    public async findCarts(): Promise<Cart[]> {
        return getManager().getRepository(Cart).find({relations:['cartProducts']})}

    public async updateCartById(cart: Partial<ICart>): Promise<UpdateResult> {
        const { id, sum } = cart;
        return getManager().getRepository(Cart)
            .update({ id }, { sum });
    }

    public async deleteCartById(findObject: Partial<ICart>) {
        return getManager().getRepository(Cart)
            .delete(findObject);
    }
}

export const cartRepository = new CartRepository();
