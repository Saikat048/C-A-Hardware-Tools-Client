import React from 'react';
import useReview from '../Hooks/ReviewHook';
import Review from './Review';

const AllReviews = () => {
    const [reviews] = useReview();
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 mt-10 mb-20'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default AllReviews;