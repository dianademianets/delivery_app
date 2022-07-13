import {NextFunction, Request, Response} from 'express';

import {productService} from '../service';
import {IProduct} from '../entity/product';

class ProductController {
    public async createProduct(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const createdProduct = await productService.createProduct(req.body);
            return res.json(createdProduct);
        } catch (e) {
            next(e);
        }
    }

    public async getProductByShopId(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const {shopId} = req.params;
            const products = await productService.findProductByShopId(Number(shopId));
            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    public async getProductById(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const {id} = req.params;
            const products = await productService.findProductById(Number(id));
            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    public async getProducts(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const products = await productService.findProducts();
            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    public async updateProduct(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const {id} = req.params;
            const {text, title, price, stockCount, photos} = req.body;
            const product = {id: Number(id), text, title, price, stockCount, photos};
            const updateOne = await productService.updateProductById(product);
            return res.json(updateOne);
        } catch (e) {
            next(e);
        }
    }

    public async deleteProduct(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deleteOne = await productService.deleteProductById(Number(id));
            return res.json(deleteOne);
        } catch (e) {
            next(e);
        }
    }
}

export const productController = new ProductController();
