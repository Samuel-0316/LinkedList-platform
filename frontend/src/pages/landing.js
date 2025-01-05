// frontend/src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/landing.css';

const Landing = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="content-wrapper animate__animated animate__fadeIn">
          <h1>Master Data Structures & Algorithms</h1>
          <main class="container">
            <p>Let's focus on</p>
            <section class="animation">
                <div class="first"><div>Linked-List</div></div>
                <div class="second"><div>Stacks</div></div>
                <div class="third"><div>Queues</div></div>
            </section>
        </main>
          <p className="subtitle">
            Enhance your problem-solving skills with our comprehensive learning platform. 
            Interactive lessons, real-world examples, and hands-on practice.
          </p>
          <div className="feature-grid">
            <div className="feature-item">
              <i className="fas fa-code"></i>
              <h3>Interactive Learning</h3>
              <p>Practice with real coding challenges</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-chart-line"></i>
              <h3>Track Progress</h3>
              <p>Monitor your learning journey</p>
            </div>
            <br />
            <div className="feature-item">
              <i className="fas fa-users"></i>
              <h3>Community Support</h3>
              <p>Learn and grow together</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-certificate"></i>
              <h3>Certificates</h3>
              <p>Earn recognition for your skills</p>
            </div>
          </div>
          <Link to="/signup" className="get-started-btn">
            Get Started
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;