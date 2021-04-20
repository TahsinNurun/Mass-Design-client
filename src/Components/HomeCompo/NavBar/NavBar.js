import React from 'react';
import logo from '../../../Images/logo.png'
import '../../../App.css';

const NavBar = () => {
    return (
        <div className="container " style={{ height: '100px' }}>
            <div className="row">
                <div className="col-md-2 col-sm-12">
                    <img style={{ height: '10%' }} src={logo} alt="" />
                </div>
                <div className="col-md-10 col-sm-12 ">
                    <ul className="nav justify-content-end m-2">
                        
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#service">Customer Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ms-5" href="/addService">Admin</a>
                        </li>
                        <li className="nav-item">
                            <button className="btn-brand ms-5">login</button>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div >
    );
};

export default NavBar;