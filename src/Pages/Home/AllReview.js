import React from 'react';

const AllReview = ({ review }) => {
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
                    <p>{review.review}</p>
                    <p>{review.email}</p>
                    <p>Rating: {review.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default AllReview;