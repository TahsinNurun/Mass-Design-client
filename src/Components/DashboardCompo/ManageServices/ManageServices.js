import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const ManageServices = ({ service }) => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('https://limitless-dusk-84969.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    const deleteService = id =>{
        fetch(`https://limitless-dusk-84969.herokuapp.com/delete/${id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            console.log('deleted successfully')
        })
    }

    return (
        <div className="container">
            <div className="row ">
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10" >
                    <table className="text-center table">
                        <thead>
                            <tr>
                                <th className="text-secondary m-2" scope="col">TITLE</th>
                                <th className="text-secondary m-2" scope="col">PRICE</th>
                                <th className="text-secondary m-2" scope="col">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                serviceData.map((service, index) =>
                                    <tr>
                                        <td className="m-2">{service.title}</td>
                                        <td className="m-2">${service.price}</td>
                                        <td className="m-2"><button onClick={() => deleteService(service._id)} className="btn-brand m-2">delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageServices;