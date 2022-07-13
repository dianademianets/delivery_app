"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const service_1 = require("../service");
class UserController {
    async createUser(req, res, next) {
        try {
            const createUser = await service_1.userService.createUser(req.body);
            return res.json(createUser);
        }
        catch (e) {
            next(e);
        }
    }
    async getUsers(req, res, next) {
        try {
            const getAll = await service_1.userService.findUsers();
            return res.json(getAll);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userController = new UserController();
//# sourceMappingURL=user.controller.js.map