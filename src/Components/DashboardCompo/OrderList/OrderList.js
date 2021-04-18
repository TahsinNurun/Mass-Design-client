import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

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
                                <th className="text-secondary m-2" scope="col">NAME</th>
                                <th className="text-secondary m-2" scope="col">EMAIL ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) =>
                                    <tr>
                                        <td className="m-2">{order.title}</td>
                                        <td className="m-2">${order.price}</td>
                                        <td className="m-2">{order.email}</td>
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

export default OrderList;