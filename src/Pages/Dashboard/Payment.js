import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe('pk_test_51L7QqpEK2KgsLjHdQ1pcv6n0XiI7yh4957jpuivwTSzT12aj3iAjFDALNHV7wI96t9fIgrBiQ31FMxxSj9jhtMoB005wBxFRcJ');

const Payment = () => {
    const { paymentId } = useParams();
    // console.log(paymentId)

    const [paymentDetail, setPaymentDetail] = useState({});

    const url = `https://fast-lowlands-57075.herokuapp.com/order/${paymentId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPaymentDetail(data))
    }, [])
    return (
        <div className='mt-8'>
            <div class="card w-96 bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <h2 className='text-secondary font-bold'>Pay for {paymentDetail.name}</h2>
                    <p>Quantity: {paymentDetail.quantity} pc.</p>
                    <p>Price: {paymentDetail.price} $</p>
                </div>
            </div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm paymentDetail={paymentDetail} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;