import {Router} from 'express';

import {productController} from '../../controller';
import {productMiddleware} from "../../middlewares";

const router = Router();

router.get('/', productController.getProducts);
router.get('/:shopId', productController.getProductByShopId);
router.get('/product/:id', productController.getProductById);
router.post('/', productMiddleware.validateCreateProduct, productController.createProduct);
router.patch('/product/:id', productMiddleware.updateProduct, productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

export const productRouter = router;
