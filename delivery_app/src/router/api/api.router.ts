import { Router } from 'express';

import { productRouter } from '../product';
import { shopRouter } from '../shop';
import { cartRouter } from '../cart';
import { userRouter } from '../user';

const router = Router();

router.use('/shops', shopRouter);
router.use('/users', userRouter);
router.use('/products', productRouter);
router.use('/carts', cartRouter);

export const apiRouter = router;
