import React from 'react';
import useParts from '../Hooks/CustomHook';

const Payment = () => {
    const {paymentId} = useParts();
    console.log(paymentId)
    return (
        <div>
            <h2>Payment:  </h2>
        </div>
    );
};

export default Payment;