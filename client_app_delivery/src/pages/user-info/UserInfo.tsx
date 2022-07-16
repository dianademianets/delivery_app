import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {AxiosResponse} from "axios";

import {UserValidator} from "../../validators/user.validator";
import {IProduct, IUser} from '../../interfaces';
import './userInfo.css'
import {productService, usersService} from "../../services";
import {ProductCartDetails} from "../../components";
import {CartInfo} from "../cart-info";

const UserInfo: FC = () => {
    const [product, setProduct] = useState<IProduct>();
    const [user, setUser] = useState<IUser>();
    let productId = localStorage.getItem("productId")

    const { register, handleSubmit } = useForm();
    const onSubmit = (data:any) => localStorage.setItem('user', JSON.stringify(data));
    const userData = localStorage.getItem("user")

    useEffect(() => {
        // @ts-ignore
        productService.getById(productId).then((value: AxiosResponse) => setProduct(value.data))
        // @ts-ignore
        usersService.createUser(userData).then((value: AxiosResponse) => setUser(value.data))

    }, [productId, userData])
    console.log(setUser)

    localStorage.setItem('userId', JSON.stringify(user?.id))
    return (
        <div className='user_wrap'>
            <div>
                <form className="carts_container" onSubmit={handleSubmit(onSubmit)}>
                    <label>First Name:</label>
                    <input {...register("firstName")} placeholder="First Name"/>
                {/*    {errors.firstName && <span>{errors.firstName.message}</span>}*/}
                    <label>Last Name:</label>
                    <input {...register("lastName")} placeholder="Last Name"/>
                {/*    {errors.lastName && <span>{errors.lastName.message}</span>}*/}
                    <label>Age:</label>
                    <input type="number" {...register("age")} placeholder="Age "/>
                {/*    {errors.age && <span>{errors.age.message}</span>}*/}
                    <label>Phone:</label>
                    <input {...register("phone")} placeholder="Phone"/>
                {/*    {errors.phone && <span>{errors.phone.message}</span>}*/}
                    <label>Email:</label>
                    <input type="email" {...register("email")} placeholder="Email"/>
                {/*    {errors.email && <span>{errors.email.message}</span>}*/}
                    <input type="submit"/>
                </form>
            </div>
            <div className='carts_container__div'>
                {product && <ProductCartDetails key={product.id} product={product}/>}
                <div>
                    <CartInfo/>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
