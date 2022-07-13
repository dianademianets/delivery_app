import { UpdateResult } from 'typeorm';
import { IProduct } from '../../entity/product';
import { productRepository } from '../../repositories';

class ProductService {
    public async createProduct(product: IProduct): Promise<IProduct> {
        return productRepository.createProduct({ ...product });
    }

    public async findProductByShopId(shopId: number): Promise<IProduct[]> {
        return productRepository.findProduct(shopId);
    }

    public async findProductById(id: number): Promise<IProduct | undefined> {
        return productRepository.findOneProduct(id);
    }

    public async findProducts(): Promise<IProduct[]> {
        return productRepository.findProducts();
    }

    public async updateProductById(product: Partial<IProduct>): Promise<UpdateResult> {
        return productRepository.updateProductById(product);
    }

    public async deleteProductById(id: number) {
        return productRepository.deleteProductById({ id });
    }
}

export const productService = new ProductService();
