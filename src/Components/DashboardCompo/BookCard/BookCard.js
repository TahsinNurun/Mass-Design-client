import React from 'react';

const BookCard = ({ order }) => {
    return (
        
            
             
                <div className="card ms-auto my-3 shadow-lg" style={{width: "14rem"}}>
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                    <h6 className="card-title">{order.name}'s orders:</h6>
                    <p className="card-text">Order Detail{order.description}</p>
                </div>
            </div>
           
    );
};

export default BookCard;