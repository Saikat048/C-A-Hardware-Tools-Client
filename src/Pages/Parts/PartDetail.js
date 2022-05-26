import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';

const PartDetail = () => {
    const { partId } = useParams();
    console.log(partId)
    const [user] = useAuthState(auth);

    const [price, setPrice] = useState()

    const [tools, setTools] = useState({});
    console.log(tools)
    useEffect(() => {
        const url = `https://fast-lowlands-57075.herokuapp.com/tools/${partId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])

    const handleFormSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const quantity = parseInt(event.target.quantity.value)
        const email = event.target.email.value;
        const address = event.target.address.value;
        const phone = parseInt(event.target.phone.value);
        const price = parseInt(event.target.price.value);

        if (quantity < tools.minimumOrder || quantity > tools.available) {
            alert('not valid number')
            event.target.reset();
            return;
        }

        
        const totalPrice = quantity * tools.price;
        setPrice(totalPrice)


        const order = { name, email, address, phone, quantity, price }
        console.log(order)

        fetch('https://fast-lowlands-57075.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(order),
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    toast('Order success')
                }
            })
    }




    return (

        <div className='container mx-auto '>
            <div className="card w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-grow card rounded-box place-items-center">
                            <div className="card card-compact w-lg bg-base-100 shadow-xl">
                                <figure><img className='w-48' src={tools.img} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-2xl text-primary">{tools.name}</h2>
                                    <p>{tools.description}</p>
                                    <div className='flex justify-end mt-3'>
                                        <p><b>Min. Order</b>: {tools.minimumOrder} pc.</p>
                                        <p><b>Available</b>: {tools.available} pc.</p>
                                    </div>
                                    <p><b>Price</b>: $ {tools.price}</p>
                                </div>
                            </div>
                        </div>
                        <div className="divider lg:divider-horizontal">OR</div>
                        <div className="grid flex-grow card rounded-box place-items-center">
                            <div className="card card-compact w-lg bg-base-100 shadow-xl">
                                <h2 className='text-3xl text-center text-primary font-bold mb-8'>Purchase Now</h2>
                                <div className="card-body">
                                    <form onSubmit={handleFormSubmit}>
                                        <input disabled name="name" value={tools.name} className="input input-bordered w-full max-w-xs mb-2" />
                                        <input disabled name="email" type="email" value={user.email} className="input input-bordered w-full max-w-xs mb-2" required />
                                        <input name="address" type="text" placeholder="Your Address" className="input input-bordered w-full max-w-xs mb-2" required />
                                        <input name="phone" type="Number" placeholder="Your Phone Number" className="input input-bordered w-full max-w-xs mb-2" required />
                                        <div>
                                            <input name="quantity" type="Number" placeholder="Quantity" className="input input-bordered w-36 max-w-xs mr-8 mb-2" required />
                                            <input name="price" placeholder='Total Price' value={price} className="input input-bordered w-36 max-w-xs mb-2"/>
                                        </div>
                                        <input type="submit" value="Order" className="btn btn-bordered w-full max-w-xs" />
                                    </form>
                                    <ToastContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default PartDetail;