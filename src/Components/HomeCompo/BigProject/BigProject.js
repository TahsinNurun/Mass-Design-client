import React from 'react';
import mosque from '../../../Images/mosque.png'

const BigProject = () => {
    return (
        <main className="container mt-5" style={{ height: '600px d-flex align-items-center ' }} >
            <div className="row">
                
                <div className="col-md-3 col-sm-12 offset-md-1 text-center">
                    <h3>Visit our public building</h3>
                    <p className="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, at? Pariatur nesciunt in ut corporis!</p>
                    <button className="btn-brand">Find location</button>
                </div>
                <div className="col-md-6 col-sm-12 offset-md-1">
                    <img style={{ height: '80%',width:'80%' }} src={mosque} alt="" className="img-fluid" />
                </div>
            </div>
        </main>
    );
};

export default BigProject;