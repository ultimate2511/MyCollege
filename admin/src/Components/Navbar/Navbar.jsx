import React, { useContext, useState } from 'react';
import './Navbar.scss';
import logo from './logo.webp';
import searchicon from './search.png';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';
import SearchContext from '../../Context/SearchContext';
const Navbar = () => {
  const {search,setSearch} = useContext(SearchContext);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredColleges, setFilteredColleges] = useState([]);
  const collegeOptions = [
    'NIT Agartala',
    'NIT Arunachal Pradesh',
    'NIT Andhra Pradesh',
    'MANIT Bhopal',
    'NIT Calicut',
    'NIT Delhi',
    'NIT Durgapur',
    'NIT Goa',
    'NIT Hamirpur',
    'NIT Jamshedpur',
    'NIT Kurukshetra',
    'NIT Manipur',
    'NIT Meghalaya',
    'NIT Mizoram',
    'NIT Nagaland',
    'NIT Patna',
    'NIT Puducherry',
    'NIT Raipur',
    'NIT Rourkela',
    'NIT Sikkim',
    'NIT Silchar',
    'NIT Srinagar',
    'SVNIT Surat',
    'NIT Tiruchirappalli',
    'NIT Uttarakhand',
    'NIT Warangal',
    'NIT Jalandhar',
    'MNIT Jaipur',
    'MNNIT Allahabad',
    'VNIT Nagpur',
    'NIT Andhra Pradesh',
  ];

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    if (query) {
      const filtered = collegeOptions.filter((college) =>
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
    setSearch(query);
    navigate(`/show-colleges`);
    setSearchQuery('');
    setFilteredColleges([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    executeSearch(suggestion);
    setSearch(suggestion);
  };

  const handleSignout = async () => {
    try {
      const res = await fetch('https://mycollege-backend.onrender.com/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUser(null);
        navigate('/signin');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
          <span className="navbar-name">MyCollege <br />Admin</span>
        </div>
      </Link>
      <div className="navbar-search">
        <img src={searchicon} alt="Search Icon" />
        <input
          type="text"
          placeholder="Search Colleges..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
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
      <div className="navbar-right">
        <div className="navbar-profile">
          <FaUser /> Profile
          <span className="profile-name">{user?.name}</span>
        </div>
        {user ? (
          <button onClick={handleSignout} className="navbar-login">
            <FaSignInAlt /> Sign Out
          </button>
        ) : (
          <Link to="/signin" className="navbar-login">
            <FaSignInAlt /> Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
