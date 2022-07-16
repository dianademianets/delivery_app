import { ICartProducts } from "./cartProducts.interface";

export interface ICart {
    id:number;
    userId: number;
    sum: number;
    cartProducts: ICartProducts[];
}
