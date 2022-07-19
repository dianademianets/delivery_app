import { Column, Entity, OneToMany } from 'typeorm';

import { config } from '../config/config';
import { Cart } from './cart';
import { CommonFields, ICommonFields } from './commonFields';

export interface IUser extends ICommonFields {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    carts: any[];
}

@Entity('Users', { database: config.POSTGRESQL_DB_NAME })
export class User extends CommonFields implements IUser {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        firstName: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        lastName: string;


    @Column({
        type: 'varchar',
        width: 255,
        unique: true,
        nullable: false,
    })
        phone: string;

    @Column({
        type: 'varchar',
        width: 255,
        unique: true,
        nullable: false,
    })
        email: string;

    @OneToMany(() => Cart, (cart) => cart.user)
        carts: Cart[];
}
