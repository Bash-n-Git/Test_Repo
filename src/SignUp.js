import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    password: '',
    confirmPassword: '',
    consent: false,
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validate = () => {
    const errors = {};

    if (!/^[A-Za-z]+$/.test(formData.firstName)) {
      errors.firstName = 'First name should only contain alphabets.';
    }

    if (!/^[A-Za-z]+$/.test(formData.lastName)) {
      errors.lastName = 'Last name should only contain alphabets.';
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmpassword = 'Passwords do not match.';
    }

    if (!formData.password) {errors.password = 'Password is required';}

    if (!formData.consent) {
      errors.consent = 'You must consent to receive emails from ICC.';
    }

    if (!formData.privacyPolicy) {
      errors.privacyPolicy = 'You must agree to the Privacy Policy and Terms & Conditions.';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmissionStatus('');

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const emailInput = document.getElementById('email');
    if (!emailInput.checkValidity()) {
      emailInput.reportValidity();
      return;
    }

    setTimeout(() => {
      setSubmissionStatus('Account created successfully!');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        password: '',
        confirmPassword: '',
        consent: false,
        privacyPolicy: false,
      });
      setErrors({});
    }, 1000);
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <h2>Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <button type="button" className="verification-button">Send verification code</button>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Country</option>
              <option value="us">United States</option>
              <option value="uk">United Kingdom</option>
              <option value="in">India</option>
              
            </select>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {errors.confirmpassword && <div className="error">{errors.confirmpassword}</div>}
          </div>
          <div className="form-group checkbox-group">
            <div className='check'>
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                required
              /> 
            </div>
            <div className="text">I consent to ICC keeping me informed by email about products, services, and content</div>
            {errors.consent && <div className="errored">{errors.consent}</div>}
          </div>
          <div className="form-group checkbox-group">
            <div className='check'>
              <input
                type="checkbox"
                name="privacyPolicy"
                checked={formData.privacyPolicy}
                onChange={handleChange}
                required
              /> 
             
            </div>
            <div className='text'>I have read and understood the <a href="/privacy-policy">Privacy Policy</a> and agree to the <a href="/terms-conditions">Terms and Conditions</a> </div>
            {errors.privacyPolicy && <div className="errored">{errors.privacyPolicy}</div>}
          
          </div>  
   
          <button type="submit" className="signup-button">Create Account</button>
          {submissionStatus && <div className="submission-status">{submissionStatus}</div>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
