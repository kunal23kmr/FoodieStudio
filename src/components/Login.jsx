import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../css/Login.css';
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState({
        mobile_number: '',
        password: ''
    });

    const [formData, setFormData] = useState({
        mobile_number: '',
        password: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const contactPattern = /^[0-9]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        setError({
            mobile_number: '',
            password: '',
        });

        //find in data base and return corresponding value and set the user through the fun().

        if (formData.mobile_number === '' || !contactPattern.test(formData.mobile_number)) {
            setError({ ...error, mobile_number: 'Invalid phone number!' });
        }

        axios.post('http://localhost:3001/login', formData)
            .then(res => {
                console.log(res)
                // fun(res.data[0]);
                setFormData(() => {
                    return {
                        mobile_number: '',
                        password: '',
                    };
                });
                alert('Sucessfully Logined!');
                // fun(true);
                navigate(`/viewProfile/${res.data[0].user_id}`);

                // console.log('dekho data',res.data[0].user_id)
            })
            .catch(err => {
                console.log('Error aaya hai :', err);
                setError({ ...error, mobile_number: 'Mobile number not registered.' });
            });
    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <br></br>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="phone">Phone Number</label>
                <input className='phone'
                    id='mobile_number'
                    name='mobile_number'
                    type="text"
                    placeholder="Phone Number"
                    inputMode="numeric"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    required autoFocus />
                <span className='error_msg'>{error.mobile_number}</span>

                <div className="password-container" required>
                    <label htmlFor="password_login">Password</label>

                    <input
                        id='password_login'
                        name='password'
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <span
                        className={`eye-icon ${showPassword ? "show" : ""}`}
                        onClick={togglePasswordVisibility}
                    >show
                    </span>
                </div>
                <span className='error_msg'>{error.password}</span>

                <button type='submit' className="login-button">Login</button>
            </form>
            <Link to={'/signup'} className='no_account'>Not have an account? Signup</Link>
        </div>
    );
}

export default Login;
