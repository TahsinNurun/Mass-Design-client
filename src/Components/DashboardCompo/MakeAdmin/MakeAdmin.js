import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const adminData ={
            name: data.name,
            email: data.email
        };
        const url = `https://limitless-dusk-84969.herokuapp.com/addAdmin`

        fetch(url, {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(adminData)
        })
        .then(res => console.log('server side res', res))
    };
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br/>
                        <p>Email</p>
                        <input type="email" {...register("email")} />
                        <input type="submit" className="mt-3"/>
                        <br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;