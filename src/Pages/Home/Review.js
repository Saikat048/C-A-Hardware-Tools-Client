import React from 'react';

const Review = ({ review }) => {
    console.log(review)
    return (
        <div>
            <div class="card w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
                            <span class="text-3xl"></span>
                        </div>
                    </div>
                    <h2 class="card-title">{review.name}</h2>
                    <p>{review.description}</p>
                    <p><b>{review.email}</b></p>
                    <p>Rating: {review.rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;