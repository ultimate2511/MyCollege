import React from 'react';
import { FaPlus, FaBook } from 'react-icons/fa';
import './Sidebar.scss';
// Assuming you have a logo image in the src directory

const Sidebar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <div className="navbar-item">
          <FaPlus className="navbar-icon" />
          <span className="navbar-text">Add College</span>
        </div>
        <div className="navbar-item">
          <FaBook className="navbar-icon" />
          <span className="navbar-text">Show College</span>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
