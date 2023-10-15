import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-content">
        <h1>About Us</h1>
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
      <div className="about-buttons">
        <button className="contact-button">Contact Us</button>
        <button className="order-button">Order Now</button>
      </div>
    </div>
  );
}

export default About;
