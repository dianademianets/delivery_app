import axios from "./axios";

import {backURL} from "../constants";
import { IShop } from "../interfaces";

export const shopsService = {
    getAll: () => axios.get<IShop[]>(backURL.shops),

}
