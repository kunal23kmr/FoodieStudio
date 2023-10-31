import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import foodItems from './foodItems';



export default function SingleBlog() {

    
    const { id } = useParams();
    console.log('id is', id)
    const item = foodItems.find(item => item.id === +id);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/checkOut/${id}/${item.price}`);
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
                        <button className="buy-button" onClick={() => handleClick()}>Order</button>
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
