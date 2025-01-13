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
import LearningInterface from './pages/learning_interface';
import CoursesPage from './pages/courses';
import PrivateRoute from './components/privateroute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/learn/:courseId" element={<PrivateRoute>
              <LearningInterface />
            </PrivateRoute>} />
        <Route path="/courses" element={<PrivateRoute>
              <CoursesPage />
            </PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
