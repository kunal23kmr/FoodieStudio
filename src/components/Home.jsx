import React from "react";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Home.css';
// import axios from 'axios';
import foodItems from "./foodItems";

function Home() {

  const navigate = useNavigate();
  const showDetails = (productId) => {
    navigate(`/singleBlog/${productId}`);
  };


  return (
    <div className="contanior">
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
            <button onClick={() => showDetails(item.id)}>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;