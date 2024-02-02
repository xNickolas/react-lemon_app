import React from 'react';
import Logo from '../assets/Logo.svg';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><img src={Logo} alt="Logo"></img></li>
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
