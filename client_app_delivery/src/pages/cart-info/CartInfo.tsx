import React, {FC, useEffect, useState} from 'react';

import {cardsService} from "../../services";
import {AxiosResponse} from "axios";
import {ICart} from "../../interfaces";
import {CartDetails} from "../../components";


const CartInfo :FC = () => {
    const [carts, setCart] = useState([]);
    const productId=localStorage.getItem('productId')
    const userId=localStorage.getItem('userId')
    const count=localStorage.getItem('cartsProduct')
    console.log(productId,userId,count)
    useEffect(() => {
        // @ts-ignore
        cardsService.addProductToCart(userId,productId,count).then((value:AxiosResponse) => setCart(value.data))
    }, [productId,userId,count])


    return (
        <div className="products_container__div">
            {carts && carts.map((cart:ICart)=> <CartDetails key={cart.id} cart={cart}/>)}
            <button>Submit</button>
        </div>
    );
};


export default CartInfo;
