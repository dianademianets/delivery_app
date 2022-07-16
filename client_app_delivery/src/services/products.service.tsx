import axios from "./axios";
import {IProduct} from "../interfaces";
import { backURL } from "../constants";

export const productService = {
    getByShopId: (shopId:number) => axios.get<IProduct>(backURL.products+ `${shopId}`),
    getById: (id:number) => axios.get<IProduct>(backURL.products+ `product/${id}`),
}
