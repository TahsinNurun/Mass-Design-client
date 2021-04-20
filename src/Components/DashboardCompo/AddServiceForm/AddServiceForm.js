import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddServiceForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [image, setImage] = useState(null);
    const onSubmit = data => {

        const eventData ={
            title: data.title,
            image: image,
            price: data.price,
            description: data.description
        };
        const url =`https://limitless-dusk-84969.herokuapp.com/addService`;
        // console.log(eventData)
        fetch(url,{
            method: 'POST',
            headers:{ 
                'content-type':'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response',res))
    };

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
        <div className="container m-5">
            <div className="mt-5 mb-5">
                <h4>menu title:Add Service</h4>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}  style={{border: '1px solid gray', bordeRadius: '10px'}}>
                {/* register your input into the hook by invoking the "register" function */}
                <p className="m-1">TITLE</p>
                <input type="text"  {...register("title")} className="m-1" placeholder="title"/>
                
                <br/>
                <p className="m-1">UPLOAD IMAGE</p>
                <input type="file" onChange={handleImageUpload}  className="m-1"  />
                
                <br/>
                <p className="m-1">PRICE</p>
                <input type="number"  defaultValue="0" {...register("price")} className="m-1" placeholder="price"/>
                
                <br/>
                <p className="m-1">DESCRIPTION</p>
                <input type="text"   {...register("description")} className="m-1" placeholder="description"/>
                
                <br/>
                <input type="submit"  className="m-1 text-center" />
            </form>

        </div>
    );
};

export default AddServiceForm;