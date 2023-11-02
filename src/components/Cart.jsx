import React, { useEffect, useState } from 'react'
import foodItems from './foodItems';
import { useNavigate } from 'react-router';
import axios from 'axios';


export default function Cart() {
    const navigate = useNavigate();
    const [cartList, setCartList] = useState([]);
    useEffect(() => {
        //first get the user
        axios.get(`http://localhost:3001/getuser`)
            .then(res => {
                // Handle the response here
                const user_id = res.data[0];
                axios.get(`http://localhost:3001/getcartList`)
                    .then(res => {
                        setCartList(res.data)
                    }).catch(err => {
                        console.log('show cart m error :', err);
                    })
            })
            .catch(err => {
                console.log('Error aaya hai pro:', err);
            });
    })
    const handleClick = () => {
        navigate(`/checkOut`);
    }
    return (
        <>
            <div>
                {cartList ?
                    foodItems.map(item => {
                        if (item.id in cartList) {
                            return <div key={item.id}>
                                <h2>{item.title}</h2>
                                <img id="image_show" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                                <p>Restaurant: {item.restaurant}</p>
                                <p>Price: {item.price}</p>
                            </div>
                        }
                    })
                    :
                    <div>
                        <h1>Your Cart is empty.</h1>
                    </div>
                }
                <button onClick={() => handleClick()}>Order</button>
            </div>
        </>
    )
}
