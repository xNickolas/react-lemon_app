import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import basket from '../assets/basket.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'><img src={logo} alt="Logo"></img></a>

            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>

            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                <li><a href="/" className='nav-link'>Home</a></li>
                <li><a href="/about" className='nav-link'>About</a></li>
                <li><a href="/menu" className='nav-link'>Menu</a></li>
                <li><a href="/reservations" className='nav-link'>Reservations</a></li>
                <li><a href="/order" className='nav-link button-primary order-nav-link'>Order Online</a></li>
                <li>
                    <a href="/login" className='nav-link nav-basket'>
                        <img src={basket} alt="Basket" className='icon-basket'></img>
                    </a>
                </li>
                {/* <li><a href="/login" className='nav-link'>Login</a></li> */}
            </ul>
        </nav>
    );
}

export default Nav;
