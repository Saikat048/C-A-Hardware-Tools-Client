import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full mb-16">
            <div id="slide1" className="carousel-item relative w-full max-h-96">
                <img src="https://mhdirect.in/wp-content/uploads/2020/11/products-services.jpg" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <div className='text-center text-primary'>
                    <h1 className='text-5xl font-bold mb-2'>C&A TOOLS</h1>
                    <h3 className='text-3xl font-bold'>HARDWARE-TOOLS FACTORY</h3>
                    </div>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full max-h-96">
                <img src="https://michaelaventrella.files.wordpress.com/2017/07/tools.png" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <div className='text-center text-primary'>
                        <h1 className='text-5xl font-bold MT-2'>C&A TOOLS</h1>
                        <h3 className='text-3xl font-bold'>SINCE 1980</h3>
                    </div>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div> 
        </div>
    );
};

export default Banner;