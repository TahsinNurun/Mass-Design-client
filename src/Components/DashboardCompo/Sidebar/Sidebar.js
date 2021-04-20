import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faPlus, faPen, faUnlock, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';


const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://limitless-dusk-84969.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

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
                            <Link to="/addReview">
                                <FontAwesomeIcon icon={faQuoteRight} /><span> Add review</span>
                            </Link>
                        </li>

                        {isAdmin && <div>
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
                        </div>}


                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;