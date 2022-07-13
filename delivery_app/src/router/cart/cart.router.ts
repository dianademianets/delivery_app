import { Router } from 'express';

import { cartController } from '../../controller';

const router = Router();

router.get('/', cartController.getCarts);
router.delete('/:id', cartController.deleteCart);
router.delete('/', cartController.createCart);
router.post('/:productId', cartController.addProductToCart);

export const cartRouter = router;
