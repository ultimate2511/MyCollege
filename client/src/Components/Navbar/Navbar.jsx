import React from 'react';
import './Navbar.scss';
import logo from './logo.webp';  // Assuming you have a logo image in the src directory
import searchicon from './search.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img  src={logo}alt="Logo" />
        <span className="navbar-name">MyCollege</span>
      </div>
      <div className="navbar-search">
        <img src={searchicon}/>
        <input type="text" placeholder="Search Colleges..." />
      </div>
    </nav>
  );
};

export default Navbar;
