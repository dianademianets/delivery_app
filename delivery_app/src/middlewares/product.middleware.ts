import {Response, NextFunction} from 'express';

import {ErrorHandler} from '../errors';
import {productValidator} from '../validators/product.validators';
import {IRequestExtended} from "../interfaces/request.interface";

class ProductMiddleware {
  public  async validateCreateProduct(
        req: IRequestExtended,
        res: Response,
        next: NextFunction,
    ) {
        try {
            const {error, value} = await productValidator.createProduct.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }

            req.product = value;
            next();
        } catch (e) {
            next(e);
        }
    }

  public async updateProduct(req: IRequestExtended, res: Response, next: NextFunction) {
        try {
            const {error, value} = await productValidator.updateProduct.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.details[0].message));
                return;
            }
           req.product = value;
            next();
        } catch (e) {
            next(e);
        }
    }
}

export const productMiddleware = new ProductMiddleware();
