// Footer.jsx
import React from 'react';
import './Footer.scss';
import logo from '../Navbar/logo.webp';  // Assuming you have a logo image in the src directory
import facebookIcon from './facebook.png';
import twitterIcon from './twitter.png';
import linkedinIcon from './linkedin.png';
import instagramIcon from './instagram.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <span className="footer-name">MyCollege</span>
        </div>
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            We are dedicated to providing the best resources and information about colleges to help you make informed decisions about your education.
          </p>
        </div>
        <div className="footer-links">
          <h2>Top Exams</h2>
          <ul>
            <li><a href="https://jeemain.nta.ac.in/">JEE MAINS</a></li>
            <li><a href="https://jeeadv.ac.in/">JEE ADVANCED</a></li>
            <li><a href="https://neet.nta.nic.in/">NEET</a></li>
            <li><a href="https://iimcat.ac.in/per/g01/pub/756/ASM/WebPortal/1/index.html?756@@1@@1">CAT</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100075846414740" target="_blank" rel="noopener noreferrer">
              <img  src={facebookIcon}alt="Facebook" />
            </a>
            <a href="https://www.linkedin.com/in/gourabh-raghuwanshi-62831924a/" target="_blank" rel="noopener noreferrer">
              <img  src={twitterIcon}alt="Twitter" />
            </a>
            <a href="https://www.linkedin.com/in/anish-raj-576912224/" target="_blank" rel="noopener noreferrer">
              <img  src={linkedinIcon}alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/ultimate_2511/" target="_blank" rel="noopener noreferrer">
              <img  src={instagramIcon}alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 MyCollege. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
