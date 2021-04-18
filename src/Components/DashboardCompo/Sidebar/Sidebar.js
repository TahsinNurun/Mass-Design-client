import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faPen, faUnlock,  faQuoteRight } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div >
            <div>
                <div className=" background sidebar d-flex flex-column justify-content-between m-5" style={{ height: "100vh" }}>
                    <ul className="list-unstyled" >
                        <li >
                            <Link to="/bookList">
                                <FontAwesomeIcon icon={faList} /> <span> Book List</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addService">
                                <FontAwesomeIcon icon={faPlus} /><span> Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/manageServices">
                                <FontAwesomeIcon icon={faPen} /><span> Manage Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin">
                                <FontAwesomeIcon icon={faUnlock} /><span> Make Admin</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to="/orderList">
                                <FontAwesomeIcon icon={faList} /><span> Order list</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/addReview">
                                <FontAwesomeIcon icon={faQuoteRight} /><span> Add review</span>
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;