import {
    EntityRepository, getManager, Repository, UpdateResult,
} from 'typeorm';

import { IShop, Shop } from '../../entity/shop';
import { IShopRepository } from './shopRepository.interface';

@EntityRepository(Shop)
class ShopRepository extends Repository<Shop> implements IShopRepository {
    public async createdShop(shop: IShop): Promise<IShop> {
        return getManager().getRepository(Shop).save(shop);
    }

    public async findShops(): Promise<IShop[]> {
        return getManager().getRepository(Shop)
            .find({relations:['products']})}

    public async findShopById(id: number): Promise<IShop | undefined> {
        return getManager().getRepository(Shop)
            .createQueryBuilder('shop')
            .where('shop.id=:id', { id })
            .getOne();
    }

    public async updateShopById(shop: Partial<IShop>): Promise<UpdateResult> {
        return getManager().getRepository(Shop)
            .update({ id: shop.id }, { title: shop.title });
    }

    public async deleteShopById(findObject: Partial<IShop>) {
        return getManager().getRepository(Shop)
            .delete(findObject);
    }
}

export const shopRepository = new ShopRepository();
