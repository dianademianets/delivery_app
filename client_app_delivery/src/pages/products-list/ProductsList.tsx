import React, {FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {AxiosResponse} from "axios";

import { ProductDetails } from "../../components";
import { productService } from "../../services";
import {IProduct} from "../../interfaces";
import "./productsList.css"

const ProductsList:FC = () => {

    const {shopId} = useParams();
    const [products, setProduct] = useState([]);

    useEffect(() => {
        // @ts-ignore
        productService.getByShopId(shopId).then((value:AxiosResponse) => setProduct(value.data))
    }, [shopId])

    return (
        <div className="products_container__div">
            {products && products.map((product:IProduct)=> <ProductDetails key={product.id} product={product}/>)}
        </div>
    );
};

export default ProductsList;
