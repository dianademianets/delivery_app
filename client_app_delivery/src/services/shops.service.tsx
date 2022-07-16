import axios from "./axios";

import {backURL} from "../constants";
import { IShop } from "../interfaces";

console.log(axios.get<IShop[]>(backURL.shops))

export const shopsService = {
    getAll: () => axios.get<IShop[]>(backURL.shops),

}
