import {
    Column, Entity, JoinColumn, ManyToOne,
} from 'typeorm';

import {CommonFields, ICommonFields} from './commonFields';
import {Shop} from './shop';
import {config} from '../config/config';

export interface IProduct extends ICommonFields {
    title: string;
    text: string;
    price: number;
    stockCount: number;
    photos: string;
    shopId: number;
}

@Entity('Products', {database: config.POSTGRESQL_DB_NAME})
export class Product extends CommonFields implements IProduct {
    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    title: string;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    text: string;

    @Column({
        type: 'int',
    })
    price: number;

    @Column({
        type: 'int',
        default: 0,
    })
    stockCount: number;

    @Column({
        type: 'varchar',
        width: 255,
        nullable: false,
    })
    photos: string;

    @Column({
        type: 'int',
    })
    shopId: number;

    @ManyToOne(() => Shop, (shop) => shop.products)
    @JoinColumn({name: 'shopId'})
    shop: Shop;
}
