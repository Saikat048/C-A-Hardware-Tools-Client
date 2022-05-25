import React from 'react';
import { useForm } from 'react-hook-form';

const AddAReview = () => {


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {


    }


    return (

        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-2xl text-center text-secondary mb-8 font-bold">Add A Review</h2>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <input className='input input-bordered w-full mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                    <textarea className='textarea textarea-bordered w-full mb-2' placeholder='Description' {...register("description",)} />
                    <div className='flex items-center my-4'>
                        <div>
                            <p>Rating : </p>
                        </div>
                        <div className="rating rating-sm rating-half">
                            <input type="radio" name="rating-10" className="rating-hidden" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" checked />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-1" />
                            <input type="radio" name="rating-10" className="bg-green-500 mask mask-star-2 mask-half-2" />
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />

                </form>

            </div>
        </div>
    );
};

export default AddAReview;