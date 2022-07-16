import React, {FC} from 'react';

import {IProduct} from '../../interfaces';
import './productDetails.css'

const ProductDetails: FC<{ product: IProduct }> = ({product}) => {
    const {id, title, text, price, stockCount, photos} = product;

    return (
        <div className='products_wrap'>
            <div className='button__container'>
                    <img className='poster__img' src={`${photos}`}
                         alt={`${title}`}/>
                    <div className='productsDetails__div'>
                        <h1><b>{title}</b></h1>
                        <p>{text}</p>
                        <p><b>Ціна: </b>{price} грн.</p>
                        <p><b>В наявності:</b> <br/>{stockCount}</p>
                        <button className="btn btn-dark" onClick={()=>localStorage.setItem('productId', JSON.stringify(Number(id)))}>Add to cart</button>
                    </div>
                </div>
            </div>
    );
};

export default ProductDetails;
