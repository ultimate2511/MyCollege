import React, { useState, useContext } from 'react';
import './Navbar.scss';
import FormContext from '../../Context/FormContext';
import { useNavigate } from 'react-router-dom';
import logo from './logo.webp'; // Assuming you have a logo image in the src directory
import searchicon from './search.png';

const Navbar = () => {
  const { mainsForm, setMainsForm } = useContext(FormContext);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      // Navigate to /jeemains/jossa and pass the college name as a query parameter or state
      const newForm = {
        ...mainsForm,
        college_name: searchQuery,
        collegeName:searchQuery
      };
      setMainsForm(newForm);
      console.log(newForm);
      navigate('/jeemains/jossa');
      setSearchQuery(''); // Clear the search box
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        <span className="navbar-name">MyCollege</span>
      </div>
      <div className="navbar-search">
        <img src={searchicon} alt="Search Icon" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
          placeholder="Search Colleges..."
        />
      </div>
    </nav>
  );
};

export default Navbar;
