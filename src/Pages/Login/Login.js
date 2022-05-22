import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }


    const handleFormSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold mb-8">Log In</h2>
                    <form onSubmit={handleFormSubmit}>
                        <label>Email</label>
                        <input onBlur={handleEmailBlur} type="text" placeholder="Your Email" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <label>Password</label>
                        <input onBlur={handlePasswordBlur} type="text" placeholder="Your Password" className="input input-bordered w-full max-w-xs mb-4 mt-1" required/>

                        <input type="submit" value="Submit" className="btn btn-primary w-full max-w-xs" />
                    </form>
                    <p>Don't have with me? <Link to='/signup' className='text-secondary hover:underline'>Sign Up</Link></p>
                    <p className='text-secondary cursor-pointer hover:underline'>Forgot password?</p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-primary">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;