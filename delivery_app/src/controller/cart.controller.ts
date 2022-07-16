import {NextFunction, Request, Response} from 'express';

import {ICart} from '../entity/cart';
import {cartService, productService} from '../service';
import {IProduct} from '../entity/product';

class CartController {
    public async createCart(req: Request, res: Response, next: NextFunction): Promise<Response<IProduct> | undefined> {
        try {
            const createdProduct = await cartService.createCart(req.body);
            return res.json(createdProduct);
        } catch (e) {
            next(e);
        }
    }

    public async getCarts(req: Request, res: Response, next: NextFunction): Promise<Response<ICart> | undefined> {
        try {
            const getCart = await cartService.findCarts();
            return res.json(getCart);
        } catch (e) {
            next(e);
        }
    }

    public async getCartByUserId(req: Request, res: Response, next: NextFunction): Promise<Response<ICart> | undefined> {
        try {
            const { userId } = req.params;
            const getCartByUserId = await cartService.findCartById(Number(userId));
            return res.json(getCartByUserId);
        } catch (e) {
            next(e);
        }
    }

    public async deleteCart(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deleteOne = await cartService.deleteCartById(Number(id));
            return res.json(deleteOne);
        } catch (e) {
            next(e);
        }
    }

    public async addProductToCart(req: Request, res: Response, next: NextFunction): Promise<Response<ICart> | undefined> {
        try {
            const {productId} = req.params;
            const {count, userId} = req.body;

            const product = await productService.findProductById(Number(productId));
            let userCart = await cartService.findCartById(Number(userId));

            if (!userCart) {
                userCart = await cartService.createCart({userId});
            }

            const iCart = await cartService.addProductToCart(userCart, {...product}, count);

            await productService.updateProductById({
                id: Number(productId),
                stockCount: Number(product?.stockCount) - Number(count)
            });

            return res.json(iCart);
        } catch (e) {
            next(e);
        }
    }
}

export const cartController = new CartController();
