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
                <input type="number" placeholder="Phone Number" inputMode="numeric" />

                <div className="password-container">
                    <input
                        className='password'
                        type="password"
                        placeholder="Password"
                        value={password}
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
