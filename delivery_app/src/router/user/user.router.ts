import { Router } from 'express';

import { userController} from '../../controller';
import {userMiddleware} from "../../middlewares";

const router = Router();

router.post('/', userMiddleware.validateCreateUser, userController.createUser);
router.get('/', userController.getUsers);
router.get('/search/:email', userController.getCartUserByParams);
router.delete('/:id', userController.deleteUser);

export const userRouter = router;
