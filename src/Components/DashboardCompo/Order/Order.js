import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';



const textStyle = { border: "4px solid black", padding: '3px' }

const Order = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [serviceData,setServiceData] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        setServiceData(data);
        console.log(data);
    };

    const handlePaymentSuccess = paymentId => {
        // const {title, price} = serviceData;
        // console.log(serviceData);
        const orderDetails ={
            ...loggedInUser,
            title: service.title,
            price: service.price,
            paymentId
        };
        
        
        fetch('https://limitless-dusk-84969.herokuapp.com/addOrder', { 
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify(orderDetails)
        })
        .then(res => console.log('server side res', res))
    }

    const {_id} = useParams();
    console.log(_id);

    const [exactService, setExactService] = useState([]);
    console.log(exactService);
    const service = exactService.find(td => td._id == _id);
    useEffect(() => {
        setServiceData(service); 
    }, []);
    

    useEffect(() => {
        fetch('https://limitless-dusk-84969.herokuapp.com/services')
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
                        <h4>{service?.title}</h4>
                        <form  onSubmit={handleSubmit(onSubmit)}>

                            {/* <input name="name" defaultValue={loggedInUser.displayName} {...register("name")} placeholder="Your Name" />

                            <input name="email" defaultValue={loggedInUser.email} {...register("email")} placeholder="Your Email" /> */}

                            <input  defaultValue={service?.title} {...register("title")} placeholder="service title" />

                            <input  defaultValue={service?.price} {...register("price")} placeholder="service price" />

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