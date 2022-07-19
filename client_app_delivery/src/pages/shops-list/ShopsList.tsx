import { AxiosResponse } from "axios";
import React, {FC, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Shop} from "../../components";
import {IShop} from "../../interfaces";
import {shopsService} from "../../services";
import "./shopsList.css"

const ShopsList: FC = () => {

    const [shops, setShops] = useState([]);

    useEffect(() => {
        shopsService.getAll().then((value:AxiosResponse) => {
            setShops(value.data)
        })
    }, [])

    return (
        <div  className="shops_container">
            <div className="shops_container__div">
                <h1><b>Shops</b></h1>
                {shops.map((shop: IShop) => <Shop key={shop.id} shop={shop}/>)}
            </div>
            <div className="products_container__div">
                <Outlet/>
            </div>
        </div>
    );
};

export default ShopsList;
