import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="Navbar">
            <span className="nav-logo">The Bakery Shop</span>
            <div className={`items ${isOpen && 'open'}`}>
                <a href="./home">Home</a>
                <a href="/About">About</a>
                <a href="/login">Log In</a>
                <a href="/signup">Sign Up</a>
            </div>
            <div className={`nav-toggle ${isOpen && 'open'}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    );
};
export default Navbar;
