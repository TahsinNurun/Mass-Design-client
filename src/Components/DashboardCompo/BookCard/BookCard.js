import React from 'react';

const BookCard = ({ order }) => {
    return (
                <div className="card my-3 shadow-lg" style={{width: "14rem"}}>
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h6 className="card-title">{order.title}</h6>
                    <p className="card-text">Service Charge ${order.price}</p>
                </div>
            </div>
           
    );
};

export default BookCard;