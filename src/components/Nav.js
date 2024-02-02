import React, { useState } from 'react';
import Logo from '../assets/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='' className='logo'><img src={Logo} alt="Logo"></img></a>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Menu</a></li>
                <li><a href="/contact">Reservations</a></li>
                <li><a href="/contact">Order Online</a></li>
                <li><a href="/contact">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
