import React, { useState } from 'react';
import logo from '../assets/Logo.svg';
import hamburger from '../assets/hamburger-menu.svg';
import basket from '../assets/basket.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        console.log('toggleMenu called');
        setMenuOpen(!menuOpen);
        console.log('menuOpen state:', menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""} sticky`}>
            <div className='navbar-container'>
                <div className='navbar-row'>
                    <a href='/' className='logo'><img src={logo} alt="Logo"></img></a>

                    <div className='menu-icon' onClick={toggleMenu}>
                        <img src={hamburger} alt="Hamburger"></img>
                    </div>

                    <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
                        <li><a href="/" className='nav-link'>Home</a></li>
                        <li><a href="#menu" className='nav-link'>Menu</a></li>
                        <li><a href="#testimonials" className='nav-link'>About</a></li>
                        <li><a href="/reservations" className='nav-link'>Reservations</a></li>
                        <li><a href="/order" className='nav-link button-primary order-nav-link'>Order Online</a></li>
                        <li>
                            <a href="/login" className='nav-link nav-basket'>
                                <img src={basket} alt="Basket" className='icon-basket'></img>
                            </a>
                        </li>
                        {/* <li><a href="/login" className='nav-link'>Login</a></li> */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
