import React from 'react';
import { useNavigate } from 'react-router';

import './About.css';

function About() {

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };
  return (
    <div className="about-page">
      <div className="about-content">
        <h1 className='tt'>About Us</h1>
        <div className='content'>
          <p>
            Welcome to our food ordering and delivery service. We are dedicated to bringing you the best dining experience at your doorstep. Our mission is to provide high-quality, delicious food with fast and reliable delivery.
          </p>
          <p>
            Whether you're looking for a quick lunch, a family dinner, or catering for a special event, we have a wide range of menu options to satisfy your cravings.
          </p>
          <p>
            Thank you for choosing us. We look forward to serving you and making your dining experience extraordinary.
          </p>
        </div>
      </div>
      <div className="about-buttons">
        <button className="contact-button" onClick={() => handleButtonClick('/contact')}>Contact Us</button>
        <button className="order-button" onClick={() => handleButtonClick('/')}>Order Now</button>
      </div>
    </div>
  );
}

export default About;
