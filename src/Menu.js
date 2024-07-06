import React from 'react';
import './Menu.css';
import closeIcon from './images/close.png'; 
import logo from './images/icc_logo.png'

const Menu = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-header">
        
        <img src={logo} alt="logo" className='logo'/>
        <img 
          src={closeIcon} 
          alt="Close" 
          className="close-icon" 
          onClick={toggleMenu} 
        />
      </div>
      <ul className="menu-list">
        <li>HOME</li>
        <li>MATCHES</li>
        <li>STANDINGS</li>
        <li>NEWS</li>
        <li> VIDEOS</li>
        <li>TEAMS</li>
        <li>STATS</li>
        <li>FANTASY</li>
        <li>FAN PASSPORT</li>
        <li>PREDICTOR</li>
        <li>BUY TICKETS</li>
        <li>POLLS</li>
        <li>PLAYER OF THE MATCH</li>
        <li>ABOUT</li>
        <li>ICC HOME</li>
      </ul>
      <div className="menu-footer">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
      </div>
    </div>
  );
};

export default Menu;
