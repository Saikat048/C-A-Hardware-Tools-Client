import React from 'react';

const Summary = () => {
    return (
        <div className='container mx-auto mb-28'>
            <div className="stats shadow flex justify-center mb-20">

                <div className="stat place-items-center  grid grid-cols-1">
                    <div className="stat-title">Customers</div>
                    <div className="stat-value mt-2 mb-6">100+</div>
                </div>

                <div className="stat place-items-center grid grid-cols-1">
                    <div className="stat-title">Annual revenue</div>
                    <div className="stat-value text-secondary mt-2 mb-6">120M+</div>
                </div>

                <div className="stat place-items-center grid grid-cols-1">
                    <div className="stat-title">Reviews</div>
                    <div className="stat-value mt-2 mb-6">33K+</div>
                </div>
                <div className="stat place-items-center grid grid-cols-1">
                    <div className="stat-title">Tools</div>
                    <div className="stat-value mt-2 mb-6">50+</div>
                </div>

            </div>
            <div class="card w-100 bg-base-100 shadow-xl"> 
                   <div className='grid grid-cols-4 items-center'>
                   <div class="card-body col-span-2">
                        <h2 className='text-3xl font-bold text-primary'>Have any question about us or ger a products request ? </h2>
                        <h4 className='text-2xl font-bold'>Don't hesitate to contact us</h4>
                    </div> 
                       <div className='col-span-2 justify-end'>
                       <button className='bg-primary px-4 py-2 rounded-md mr-3'>Request For Quote</button>
                        <button className='bg-accent text-white px-4 py-2 rounded-md'>Contact Us</button>
                       </div>
                   </div>
            </div>
        </div>
    );
};

export default Summary;