import React from 'react';
import fallingWater from '../../../Images/fallingWater.png'
import './TopBanner.css';

const TopBanner = () => {
    return (
        <main className="topBanner container" style={{ height: '600px d-flex align-items-center ' }} >
            <div className="row">
                <div className="col-md-6 col-sm-12 offset-md-1">
                    <img style={{ height: '100%',width:'100%' }} src={fallingWater} alt="" className="img-fluid" />
                </div>
                <div className="col-md-3 col-sm-12 offset-md-1 text-center">
                    <h2>Create your dream project with us</h2>
                    <h6 className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, at? Pariatur nesciunt in ut corporis!</h6>
                    <button className="btn-brand">Book a Meeting</button>
                </div>
            </div>
        </main>
    );
};

export default TopBanner;