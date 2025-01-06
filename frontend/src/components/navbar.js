import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar animate__animated animate__fadeIn">
      <Link to="/" className="brand">
        <div className="brand-logo">
          <i className="fas fa-code"></i>
        </div>
        <span className="brand-name">LinkedStruct</span>
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;