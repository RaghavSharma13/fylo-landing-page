import React from 'react';
import logo from '../images/logo.svg';
import './component-styles/navbar.css'
const Navbar = () => {
    return (
        <div className="nav">
            <img src={logo} alt="Fylo"/>
            <ul className="nav--links">
                <li>Features</li>
                <li>Team</li>
                <li>Sign In</li>
            </ul>
        </div>
    )
}

export default Navbar
