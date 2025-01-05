import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/signup.css';

const Signup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = document.querySelector('.submit-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);
  };

  const handleInputFocus = (e) => {
    e.target.parentElement.querySelector('i').style.color = '#6366f1';
  };

  const handleInputBlur = (e) => {
    e.target.parentElement.querySelector('i').style.color = '#9ca3af';
  };

  return (
    <div className="signup-page">
      <div className="signup-container animate__animated animate__fadeIn">
        <div className="logo-container">
          <div className="logo">
            <i className="fas fa-code"></i>
          </div>
        </div>
        <h2>Join LinkedStruct</h2>
        <form id="signupForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input 
              type="text" 
              id="name" 
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              required
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <i className="fas fa-lock"></i>
          </div>
          <button type="submit" className="submit-btn">
            Create Account
          </button>
          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;