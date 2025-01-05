// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
// import Home from './pages/Home';
import Signup from './pages/signup';
import Login from './pages/login';
// Import other pages as needed

function App() {
  return (
    <Router>
      <Navbar />
      {/* <Signup /> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;