import axios from "./axios";
import {ICart, IProduct, IUser} from "../interfaces";
import {backURL} from "../constants";

export const cardsService = {
    getAll: () => axios.get<ICart[]>(backURL.carts),
    getCardByUserId: (userId:number) => axios.get<ICart>(backURL.carts+ {userId}),
    addProductToCart: (productId:ICart) => axios.post<ICart>(backURL.carts + {productId}),
}
