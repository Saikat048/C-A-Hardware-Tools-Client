import React, { useEffect, useState } from 'react'; 

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    // console.log(orders)

    useEffect(() => {
        fetch('http://localhost:5000/order')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])



    const handleDelete = (id) => {
       

        const proceed = window.confirm('Are you sure, You want to delete...?')
        if (proceed) { 
            console.log(id)
            const url = `http://localhost:5000/order/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(order => order._id !== id)
                        setOrders(remaining)
                    }
                })
        }
    }

    return (
        <div>
            <h2>My Order: {orders.length}</h2>
            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
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
                            <td>{order.phone}</td>
                            <td>{order.quantity}</td>
                            <td><button className="btn btn-primary">Pay</button></td>
                            <td><button onClick={()=> handleDelete(order._id)} className="btn btn-primary">X</button></td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;