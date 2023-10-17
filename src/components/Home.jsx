import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Home.css';
import axios from 'axios'

const foodItems = [
    {
      id: 1,
      title: 'Rasgulla',
      description: 'Description of Food Item 1.',
      restaurant: 'Kunal da Dhaba',
      image: 'D:/FoodieStudio/FoodieStudio/src/images/food-images/food1.jpg',
      price: '$10',
    },
    
    {
        id: 2,
        title: 'Cholle Bhature',
        description: 'Description of Food Item 2.',
        restaurant: 'Swadeshi Bhog',
        image: 'scr/images/food-images/food2.jpg',
        price: '$20',  
    }
  ];
function Home() {
    const [selectedItem, setSelectedItem] = useState(null);

    const showDetails = (item) => {
      setSelectedItem(item);
    };
    return(
        <div className="App">
          <h1>Welcome to FoodieStudio</h1><br/><br/>
          <div className="food-cards">
            {foodItems.map((item) => (
              <div key={item.id} className="food-card">
                <img src="FoodieStudio\src\images\food-images\food1.jpg" alt={item.title} />
                <h2>{item.title}</h2>
                <p>By: {item.restaurant}</p>
                <button onClick={() => showDetails(item)}>View Details</button>
              </div>
            ))}
          </div>
    
          {selectedItem && (
            <div className="details">
              <h2>{selectedItem.title}</h2>
              <h3>{selectedItem.image}</h3>
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