import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../css/Signup.css'
function Signup() {
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
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [error, setError] = useState({
        first_name: '',
        last_name: '',
        mobile_number: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
    });

    const [isValid, setValid] = useState(false);
    const validate = () => {
        setValid(true);
        const namePattern = /^[A-Za-z\s]+$/;
        const contactPattern = /^[0-9]+$/;

        if (!namePattern.test(formData.first_name) || formData.first_name === '') {
            setValid(false);
            setError({ ...error, [error.first_name]: 'Invalid name!' })
        } else {
            setError({ ...error, [error.first_name]: '' })
        }

        if (!namePattern.test(formData.last_name) || formData.last_name === '') {
            setValid(false);
            setError({ ...error, [error.last_name]: 'Invalid name!' })
        } else {
            setError({ ...error, [error.last_name]: '' })
        }

        if (!contactPattern.test(formData.mobile_number) || formData.mobile_number.length != 10) {
            setValid(false);
            setError({ ...error, [error.mobile_number]: 'Invalid contact!' })
        } else {
            setError({ ...error, [error.mobile_number]: '' })
        }

        if (!contactPattern.test(formData.pincode)) {
            setValid(false);
            setError({ ...error, [error.pincode]: 'Invalid Pincode!' })
        } else {
            setError({ ...error, [error.pincode]: '' })
        }

        if (!namePattern.test(formData.city) || formData.city === '') {
            setValid(false);
            setError({ ...error, [error.city]: 'Invalid city name!' })
        } else {
            setError({ ...error, [error.city]: '' })
        }

        if (!namePattern.test(formData.state) || formData.state === '') {
            setValid(false);
            setError({ ...error, [error.state]: 'Invalid state name!' })
        } else {
            setError({ ...error, [error.state]: '' })
        }

        if (!namePattern.test(formData.country) || formData.country === '') {
            setValid(false);
            setError({ ...error, [error.country]: 'Invalid country name!' })
        } else {
            setError({ ...error, [error.country]: '' })
        }
        return isValid;
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        if (validate()) {
            //sendig to server implementation
            console.log('Submitted Data:', formData);
            setFormData({
                first_name: '',
                last_name: '',
                mobile_number: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
                password: '',
            });
        }
    };

    return (
        <>
            <br />
            <div className="signup">
                <h2 className='signup_title'>Sign-Up</h2>
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
                            required
                            autoFocus
                            placeholder='First Name'
                        />
                    </div>
                    <span>{error.first_name}</span>

                    <div className="form-group">
                        <label htmlFor="last_name">Last Name</label>
                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            value={formData.last_name}
                            onChange={handleChange}

                            placeholder='Last Name'
                        />
                    </div>
                    <span>{error.last_name}</span>


                    <div className="form-group">
                        <label htmlFor="mobile_number">Phone Number</label>
                        <input
                            type="number"
                            id="mobile_number"
                            name="mobile_number"
                            value={formData.mobile_number}
                            onChange={handleChange}
                            required
                            placeholder='Phone NUmber'
                        />
                    </div>
                    <span>{error.mobile_number}</span>


                    <p>Address:</p>
                    {/* <hr></hr> */}
                    <div className="address">

                        <div className="form-group">
                            <label htmlFor="city">City name</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                required
                                placeholder='City'
                            />
                        </div>
                        <span>{error.city}</span>


                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input
                                type="text"
                                id="state"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                required
                                placeholder='State'
                            />
                        </div>
                        <span>{error.state}</span>


                        <div className="form-group">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                placeholder='Country'
                            />
                        </div>
                        <span>{error.country}</span>

                        <div className="form-group">
                            <label htmlFor="pincode">Pin Code</label>
                            <input
                                type="number"
                                id="pincode"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                placeholder='Pin-Code'
                            />
                        </div>
                        <span>{error.pincode}</span>


                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder='Password'
                        />
                    </div>


                    <button type="submit">Sign Up</button>
                </form>
                <Link to={'/login'} className='already_account'>Already have an account? Login</Link>
            </div>
        </>);
}

export default Signup;
