import React ,{useContext} from 'react';
import './Navbar.scss';
import logo from './logo.webp';  // Assuming you have a logo image in the src directory
import searchicon from './search.png';
import { FaUser, FaSignInAlt } from 'react-icons/fa';  // Importing icons for user profile and login
import  SignIn  from '../signin/SignIn.jsx'
import  SignUp  from '../signup/SignUp.jsx'
import UserContext from '../../Context/UserContext';
const Navbar = ({ userName }) => {
  const { user, setUser } = useContext(UserContext);
  console.log(user);
  const handleSignout = async () => {
    try {
      const res = await fetch('http://localhost:4000/signout', {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUser('');
        console.log(user);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
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
          <span className="profile-name">{user.name}</span>
        </div>
        {user ?<a href="/signin" className="navbar-login">
          <FaSignInAlt onClick = {handleSignout} /> SignOut
        </a>:<a href="/signin" className="navbar-login">
          <FaSignInAlt /> SignIn
        </a> }
        
      </div>
    </nav>
  );
};

export default Navbar;
