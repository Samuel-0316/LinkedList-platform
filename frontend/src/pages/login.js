import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/login.css';

const Login = () => {
  const navigate = useNavigate();

  // State to hold form data and messages
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const btn = document.querySelector('.login-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);

    try {
      // Send login request using Axios
      const response = await axios.post('http://localhost:5000/api/auth/login', formData);
      console.log('Response Data:', response.data);

      if (response.status === 200) {
        localStorage.setItem('username',response.data.data.username);
        localStorage.setItem('token',response.data.data.token);
        // Login successful, redirect to dashboard
        console.log('Login successful:', response.data);
        navigate('/dashboard'); // Adjust the path as per your routing
      } else {
        // Login failed, display error message
        setErrorMessage(response.data.message || 'Login failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An error occurred. Please try again later.');
    }
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
              value={formData.email}
              onChange={handleInputChange}
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
              value={formData.password}
              onChange={handleInputChange}
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="signup-link">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
