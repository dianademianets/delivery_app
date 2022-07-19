import React, {FC, useEffect, useState} from "react";
import {AxiosResponse} from "axios";

import {IProduct} from "../../interfaces";
import {productService} from "../../services";
import {ProductCartDetails} from "../../components";
import {CartInfo} from "../cart-info";
import './productInfo.css'

const ProductInfo: FC = () => {

    const [product, setProduct] = useState<IProduct>();
    const productId = JSON.parse(localStorage.getItem("productId") || "{}")
    const count = localStorage.getItem("cartsProduct")

    useEffect(() => {
        productService.getById(productId).then((value: AxiosResponse) => setProduct(value.data))
    }, [productId])

    let sum = 0
    sum = Number(product?.price) * Number(count) + sum;

    return (
        <div>
            <div>
                {product && <ProductCartDetails key={product.id} product={product}/>}</div>
            <div className="wrap_product">
                <div><b>До сплати: {sum} грн.</b></div>
                <CartInfo/>
            </div>
        </div>
    );
};


export default ProductInfo;
