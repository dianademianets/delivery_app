import { NextFunction, Request, Response } from 'express';

import { IShop } from '../entity/shop';
import { shopService } from '../service';

class ShopController {
    public async getAllShops(req: Request, res: Response, next: NextFunction): Promise<Response<IShop> | undefined> {
        try {
            const getAll = await shopService.findShops();
            return res.json(getAll);
        } catch (e) {
            next(e);
        }
    }

    public async createShop(req: Request, res: Response, next: NextFunction): Promise<Response<IShop> | undefined> {
        try {
            const createdShop = await shopService.createdShop(req.body);
            return res.json(createdShop);
        } catch (e) {
            next(e);
        }
    }

    public async getShop(req: Request, res: Response, next: NextFunction): Promise<Response<IShop> | undefined> {
        try {
            const { id } = req.params;
            const getAll = await shopService.findShopById(Number(id));
            return res.json(getAll);
        } catch (e) {
            next(e);
        }
    }

    public async updateShop(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const updateOne = await shopService.updateShopById(Number(id), req.body);
            return res.json(updateOne);
        } catch (e) {
            next(e);
        }
    }

    public async deleteShop(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;
            const deleteOne = await shopService.deleteShopById(Number(id));
            return res.json(deleteOne);
        } catch (e) {
            next(e);
        }
    }
}

export const shopController = new ShopController();
