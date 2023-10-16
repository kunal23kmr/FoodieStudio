import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function Login({ fun }) {
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState({
        phone: '',
        password: ''
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const vailidateLogin = (event) => {
        //find in data base and return corresponding value and set the user through the fun().
        const phone = event.phone;
        const password = event.password;

    }

    return (
        <div className="login-container">
            <h2>Login</h2>
            <br></br>
            <form className="login-form" onSubmit={vailidateLogin}>
                <label htmlFor="phone">Phone Number</label>
                <input className='phone' id='phone' type="number" placeholder="Phone Number" inputMode="numeric" required autoFocus />
                <span>{error.phone}</span>

                <div className="password-container" required>
                    <label htmlFor="password_login">Password</label>

                    <input
                        id='password_login'
                        name='phone'
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"

                    />
                    <span
                        className={`eye-icon ${showPassword ? "show" : ""}`}
                        onClick={togglePasswordVisibility}
                    >show
                    </span>
                </div>
                <span>{error.password}</span>

                <button type='submit' className="login-button">Login</button>
            </form>
            <Link to={'/signup'} className='no_account'>Not have an account? Signup</Link>
        </div>
    );
}

export default Login;
