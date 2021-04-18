import React from 'react';
import {  Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SimpleCardForm from './SimpleCardForm';


const ProcessPayment = ({ handlePayment }) => {
    const stripePromise = loadStripe('pk_test_51IeeniErud8JH7FUX7rRZCYYbCfd92JQ8YAPv2el3pHU0cpNrPIfW5H33XDxfNWPFIzqGW26HeTn53U6Q1HausHf009i9KDfE5');
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={ handlePayment }></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;