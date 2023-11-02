import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import '../css/Navbar.css';
import axios from 'axios';

function Navbar() {
    const [currUser, setuser] = useState(-1);

    useEffect(() => {
        // Make the Axios request when the component mounts
        axios
            .get(`http://localhost:3001/getuser`)
            .then((res) => {
                // Handle the response here
                setuser(res.data);
            })
            .catch((err) => {
                console.log('Error aaya hai pro:', err);
            });
    });

    return (
        <nav>
            <Link to={'/'} className="title no-underline">
                <h1>
                    <img className="logo" src="./logo.jpg" alt="Logo image" />FoodieStudio
                </h1>
            </Link>
            <div className="menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul>
                <li>
                    <NavLink to={'/'}>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/blog'}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to={'/about'}>About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={currUser !== -1 ? `/cart` : `/login`}>
                        <FaShoppingCart size={25} color="black" />
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>
                        <FaUser size={25} color="black" />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
