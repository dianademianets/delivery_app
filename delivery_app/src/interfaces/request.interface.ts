import { Request } from 'express';

import { IProduct } from '../entity/product';
import { IUser } from '../entity/user';


export interface IRequestExtended extends Request{
    user? : IUser,
    product?: IProduct,
}
