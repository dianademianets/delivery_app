import React, {FC, useState} from "react";

import './historyInfo.css'
import {usersService} from "../../services";
import {AxiosResponse} from "axios";
import {useForm} from "react-hook-form";
import {IUser} from "../../interfaces";

const HistoryInfo: FC = () => {

    const [history, setHistory] = useState<IUser>();
    const {register, handleSubmit} = useForm();

    const onSubmit = (data: any) => {
        usersService.getCartUserByParams(data.email).then((value: AxiosResponse) => {
            setHistory(value.data)
            console.log(value.data)
        })
    }

    return (
        <div className='header__wrap'>
            Search :
            <form onSubmit={handleSubmit(onSubmit)} className='form__wrap'>
                <input {...register("email")} className='form-control fs-4' placeholder='Enter email..'/>
                <button type="submit" className='btn  btn-outline-light fs-4'>Search</button>
            </form>
            <div className='div__wrap-search_results'>
                <div className="user_form">
                    <div> {history?.firstName} </div>
                    <div>{history?.lastName} </div>
                    <div>{history?.phone} </div>
                </div>
                <div>
                    {history && history?.carts?.map((value) =>
                        <div>Total: {value.sum} UAN</div>
                    )}</div>
            </div>
        </div>
    );
};

export default HistoryInfo;
