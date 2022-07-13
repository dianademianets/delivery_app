import {
    Column, Entity, JoinColumn, ManyToOne, OneToMany,
} from 'typeorm';

import { config } from '../config/config';
import { CartProduct } from './cartProduct';
import { CommonFields, ICommonFields } from './commonFields';
import { User } from './user';

export interface ICart extends ICommonFields {
    userId: number;
    sum: number;
    cartProducts: any[];
}

@Entity('Carts', { database: config.POSTGRESQL_DB_NAME })
export class Cart extends CommonFields implements ICart {
    @Column({
        type: 'int',
    })
        userId: number;

    @Column({
        type: 'int',
        default: 0,
    })
        sum: number;

    @ManyToOne(() => User, (user) => user.carts)
    @JoinColumn(
        { name: 'userId' },
    )
        user: User;

    @OneToMany(() => CartProduct, (cartProducts) => cartProducts.cart)
        cartProducts: CartProduct[];
}
