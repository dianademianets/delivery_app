import { Router } from 'express';

import { shopController } from '../../controller';

const router = Router();

router.get('/', shopController.getAllShops);
router.post('/', shopController.createShop);
router.get('/:id', shopController.getShop);
router.put('/:id', shopController.updateShop);
router.delete('/:id', shopController.deleteShop);

export const shopRouter = router;
