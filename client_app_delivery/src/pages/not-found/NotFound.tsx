import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './notFound.css'

const NotFound: FC= () => {
    return (
        <div className='not-found__div'>
            <div className='not-found__text'>404 <br/> Page not found!</div>
            <NavLink className='link__button' to={'/shops'}> Return to shops </NavLink>
        </div>
    );
};

export default NotFound;
