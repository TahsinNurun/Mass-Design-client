import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServiceData(data))
    }, [])

    return (
        <section className="container" id="service">
            <div className="text-center mt-5 pt-5">
                <h5>Our Services</h5>
                <h3>We provide turn-key solutions <br/> for all construction projects</h3>
            </div>
            <div className="justify-content-center">
               <div className="w-90 row mt-2 pt-2">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
               </div>
            </div>
            <div className="text-center">
                <button className="btn-brand m-3">Explore More</button>
            </div>
        </section >
    );
};

export default Service;