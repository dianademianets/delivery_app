import {
    EntityRepository, getManager, Repository, UpdateResult,
} from 'typeorm';

import { IProduct, Product } from '../../entity/product';
import { IProductRepository } from './productRepository.interface';

@EntityRepository(Product)
class ProductRepository extends Repository<Product> implements IProductRepository {
    public async createProduct(product: IProduct): Promise<IProduct> {
        return getManager().getRepository(Product).save(product);
    }

    public async findProduct(shopId: number): Promise<IProduct[]> {
        return getManager().getRepository(Product)
            .createQueryBuilder('product')
            .where('product.shopId = :shopId', { shopId })
            .andWhere('product.deletedAt IS NULL')
            .getMany();
    }

    public async findOneProduct(id: number): Promise<IProduct | undefined> {
        return getManager().getRepository(Product)
            .createQueryBuilder('product')
            .where('product.id = :id', { id })
            .andWhere('product.deletedAt IS NULL')
            .getOne();
    }

    public async findProducts(): Promise<IProduct[]> {
        return getManager().getRepository(Product)
            .createQueryBuilder('product')
            .getMany();
    }

    public async updateProductById(product: Partial<IProduct>): Promise<UpdateResult> {
        const { id, stockCount} = product;
        return getManager().getRepository(Product)
            .update({ id }, { stockCount  });
    }

    public async deleteProductById(findObject: Partial<IProduct>) {
        return getManager().getRepository(Product)
            .delete(findObject);
    }
}

export const productRepository = new ProductRepository();
