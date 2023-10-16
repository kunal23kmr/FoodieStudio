import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Signup.css';
import axios from 'axios'

const Signup = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        password: '',
    });
    const navigate = useNavigate();
    const [error, setError] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
    });

    const [a, seta] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setError({
            first_name: '',
            last_name: '',
            mobile_number: '',
            city: '',
            state: '',
            country: '',
            pincode: '',
        });
        const namePattern = /^[A-Za-z\s]+$/;
        const contactPattern = /^[0-9]+$/;

        if (!namePattern.test(formData.first_name) || !formData.first_name) { setError({ ...error, first_name: 'Invalid name!' }); }
        if (!namePattern.test(formData.last_name) || !formData.last_name) { setError({ ...error, last_name: 'Invalid name!' }); }

        if (!a && (!contactPattern.test(formData.mobile_number) || !formData.mobile_number)) { setError({ ...error, mobile_number: 'Invalid contact!' }); seta(false); }

        if (!contactPattern.test(formData.pincode) || !formData.pincode) { setError({ ...error, pincode: 'Invalid Pincode!' }); }
        if (formData.city === '') { setError({ ...error, city: 'Invalid city name!' }); }
        if (formData.state === '') { setError({ ...error, state: 'Invalid state name!' }); }
        if (formData.country === '') { setError({ ...error, country: 'Invalid country name!' }); }

        if (error.first_name === '' &&
            error.last_name === '' &&
            error.mobile_number === '' &&
            error.city === '' &&
            error.state === '' &&
            error.country === '' &&
            error.pincode === '' && a === true
        ) {
            console.log(error)
            // Sending to server implementation
            axios.post('http://localhost:3001/signup', formData)
                .then(res => {
                    seta(true);
                    console.log('responce aaya', res);
                    setFormData((prevFormData) => {
                        console.log('Submitted Data: aaya', prevFormData);
                        return {
                            first_name: '',
                            last_name: '',
                            mobile_number: '',
                            city: '',
                            state: '',
                            country: '',
                            pincode: '',
                            password: '',
                        };
                    });
                    alert('Sucessfully registered!');
                    navigate('/login');
                })
                .catch(err => {
                    console.log('error aaya', err, a);
                    setError({ ...error, mobile_number: 'Mobile number already registered.' });
                    seta(false);
                });
        } else {
            console.log('Invalid Data:', formData);
            console.log('Error is:', error);
            if (a === false) { setError({ ...error, mobile_number: 'Mobile number already registered.' }); }
        }
    };
    return (
        <>
            <br />
            <div className="signup">
                <h2 className="signup_title">Sign-Up</h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="first_name">First Name</label>
                        <input
                            type="text"
                            id="first_name"
                            name="first_name"
                            value={formData.first_name}
                            onChange={handleChange}
                            autoFocus
                            placeholder="First Name"
                        />
                    </div>
                    <span className="error_msg">{error.first_name}</span>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}
                            placeholder="Last Name"
                        />
                    </div>
                    <span className="error_msg">{error.last_name}</span>

                    <div className="form-group">
                        <label htmlFor="mobile_number">Phone Number</label>
                        <input
                            type="number"
                            id="mobile_number"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                            placeholder="Phone Number"
                        />
                    </div>
                    <span className="error_msg">{error.mobile_number}</span>

                    <p>Address:</p>
                    <div className="address">
                        <div className="form-group">
                            <label htmlFor="city">City name</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                placeholder="City"
                            />
                        </div>
                        <span className="error_msg">{error.city}</span>

                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                placeholder="State"
                            />
                        </div>
                        <span className="error_msg">{error.state}</span>

                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country"
                            />
                        </div>
                        <span className="error_msg">{error.country}</span>

                        <div className="form-group">
                            <label htmlFor="pincode">Pin Code</label>
                            <input
                                type="number"
                                id="pincode"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                placeholder="Pin-Code"
                            />
                        </div>
                        <span className="error_msg">{error.pincode}</span>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>

                    <button type="submit">Sign Up</button>
                </form>
                <Link to={'/login'} className="already_account">
                    Already have an account? Login
                </Link>
            </div>
        </>
    );
}

export default Signup;
