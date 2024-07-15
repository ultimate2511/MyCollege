import React, { useContext } from 'react';
import './Navbar.scss';
import logo from './logo.webp';  // Assuming you have a logo image in the src directory
import searchicon from './search.png';
import { FaUser, FaSignInAlt } from 'react-icons/fa';  // Importing icons for user profile and login
import { useNavigate,Link } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

const Navbar = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const res = await fetch('https://mycollege-backend.onrender.com/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUser(null);  // Update user state to null
        navigate('/signin') // Navigate to sign-in page
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar">
     <Link to='/' style={{ textDecoration: 'none' }}
     
     > <div className="navbar-logo">
        <img src={logo} alt="Logo" />
       <span className="navbar-name" style ={{color:'white'}}>MyCollege <br />Admin</span>
      </div>
      </Link>
      <div className="navbar-search">
        <img src={searchicon} alt="Search Icon" />
        <input type="text" placeholder="Search Colleges..." />
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
          <a href="/signin" className="navbar-login">
            <FaSignInAlt /> Sign In
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
