import React, {FC, useState} from "react";
import {useForm} from "react-hook-form";
import {AxiosResponse} from "axios";

import "./userInfo.css"
import {usersService} from "../../services";
import {IUser} from "../../interfaces";
import {ProductInfo} from "../product-info";


const UserInfo: FC = () => {

    const [users, setUser] = useState<IUser>();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        usersService.createUser(data).then((value: AxiosResponse) => setUser(value.data))
    }
    localStorage.setItem("users", JSON.stringify(users?.id))
    console.log(users)
    return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="user_wrap">
                    <div className="user_form">
                    <label>First Name:</label>
                    <input {...register("firstName")} placeholder="First Name"/>
                    <label>Last Name:</label>
                    <input {...register("lastName")} placeholder="Last Name"/>
                    <label>Phone:</label>
                    <input {...register("phone")} placeholder="Phone"/>
                    <label>Email:</label>
                    <input type="email" {...register("email")} placeholder="Email"/>
                </div>
                <div className="carts_container__div">
                    <ProductInfo/>
                </div>
                </div>
            </form>

    );
};

export default UserInfo;
