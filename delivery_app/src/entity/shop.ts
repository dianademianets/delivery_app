import { Column, Entity, OneToMany } from 'typeorm';

import { CommonFields, ICommonFields } from './commonFields';
import { Product } from './product';
import { config } from '../config/config';

export interface IShop extends ICommonFields {
    title: string;
    products: any[];
}

@Entity('Shops', { database: config.POSTGRESQL_DB_NAME })
export class Shop extends CommonFields implements IShop {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
        title: string;

    @OneToMany(() => Product, (product) => product.shop)
        products: Product[];
}
