import axios from "./axios";

import {ICart} from "../interfaces";
import {backURL} from "../constants";

export const cardsService = {
    getAll: () => axios.get<ICart[]>(backURL.carts),
    getCardByUserId: (userId: number) => axios.get<ICart>(backURL.carts + {userId}),
    addProductToCart: (userId: number, productId: number, count: number) => axios.post<ICart>(backURL.carts + productId, {
        userId,
        count
    }),
}
