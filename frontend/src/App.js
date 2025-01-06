// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './pages/landing';
import Signup from './pages/signup';
import Login from './pages/login';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import Dashboard from './pages/dashboard';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Signup /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;