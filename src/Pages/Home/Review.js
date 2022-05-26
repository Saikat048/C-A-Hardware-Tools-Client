import React from 'react';

const Review = ({ review }) => {
    // console.log(review)
    return (
        <div>
            <div className="card w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="avatar placeholder">
                        <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span className="text-3xl"></span>
                        </div>
                    </div>
                    <h2 className="card-title">{review.name}</h2>
                    <p>{review.description}</p>
                    <p><b>{review.email}</b></p>
                    <p>Rating: {review.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;