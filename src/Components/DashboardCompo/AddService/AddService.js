import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
   
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                {isAdmin && <div className="col-md-10">  
                    <AddServiceForm></AddServiceForm>                   
                </div>}
            </div>
        </div>
    );
};

export default AddService;