import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IShop } from '../../interfaces';
import './shop.css'

const Shop:FC <{shop:IShop}>= ({shop}) => {
    const navigate = useNavigate();
    const {id,title}=shop;

    return (
            <div className='shop_container__div'>
                <button className="btn btn-dark" onClick={() => navigate(`${id.toString()}/products`)}>{title}</button>
            </div>
    );
};

export default Shop;
