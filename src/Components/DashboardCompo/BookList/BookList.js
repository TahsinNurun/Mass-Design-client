import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookCard from '../BookCard/BookCard';
import { UserContext } from '../../../App';

const BookList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('http://localhost:5000/orderBySpecificEmail',{
            method: 'POST',
            headers: {'content-type': 'application/json'},
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setOrders(data))
    }, [])

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9 row">
                    <div>
                        <h2>{loggedInUser.name} have {orders.length} order</h2>
                    </div>
                    <div className="justify-content-center">
                        <div className="w-90 row mt-2 pt-2">
                            {
                                orders.map(order => <BookCard order={order}></BookCard>)
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookList;