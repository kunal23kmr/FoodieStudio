import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';
import Signup from './Signup';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <br></br>
            <form className="login-form">

                <label htmlFor="phone">Phone Number</label>
                <input className='phone' type="number" placeholder="Phone Number" inputMode="numeric" required autoFocus />

                <div className="password-container" required>
                    <label htmlFor="Password">Password</label>

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
                <button type='submit' className="login-button">Login</button>
            </form>
            <Link to={'/signup'} className='already_account'>Not have an account?</Link>
        </div>
    );
}

export default Login;
