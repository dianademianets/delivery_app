import { Router } from 'express';

import { userController } from '../../controller';
import {userMiddleware} from "../../middlewares";

const router = Router();

router.post('/', userMiddleware.validateCreateUser, userController.createUser);
router.get('/', userController.getUsers);

export const userRouter = router;
