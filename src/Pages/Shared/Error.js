import React from 'react';

const Error = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://media.istockphoto.com/photos/error-404-picture-id497375975" className="w-full max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h2 className='mb-4 fw-bold'>OPPOS, SORRY WE CAN'T FIND THAT PAGE...!</h2>
                    <p>Either something went wrong or the page doesn't exist anymore</p>
                </div>
            </div>
        </div>
    );
};

export default Error;