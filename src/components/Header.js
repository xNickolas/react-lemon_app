import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero-image.jpg';

const Header = () => {
    return (
        <header className='header'>
            <section>
                <div className='banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.</p>
                    <Link to="/booking"><button aria-label='On Click'>Reserve a Table</button></Link>
                </div>

                <div className='banner-img'>
                    <img src={heroImage}></img>
                </div>
            </section>
        </header>
    )
}

export default Header;