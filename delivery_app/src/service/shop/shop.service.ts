import { UpdateResult } from 'typeorm';
import { IShop } from '../../entity/shop';
import { shopRepository } from '../../repositories';

class ShopService {
    public async findShops(): Promise<IShop[]> {
        return shopRepository.findShops();
    }

    public async createdShop(shop: IShop): Promise<IShop> {
        return shopRepository.createdShop({ ...shop });
    }

    public async findShopById(id: number): Promise<IShop | undefined> {
        return shopRepository.findShopById(id);
    }

    public async updateShopById(id: number, shop: Partial<IShop>): Promise<UpdateResult> {
        return shopRepository.updateShopById({ id, title: shop.title });
    }

    public async deleteShopById(id: number) {
        return shopRepository.deleteShopById({ id });
    }
}

export const shopService = new ShopService();
