import React, { useState } from 'react';
import './Login.css';

function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    return (
        <div className="login-container">
            <h2>Login</h2>
            <form className="login-form">
                <input className='phone' type="number" placeholder="Phone Number" inputMode="numeric" required autoFocus />
                <div className="password-container" required>
                    <input
                        className='password'
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
        </div>
    );
}

export default Login;
