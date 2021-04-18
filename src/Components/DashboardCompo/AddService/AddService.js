import React from 'react';
import AddServiceForm from '../AddServiceForm/AddServiceForm';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">  
                    <AddServiceForm></AddServiceForm>                   
                </div>
            </div>
        </div>
    );
};

export default AddService;