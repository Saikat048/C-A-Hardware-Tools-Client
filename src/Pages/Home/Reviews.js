import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../Hooks/ReviewHook';
import Review from './Review';
import { BsArrowRight } from 'react-icons/bs';

const Reviews = () => {
    const [reviews] = useReview();
    return (
        <div>
            <h2 className="text-2xl text-center text-primary font-bold mb-12">Customer Reviews</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 mt-10 mb-20'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
            <div className='flex items-center ml-16 my-16'>
                <Link className='text-2xl text-primary font-bold hover:underline' to="/allreviews">See All Reviews </Link>
                <span className='ml-3 text-2xl text-primary font-bold'><BsArrowRight></BsArrowRight></span>
            </div>
        </div>
    );
};

export default Reviews;