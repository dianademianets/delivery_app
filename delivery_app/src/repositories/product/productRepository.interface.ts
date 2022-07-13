import { IProduct } from '../../entity/product';

export interface IProductRepository {
    createProduct(product: IProduct): Promise<IProduct>,

    findProducts(): Promise<IProduct[]>,

    findProduct(shopId: number): Promise<IProduct[]>,

    findOneProduct(id: number): Promise<IProduct | undefined>,

    updateProductById(product: Partial<IProduct>): any,

    deleteProductById(findObject: Partial<IProduct>): void

}
