import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import BookCard from '../BookCard/BookCard';
import { UserContext } from '../../../App';

const BookList = () => {
    const [orders, setOrders] = useState([]);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    useEffect(() => {
        fetch('http://localhost:5000/orders?email='+loggedInUser.emails)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-2 ">
                    <Sidebar></Sidebar>
                </div>

                <div className="col-md-9 row">
                    <div>
                        <h2>you have {orders.length} order</h2>
                    </div>
                    <div>
                        {
                            orders.map(order => <BookCard order={order}></BookCard>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BookList;