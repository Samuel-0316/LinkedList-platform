import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../assets/styles/signup.css';

const Signup = () => {
  const navigate = useNavigate();

  // State to manage form input data
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState('');

  // Update state when form inputs change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const btn = document.querySelector('.submit-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 200);

    try {
      // Send POST request using Axios
      const response = await axios.post('http://localhost:5000/api/auth/signup', formData);

      if (response.status === 201) {
        console.log('Signup successful:', response.data);
        navigate('/login'); // Redirect to login page on successful signup
      }
    } catch (error) {
      // Handle errors and display a message
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.message || 'Signup failed. Please try again.');
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
      console.error('Error during signup:', error);
    }
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
            <label htmlFor="username">Full Name</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleInputChange}
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
          <button type="submit" className="submit-btn">
            Create Account
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p className="login-link">
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
