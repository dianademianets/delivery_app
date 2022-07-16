import React, {FC} from 'react';

import {ICart} from '../../interfaces';
import './cartDetails.css'

const CartDetails: FC<{ cart: ICart }> = ({cart}) => {
    const {sum} = cart;
    return (
        <div className='cart_wrap'>
            <h1><b>Сума: {sum} грн.</b></h1>
        </div>
    );
};

export default CartDetails;
