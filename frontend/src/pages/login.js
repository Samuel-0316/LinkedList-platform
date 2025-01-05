// frontend/src/pages/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/login.css';

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const btn = document.querySelector('.login-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
      // Here you would typically handle the login logic
      // Navigate to home page after successful login
    }, 200);
  };

  const handleInputFocus = (e) => {
    e.target.parentElement.querySelector('i').style.color = '#6366f1';
  };

  const handleInputBlur = (e) => {
    e.target.parentElement.querySelector('i').style.color = '#9ca3af';
  };

  return (
    <div className="login-page">
      <div className="login-container animate__animated animate__fadeIn">
        <div className="logo-container">
          <div className="logo">
            <i className="fas fa-code"></i>
          </div>
        </div>
        <h2>Welcome Back Nerds!</h2>
        <p className="welcome-text">Enter credentials to continue your learning journey</p>
        <form id="loginForm" onSubmit={handleSubmit}>
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
          <div className="forgot-password">
            <Link to="#">Forgot Password?</Link>
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;