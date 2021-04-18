import React from 'react';

const TeamDetail = ({team}) => {
    return (
        <div className="card ms-auto shadow-lg" style={{width: "16rem"}}>
            <img style={{height:'60px', width:'60px'}} src={team.image} className="card-img-top mx-auto d-block mt-3 p-1" alt="..." />
            <div className="card-body text-center">
                <h3 className="card-title">{team.name}</h3>
                <small><p className="card-text">{team.email}</p></small>
            </div>
        </div>
    );
};

export default TeamDetail;