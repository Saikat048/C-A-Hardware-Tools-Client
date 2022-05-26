import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddAReview = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    toast('Order success'); 
                    reset();
                }
            })

    }


    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center text-secondary mb-8 font-bold">Add A Review</h2>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <input className='input input-bordered w-full mb-2' placeholder='Email' {...register("email", { required: true, maxLength: 20 })} />
                    <textarea className='textarea textarea-bordered w-full mb-2' placeholder='Description' {...register("description",)} />
                    <input className='input input-bordered w-full mb-2' placeholder='Rating' {...register("rating", { required: true, maxLength: 20 })} />
                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />

                </form>
                <ToastContainer />
            </div>
        </div>
    );
};

export default AddAReview;