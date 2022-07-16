import {NextFunction, Request, Response} from 'express';

import {IUser} from '../entity/user';
import {userService} from '../service';

class UserController {
    public async createUser(req: Request, res: Response, next: NextFunction): Promise<Response<IUser> | undefined> {
        try {
            const createUser = await userService.createUser(req.body);
            return res.json(createUser);
        } catch (e) {
            next(e);
        }
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<Response<IUser> | undefined> {
        try {
            const getAll = await userService.findUsers();
            return res.json(getAll);
        } catch (e) {
            next(e);
        }
    }

    public async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            const deleteOne = await userService.deleteUserById(Number(id));
            return res.json(deleteOne);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
