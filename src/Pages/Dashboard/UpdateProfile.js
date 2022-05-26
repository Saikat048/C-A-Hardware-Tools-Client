import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const UpdateProfile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const handleSubmitInfo = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const country = event.target.country.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const link = event.target.link.value;


        const info = { name, email, education, country, city, phone, link }

        console.log(info)
        const url = `https://fast-lowlands-57075.herokuapp.com/info/${email}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(info),
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast('Profile Updated')
                    navigate('/dashboard/myprofile')
                }
            })

    }
    return (
        <div className='flex justify-center'>
            <div class="card w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-2xl text-center text-primary font-bold mb-6">My Profile</h2>
                    <form onSubmit={handleSubmitInfo}>
                        <label className='block'>Name</label>
                        <input name="name" type="text" value={user.displayName} className="input input-bordered w-full max-w-xs mb-4 mt-1" required />

                        <label className='block'>Email</label>
                        <input name="email" type="email" value={user.email} className="input input-bordered w-full max-w-xs mb-4 mt-1" required />
 
                        <label className='block'>Country</label>
                            <input name="country" type="text" placeholder="Country" className="input input-bordered w-full max-w-xs mb-4 mt-1" required />
 
                            <label className='block'>City</label>
                            <input name="city" type="text" placeholder="City" className="input input-bordered w-full max-w-xs mb-4 mt-1" required />
 
                        <label className='block'>Education</label>
                        <input name="education" type="text" placeholder="Education" className="input input-bordered w-full max-w-xs mb-4 mt-1" required />

                        <label className='block'>Phone Number</label>
                        <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-4 mt-1" required />

                        <label className='block'>LinkedIn profile link</label>
                        <input name="link" type="text" placeholder="LinkedIn profile link" className="input input-bordered w-full max-w-xs mb-4 mt-1" required />

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;