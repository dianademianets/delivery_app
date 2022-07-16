import React, {FC, useState} from 'react';

import {IProduct} from "../../interfaces";
import './productCartDetails.css'

const ProductCartDetails: FC<{ product: IProduct }> = ({product}) => {
    const {title, text, price, photos} = product;
    let [num, setNum] = useState(1);
    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    let handleChange = (e: any) => {
        setNum(e.target.value);
    }

    localStorage.setItem('cartsProduct', JSON.stringify(num));

    return (
        <div className='products_wrap'>
            <div  className='button__container'>
                <img className='poster__img' src={`${photos}`}
                     alt={`${title}`}/>
                <div className='productsDetails__div'>
                    <h1><b>{title}</b></h1>
                    <p>{text}</p>
                    <p><b>Ціна: </b>{price} грн.</p>
                    <div className="input-group-prepend">
                    <div>
                        <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                    </div>
                    <input type="text" className="form-control" value={num} onChange={handleChange}/>
                    <div>
                        <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};


export default ProductCartDetails;
