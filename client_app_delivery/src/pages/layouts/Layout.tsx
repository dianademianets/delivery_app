import React, {FC} from 'react';
import { Outlet } from 'react-router-dom';

import  './layouts.css';
import Header from "../../components/header/Header";

const Layout:  FC = () => {
    return (
        <>
            <div className="header__div">
            <Header/>
            </div>
            <div className="outlet__div">
                <Outlet/>
            </div>
        </>
    );
};

export default Layout;
