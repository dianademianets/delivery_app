import { Router } from 'express';

import { cartController } from '../../controller';

const router = Router();

router.get('/', cartController.getCarts);
router.get('/cart/:userId', cartController.getCartByUserId);
router.delete('/delete/:id', cartController.deleteCart);
router.delete('/', cartController.createCart);
router.post('/:productId', cartController.addProductToCart);

export const cartRouter = router;
