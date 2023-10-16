import React from 'react';
import '../css/Contact.css';

function Contact() {
    // Define a function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Add your form handling logic here
    };

    return (<div className='contact'>
        <header>
            <h1>Contact Us</h1>
        </header>
        <div className="contact-form">
            <form 
                action='https://formspree.io/f/xwkdawpz'
                method='POST' >
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" name="email" required />

                <label htmlFor="phone">Phone:</label>
                <input type="tel" name="phone" />

                <label htmlFor="subject">Subject:</label>
                <select name="subject" required>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Order Issue">Order Issue</option>
                    <option value="Feedback">Feedback</option>
                </select>

                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="4" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
        <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Customer Support Email: support@yourfoodiestudio.com</p>
            <p>Customer Support Phone: +91-(8076761010) (Mon-Fri, 9 AM - 5 PM)</p>
            <p>123 Main Street, City, State, ZIP</p>
            <p>Follow us on <a href="#">Facebook</a>, <a href="#">Twitter</a>, and <a href="#">Instagram</a></p>
        </div>
        <div className="business-hours">
            <h2>Business Hours</h2>
            <p>Monday - Friday: 9 AM - 8 PM</p>
            <p>Saturday - Sunday: 10 AM - 6 PM</p>
        </div>
        <div className="faqs">
            <p>Check our <a href="faq.html">FAQs</a> for common questions.</p>
        </div>
    </div>
    );
}

export default Contact;
