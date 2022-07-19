import React, {FC} from "react";
import {AxiosResponse} from "axios";

import {cardsService} from "../../services";

const CartInfo :FC = () => {

    const productId=localStorage.getItem("productId")
    const user= localStorage.getItem("users")
    const count=localStorage.getItem("cartsProduct")
    console.log(productId, user,count)
    cardsService.addProductToCart(Number(user),Number(productId),Number(count)).then((value:AxiosResponse) => console.log(value.data))

    return (
        <div >
            <button type="submit" className="btn btn-dark">Submit</button>
        </div>
    );
};

export default CartInfo;
