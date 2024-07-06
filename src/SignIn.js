import React from 'react';
import './SignIn.css';
import iccLogo from './images/icc_logo.png'; 
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="signin-container">
      <div className="signin-content">
        <img src={iccLogo} alt="ICC Logo" className="icc-logo" />
        <h2>Log in or Create Your Account</h2>
        
        <form className="signin-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <div className="signin-options">
            <a href="#" className="forgot-password">Forgot your password?</a>
            <div>
               <input type="checkbox" />
            </div>
             
               
              <div className="oltext">
                Keep me logged in
              </div>
              
    
          </div>
          <button type="submit" className="signin-button">Log In</button>
        </form>
        
        <p className="signup-text">
          Don't have an account? <br />
          Sign up today for exclusive content, early access to tickets and other membership rewards  <Link to="/signup" className="signup-link">Sign Up</Link>
          
        </p>
        
        <h3>Sign in with your social account</h3>
        <div className="social-signin">
          <button className="social-button facebook-button">
            <i className="fa fa-facebook"></i> Facebook
          </button>
          <button className="social-button google-button">
            <i className="fa fa-google"></i> Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
