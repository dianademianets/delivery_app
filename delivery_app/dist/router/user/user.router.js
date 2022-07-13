"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const controller_1 = require("../../controller");
const middlewares_1 = require("../../middlewares");
const router = (0, express_1.Router)();
router.post('/', middlewares_1.userMiddleware.validateCreateUser, controller_1.userController.createUser);
router.get('/', controller_1.userController.getUsers);
exports.userRouter = router;
//# sourceMappingURL=user.router.js.map