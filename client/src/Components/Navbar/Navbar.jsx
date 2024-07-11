import React, { useState, useContext } from 'react';
import './Navbar.scss';
import FormContext from '../../Context/FormContext';
import { useNavigate } from 'react-router-dom';
import logo from './logo.webp'; // Assuming you have a logo image in the src directory
import searchicon from './search.png';

const Navbar = () => {
  const { mainsForm, setMainsForm } = useContext(FormContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const navigate = useNavigate();
  const collegeOptions = [
    "NIT Agartala",
    "NIT Arunachal Pradesh",
    "NIT Andhra Pradesh",
    "MANIT Bhopal",
    "NIT Calicut",
    "NIT Delhi",
    "NIT Durgapur",
    "NIT Goa",
    "NIT Hamirpur",
    "NIT Jamshedpur",
    "NIT Kurukshetra",
    "NIT Manipur",
    "NIT Meghalaya",
    "NIT Mizoram",
    "NIT Nagaland",
    "NIT Patna",
    "NIT Puducherry",
    "NIT Raipur",
    "NIT Rourkela",
    "NIT Sikkim",
    "NIT Silchar",
    "NIT Srinagar",
    "SVNIT Surat",
    "NIT Tiruchirappalli",
    "NIT Uttarakhand",
    "NIT Warangal",
    "NIT Jalandhar",
    "MNIT Jaipur",
    "MNNIT Allahabad",
    "VNIT Nagpur",
    "NIT Andhra Pradesh"
  ];

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = collegeOptions.filter(college =>
        college.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredColleges(filtered);
    } else {
      setFilteredColleges([]);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      executeSearch(searchQuery);
    }
  };

  const executeSearch = (query) => {
    const newForm = {
      ...mainsForm,
      college_name: query,
      collegeName: query
    };
    setMainsForm(newForm);
    console.log(newForm);
    navigate('/jeemains/jossa');
    setSearchQuery(''); // Clear the search box
    setFilteredColleges([]); // Clear the suggestions
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    executeSearch(suggestion);
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
        {filteredColleges.length > 0 && (
          <ul className="suggestions">
            {filteredColleges.map((college, index) => (
              <li key={index} onClick={() => handleSuggestionClick(college)}>
                {college}
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
