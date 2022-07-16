import { IProduct } from "./products.interface";

export interface IShop{
    id:number;
    title: string;
    products: IProduct[];
}
