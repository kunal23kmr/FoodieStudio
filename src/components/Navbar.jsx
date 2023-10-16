import React from 'react'
import { Link, NavLink } from 'react-router-dom';

import '../css/Navbar.css';

function Navbar() {
    return (<>
        <nav>
            <Link to={'/'} className='title no-underline'>
                <h1>
                    <img className='logo' src='logo.jpg' alt='Logo image' />FoodieStudio
                </h1>
            </Link>
            <div className='menu'>
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
                    <NavLink to={'/about'}> About</NavLink>
                </li>
                <li>
                    <NavLink to={'/contact'}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to={'/profile'}>Profile</NavLink>
                </li>
            </ul>
        </nav>
    </>
    )
}

export default Navbar;