import React from 'react';
import { useNavigate } from 'react-router';

import '../css/About.css';

function About() {

  const navigate = useNavigate();

  const handleButtonClick = (route) => {
    navigate(route);
  };
  return (<div className="about-container">
  <div className="about-content">
    <h1>About Us</h1>
    <p>Welcome to FoodieStudio!</p>

    <h2>Our Story</h2>
    <p>At FoodieStudio, we're passionate about food. Our journey began with a simple idea: to connect people with delicious, restaurant-quality meals, delivered right to their doorstep. We understand that life can be busy, and dining out is not always an option. That's why we're here to make your dining experience hassle-free and delightful.</p>
    
    <br/>
    <h2>Our Mission</h2>
    <p><strong>"Bringing Flavor to Your Doorstep"</strong></p>
    <p>Our mission is to deliver not just food but an experience. We're committed to providing you with an extensive variety of cuisines and dishes to cater to your cravings, whether it's a comforting bowl of pasta, a sizzling burger, or a healthy salad. We believe that everyone should have access to great food, and our service is designed to make it happen.</p>
     
    <br/>
    <h2>Contact Us</h2>
    <p>If you have questions, feedback, or suggestions, we'd love to hear from you. You can reach out to us at [contact information], and we'll be happy to assist you.</p>

    <br/>
    <h2>Meet Our Team</h2>
    <div className="team-members">
      <div className="team-member">
        <h3>Keerti Singh</h3>
        <p>Co-Founder & CEO</p>
      </div>
      <div className="team-member">
        <h3>Kunal Sahu</h3>
        <p>Head Chef & Founder</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default About;
