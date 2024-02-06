import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import hamburger from '../assets/hamburger-menu.svg';
import basket from '../assets/basket.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selectedLink, setSelectedLink] = useState("");

    const toggleMenu = () => {
        console.log('toggleMenu called');
        setMenuOpen(!menuOpen);
        console.log('menuOpen state:', menuOpen);
    }

    const handleLinkClick = (link) => {
        setSelectedLink(link);
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
                        <li>
                            <Link
                                to="/"
                                className={`nav-link ${selectedLink === "/" ? "selected" : ""}`}
                                onClick={() => handleLinkClick("/")}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#menu"
                                className={`nav-link ${selectedLink === "#menu" ? "selected" : ""}`}
                                onClick={() => handleLinkClick("#menu")}
                            >
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="#about"
                                className={`nav-link ${selectedLink === "#about" ? "selected" : ""}`}
                                onClick={() => handleLinkClick("#about")}
                            >
                                About
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/booking"
                                className={`nav-link ${selectedLink === "/booking" ? "selected" : ""}`}
                                onClick={() => handleLinkClick("/booking")}
                            >
                                Reservations
                            </Link>
                        </li>

                        <li>
                            <Link
                                to="/order"
                                className={`nav-link ${selectedLink === "/order" ? "selected" : ""}`}
                                onClick={() => handleLinkClick("/order")}
                            >
                                Order Online
                            </Link>
                        </li>

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
