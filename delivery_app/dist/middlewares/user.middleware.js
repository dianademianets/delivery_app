"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMiddleware = void 0;
const errors_1 = require("../errors");
const user_validators_1 = require("../validators/user.validators");
class UserMiddleware {
    async validateCreateUser(req, res, next) {
        try {
            const { error, value } = await user_validators_1.userValidator.createUser.validate(req.body);
            if (error) {
                next(new errors_1.ErrorHandler(error.details[0].message));
                return;
            }
            req.user = value;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.userMiddleware = new UserMiddleware();
//# sourceMappingURL=user.middleware.js.map