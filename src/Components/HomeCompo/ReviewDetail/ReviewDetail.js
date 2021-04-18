import React from 'react';

const ReviewDetail = ({review}) => {
    return (
        <div className="card ms-auto" style={{width: "16rem"}}>
            <img src={review.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">{review.email}</p>
                <h5 className="card-title">{review.name}</h5>
                <p className="card-text">{review.review}</p>
            </div>
        </div>
    );
};

export default ReviewDetail;