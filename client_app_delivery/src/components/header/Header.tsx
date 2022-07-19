import React, {FC} from "react";
import {NavLink} from "react-router-dom";

import "./header.css"

const Header: FC = () => {
    return (
        <div className="header">
            <NavLink to="/shops">Shop</NavLink>
            <NavLink to="/users">Shopping Cart</NavLink>
            <NavLink to="/history">History</NavLink>
            <div>
                <button className=" btn btn-outline-light fs-6"
                        onClick={() => document.body.classList.toggle("light-theme")}>Toggle Light
                </button>
            </div>
        </div>
    );
};

export default Header;

