import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import { config } from '../config/config';
import { Cart } from './cart';
import { CommonFields, ICommonFields } from './commonFields';

export interface ICartProduct extends ICommonFields {
    productId: number;
    count: number;
    price: number;

}

@Entity('CartsProduct', { database: config.POSTGRESQL_DB_NAME })
export class CartProduct extends CommonFields implements ICartProduct {
    @Column({
        type: 'int',
    })
        productId: number;

    @Column({
        type: 'int',
    })
        count: number;

    @Column({
        type: 'int',
    })
        price: number;

    @ManyToOne(() => Cart, (cart) => cart.cartProducts)
    @JoinColumn({ name: 'productId' })
        cart: Cart;
}
