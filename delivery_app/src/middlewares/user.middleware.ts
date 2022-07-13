import {Response, NextFunction} from 'express';

import {ErrorHandler} from '../errors';
import {userValidator} from '../validators/user.validators';
import {IRequestExtended} from "../interfaces/request.interface";

class UserMiddleware {
  public async validateCreateUser(
        req: IRequestExtended,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const {error, value} = await userValidator.createUser.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }
            req.user = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const userMiddleware = new UserMiddleware();
