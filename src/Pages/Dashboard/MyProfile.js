import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [info, setInfo] = useState({});
    console.log(info)



    useEffect(() => {
        fetch('http://localhost:5000/info')
            .then(res => res.json())
            .then(data => setInfo(data[0]))
    }, [])

    return (
        <div className='flex justify-center'>
            <div class="card w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center text-primary font-bold mb-6">My Profile</h2>
                    <form>
                        <label className='block'>Name</label>
                        <input value={info.name} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>Email</label>
                        <input value={info.email} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>Country</label>
                        <input value={info.country} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>City</label>
                        <input value={info.city} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>Education</label>
                        <input value={info.education} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>Phone Number</label>
                        <input value={info.phone} className="input input-bordered w-full max-w-xs mb-4 mt-1" />

                        <label className='block'>LinkedIn profile link</label>
                        <input value={info.link} className="input input-bordered w-full max-w-xs mb-4 mt-1" /> 
                    </form>
                        <Link to='/updateprofile' class="btn btn-outline btn-primary">Update Profile</Link>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;