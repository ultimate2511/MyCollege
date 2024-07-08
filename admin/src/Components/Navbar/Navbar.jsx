import React from 'react';
import './Navbar.scss';
import logo from './logo.webp';  // Assuming you have a logo image in the src directory
import searchicon from './search.png';
import { FaUser, FaSignInAlt } from 'react-icons/fa';  // Importing icons for user profile and login

const Navbar = ({ userName }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-name">MyCollege <br/>Admin</span>
      </div>
      <div className="navbar-search">
        <img src={searchicon} alt="Search Icon" />
        <input type="text" placeholder="Search Colleges..." />
      </div>
      <div className="navbar-right">
        <div className="navbar-profile">
          <FaUser />Profile
          <span className="profile-name">Anish</span>
        </div>
        <a href="/login" className="navbar-login">
          <FaSignInAlt /> Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
