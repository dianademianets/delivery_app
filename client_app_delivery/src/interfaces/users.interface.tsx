import { ICart } from "./carts.interface";

export interface IUser {
    id:number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    carts: ICart[];
}
