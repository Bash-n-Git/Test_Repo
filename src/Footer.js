import React from 'react';
import './Footer.css'; 
import emiratesLogo from './images/emirates.png';
import aramcoLogo from './images/aramco.png';
import dpworldLogo from './images/dpworld.png';
import cocacolaLogo from './images/cocacola.png';
import indusindbankLogo from './images/indusindbank.png';
import royalstagLogo from './images/royalstag.png';
import fancrazeLogo from './images/fancraze.png';
import nearLogo from './images/near.png';

import iccLogo from './images/icc_logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="partners">
        <div className="partner-section">
          <div className="logos">
            <img src={emiratesLogo} alt="Emirates" />
            <img src={aramcoLogo} alt="Aramco" />
            <img src={dpworldLogo} alt="DP World" />
          </div>
          <p>PREMIER PARTNERS</p>
        </div>
        <div className="partner-section">
          <div className="logos">
            <img src={cocacolaLogo} alt="Coca Cola" />
            <img src={indusindbankLogo} alt="IndusInd Bank" />
          </div>
          <p>GLOBAL PARTNERS</p>
        </div>
        <div className="partner-section">
          <div className="logos">
            <img src={royalstagLogo} alt="Royal Stag" />
            <img src={fancrazeLogo} alt="FanCraze" />
            <img src={nearLogo} alt="Near" />
          </div>
          <p>OFFICIAL SUPPORTER</p>
        </div>
      </div>
      <div class="names">
                  <i class="fa fa-instagram" style={{fontSize:"36px"}}></i>
                  <i class="fa fa-whatsapp" style={{fontSize:"36px"}}></i>
                  <i class="fa fa-twitter" style={{fontSize:"36px"}}></i>
                  <i class="fa fa-youtube" style={{fontSize:"36px"}}></i>
        </div>
      <div className="links">
        <a href="#">TERMS OF SERVICE</a>
        <a href="#">PRIVACY POLICY</a>
        <a href="#">CAREERS</a>
        <a href="#">RELATED SITES</a>
        <a href="#">ABOUT</a>
      </div>
      <div className="iccium-logo">
        <img src={iccLogo} alt="ICC" />
        <p>&copy; 2024 ICC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
