import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddReview = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            email: data.email,
            review: data.review,
            image: image
        };
        const url = `https://limitless-dusk-84969.herokuapp.com/addReview`

        console.log(eventData);
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side res',res))
    };

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [image, setImage] = useState(null);

    const handleImageUpload = event => {
        // console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '51090633bdff019a70832aedeb5b330d');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                // console.log(response.data.data.display_url);
                setImage(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container">
            <div className="row justify-content-between">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                    <h5>Hi!{loggedInUser.displayName}</h5>
                    <h6>Please add a review</h6>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <br/>
                        <p>Email</p>
                        <input type="email" {...register("email")} />
                        
                        <p>Name</p>
                        <input type="name" {...register("name")} />
                       
                        <p>Review</p>
                        <input type="review" {...register("review")} />
                        
                        <p>Upload your photo</p>
                        <input type="file" onChange={handleImageUpload} />
                        
                        <input type="submit" className="mt-3"/>
                        <br/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;