import React from 'react';

const Supplier = () => {
    return (
        <div className='flex justify-center mb-12'>
            <div class="card w-100 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h3 className='text-center text-2xl text-primary mb-8'>Send your message to this supplier</h3>
                    <form>
                        <label className='block'>From: </label>
                        <input type="email" placeholder="Enter your email address" class="input input-bordered w-full max-w-xs mt-2" required />

                        <div className='flex items-center mt-4 mb-3'>
                            <label className='mr-7'>To: </label>
                            <div class="avatar">
                                <div class="w-12 rounded-xl">
                                    <img src="https://image.made-in-china.com/336f0j00YaGQkmzRTTov/made-in-china.webp" />
                                </div>
                            </div>
                            <h4 className='ml-3'>Mr. Daniel Liu</h4>
                        </div>

                        <label>Message: </label>
                        <textarea class="textarea textarea-bordered mb-6 lg:w-full max-w-md mt-2" placeholder="Enter your message" required></textarea>

                        <input type="submit" value="Submit" className="btn btn-primary max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Supplier;