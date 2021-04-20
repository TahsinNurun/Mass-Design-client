import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = ({ service }) => {
    return (
        <div className="card ms-auto my-3 shadow-lg" style={{width: "16rem"}}>
            <img style={{height:'40px', width:'40px'}} src={service.image} className="card-img-top mx-auto d-block mt-3 p-1" alt="..." />
            <div className="card-body text-center">
                <h3 className="card-title">{service.title}</h3>
                <h5>${service.price}</h5>
                <small><p className="card-text">{service.description}</p></small>
                <Link to={`/order/${service._id}`} >
                    <button className="btn-brand m-5">Book a meeting</button>
                </Link>     
            </div>
        </div>
    );
};

export default ServiceDetail;