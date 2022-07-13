import { ICart } from '../../entity/cart';

export interface ICartRepository {
    createCart(Cart: ICart): Promise<ICart>,

    findCarts(): Promise<ICart[]>,

    findCart(userId: number): Promise<ICart | undefined>,

    updateCartById(Cart: Partial<ICart>): any,

    deleteCartById(findObject: Partial<ICart>): void

}
