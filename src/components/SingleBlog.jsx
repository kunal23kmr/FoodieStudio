import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import foodItems from './foodItems';
import axios from 'axios';

export default function SingleBlog() {
    const { id } = useParams();
    console.log('id is', id)
    const item = foodItems.find(item => item.id === +id);
    const navigate = useNavigate();
    const handleClick = () => {
        //adding item to the cart
        axios.get(`http://localhost:3001/getuser`)
            .then(res => {
                // Handle the response here
                const user_id = res.data;
                if (user_id !== -1) {
                    //next step
                    axios.post(`http://localhost:3001/singleBlog`,{item_id:id})
                        .then(res => {
                            console.log('add ho gya cart me')
                        })
                        .catch(err => {
                            console.log('Error aaya hai add cart krne me:\n', err);
                        })
                } else {
                    navigate('/login');
                }
            })
            .catch(err => {
                console.log('Error aaya hai pro:', err);
            });

    };

    console.log(item);
    return (
        <>
            {item ?
                <div className='found'>
                    <div className="details">
                        <h2>{item.title}</h2>
                        <img id="image_show" src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                        <p>{item.description}</p>
                        <p>Restaurant: {item.restaurant}</p>
                        <p>Price: {item.price}</p>
                        <button className="add-to-cart-button" onClick={() => handleClick()}>Add to cart</button>
                    </div>

                </div>
                :
                <div className='notFound'>
                    <h1>Item Not Found.</h1>
                </div>
            }
        </>
    )
}
