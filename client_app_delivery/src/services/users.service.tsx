import axios from "./axios";

import {IUser} from "../interfaces";
import {backURL} from "../constants";

export const usersService = {
    createUser:(user:IUser)=>axios.post<IUser>(backURL.users, {user}),
}
