import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios';

import image1 from '../images/food_images/food1.jpg';
import image2 from '../images/food_images/food2.jpg';
import image3 from '../images/food_images/food3.webp';
import image4 from '../images/food_images/food4.jpg';
import image5 from '../images/food_images/food5.jpg';
import image6 from '../images/food_images/food6.jpg';
import image7 from '../images/food_images/food7.jpg';
import image8 from '../images/food_images/food8.jpg';
import image9 from '../images/food_images/food9.jpg';
import image10 from '../images/food_images/food10.webp';

function Home() {

  // const image1 = '/food_images/food1.jpg';
  // const image2 = '/food_images/food2.jpg';
  // const image3 = '/food_images/food1.jpg';
  // const image4 = '/food_images/food1.jpg';
  // const image5 = '/food_images/food1.jpg';
  // const image6 = '/food_images/food1.jpg';
  // const image7 = '/food_images/food1.jpg';
  // const image8 = '/food_images/food1.jpg';
  // const image9 = '/food_images/food1.jpg';
  // const image10 = '/food_images/food1.jpg';

  const foodItems = [
    {
      id: 1,
      title: 'Rasgulla',
      description: 'Description of Food Item 1.',
      restaurant: 'Kunal da Dhaba',
      image: image1,
      price: '$10',
    },
    {
      id: 2,
      title: 'Cholle Bhature',
      description: 'Description of Food Item 2.',
      restaurant: 'Swadeshi Bhog',
      image: image2,
      price: '$20',
    },
    {
      id: 3,
      title: 'Dhokla',
      description: 'Description of Food Item 3.',
      restaurant: 'Swadeshi Bhog',
      image: image6,
      price: '$20',
    },
    {
      id: 4,
      title: 'Manchurian',
      description: 'Description of Food Item 4.',
      restaurant: 'Fast Foodies',
      image: image3,
      price: '$20',
    },
    {
      id: 5,
      title: 'Paneer Butter Masala',
      description: 'Description of Food Item 5.',
      restaurant: 'Kunal da Dhaba',
      image: image4,
      price: '$20',
    },
    {
      id: 6,
      title: 'Butter Naan',
      description: 'Description of Food Item 6.',
      restaurant: 'Swadeshi Bhog',
      image: image7,
      price: '$20',
    },
    {
      id: 7,
      title: 'Spring Roll',
      description: 'Description of Food Item 7.',
      restaurant: 'Fast Foodies',
      image: image8,
      price: '$20',
    },
    {
      id: 8,
      title: 'MOMOS',
      description: 'Description of Food Item 8.',
      restaurant: 'Swadeshi Bhog',
      image: image9,
      price: '$20',
    },
    {
      id: 9,
      title: 'Amritsari Kulcha',
      description: 'Description of Food Item 9.',
      restaurant: 'Swadeshi Bhog',
      image: image7,
      price: '$20',
    },
    {
      id: 10,
      title: 'Dosa',
      description: 'Description of Food Item 10.',
      restaurant: 'Southie Eats',
      image: image10,
      price: '$20',
    }
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const showDetails = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="App">
      <br />
      <br />
      <br />
      <br />
      <h1>Welcome to FoodieStudio</h1><br /><br />
      <h2>
        Browse your Favorite food from your Favorite Restaurants
      </h2><br />
      <div className="food-cards">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <img className='image_card' src={process.env.PUBLIC_URL + item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>By: {item.restaurant}</p>
            <button onClick={() => showDetails(item)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div className="details">
          <h2>{selectedItem.title}</h2>
          <img id="image_show" src={process.env.PUBLIC_URL + selectedItem.image} alt={selectedItem.title} />
          <p>{selectedItem.description}</p>
          <p>Restaurant: {selectedItem.restaurant}</p>
          <p>Price: {selectedItem.price}</p>
          <button className="close-button" onClick={() => setSelectedItem(null)}>Close Details</button>
        </div>
      )}
    </div>
  );
}

export default Home;