import React from 'react';
import Logo from '../assets/logo-white.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <div className='company-info'>
                    <img src={Logo} alt=''></img>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a mordern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>
                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br /> 123 Chicago, USA</li>
                        <li>Phone: <br /> ++ 0123 456 789</li>
                        <li>Email: <br /> little@lemon.com</li>
                    </ul>
                </div>

                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;