"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const repositories_1 = require("../../repositories");
class UserService {
    async createUser(user) {
        return repositories_1.userRepository.createUser({ ...user });
    }
    async findUsers() {
        return repositories_1.userRepository.findUsers();
    }
}
exports.userService = new UserService();
//# sourceMappingURL=user.service.js.map