import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';



const textStyle = { border: "4px solid black", padding: '3px' }

const Order = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [serviceData,setServiceData] = useState(null);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        setServiceData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const orderDetails ={
            ...loggedInUser,
            service: serviceData,
            paymentId
        };
        
        
        fetch('http://localhost:5000/addOrder', { 
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
        .then(res => console.log('server side res', res))
    }

    const { id } = useParams();

    const [exactService, setExactService] = useState([]);
    const service = exactService.find(td => td.id == id);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setExactService(data));
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9 row">
                    <div style={{display: serviceData ? 'none': 'block'}} className="col-md-6 ">
                        <form  onSubmit={handleSubmit(onSubmit)}>

                            <input name="name" defaultValue={loggedInUser.displayName} {...register("name")} placeholder="Your Name" />

                            <input name="email" defaultValue={loggedInUser.email} {...register("email")} placeholder="Your Email" />

                            <input name="title" defaultValue={service?.title} {...register("title")} placeholder="service title" />

                            <input name="price" defaultValue={service?.price} {...register("price")} placeholder="service title" />

                            <input type="submit" />
                        </form>
                    </div>
                    
                    
                    <div style={{display: serviceData ? 'block': 'none'}}  className="col-md-6 ">
                        <ProcessPayment handlePayment={handlePaymentSuccess} ></ProcessPayment> 
                    </div>
                    
                      
                </div>
            </div>
        </div>
    );
};

export default Order;