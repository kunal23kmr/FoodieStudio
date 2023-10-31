import React from 'react'
import { useParams } from 'react-router-dom';

export default function CheckOut() {
    const { id, price } = useParams();

    return (
        <div>
            <h1>Payment Page</h1>
            <p>Product ID: {id}</p>
            <p>Price: {price}</p>
            {/* Add payment-related logic here */}
        </div>
    );
};
