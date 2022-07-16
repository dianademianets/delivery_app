import axios from "axios";

import { mainBackURL } from "../constants";

const axiosTepmlate = axios.create({
    baseURL: mainBackURL,
});

export default axiosTepmlate;
