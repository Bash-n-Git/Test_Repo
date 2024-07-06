import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 
import cricketLogo from './images/icc_logo.png';
import optionsIcon from './images/options.png';
import Menu from './Menu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar navbar-expand-sm">
      
        <div className="navbar-left">
          <img src={optionsIcon} alt="Options" className="options-icon" onClick={toggleMenu} />
          <Link to="/"><img src={cricketLogo} alt="Cricket Logo" className="navbar-logo" /></Link>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">Matches</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">Standings</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">Videos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">Ticketing</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="#">More</Link>
          </li>
        </ul>
        <div className="navbar-right">
          <div className="search-container">
            <Link to="/search"><i className="fa fa-search"></i></Link>
          </div>
          <Link to="/signin"><button className="sign-in-btn"><i className="fa fa-user"></i> Sign In</button></Link>
        </div>
      <Menu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default Navbar;
