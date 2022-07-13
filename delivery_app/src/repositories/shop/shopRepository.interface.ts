import { IShop } from '../../entity/shop';

export interface IShopRepository {
    createdShop(shop: IShop): Promise<IShop>,

    findShops(): Promise<IShop[]>,

    findShopById(id: number): Promise<IShop | undefined>,

    updateShopById(shop: Partial<IShop>): any,

    deleteShopById(findObject: Partial<IShop>): void

}
