import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    // console.log(orders)

    useEffect(() => {
        fetch('https://fast-lowlands-57075.herokuapp.com/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    const handleDelete = (id) => {


        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) {
            // console.log(id)
            const url = `https://fast-lowlands-57075.herokuapp.com/order/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                        toast("Delete Success")
                    }
                })
        }
    }

    return (
        <div className='overflow-x-auto'>
            <h2 className='text-2xl text-center text-primary font-bold mb-8 mt-6'>My Order</h2>
            <table className="table  table-compact w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Price</th>
                        <th>Phone</th>
                        <th>Quantity</th>
                        <th>Pay</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order => <tr key={order._id}>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.price}</td>
                            <td>{order.phone}</td>
                            <td>{order.quantity}</td>
                            <td>
                                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className="btn btn-xs btn-primary">pay</button></Link>}
                                {(order.price && order.paid) && <span className="text-primary">paid</span>}
                                
                            </td>
                            <td><button onClick={() => handleDelete(order._id)} className="btn btn-xs bg-red-500">X</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default MyOrders;