import React, { useState } from 'react';
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

    const handleSubmit = (e) => {
        e.preventDefault();

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
            </div>
        </>);
}

export default Signup;
