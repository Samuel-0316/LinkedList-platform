import React from 'react';
import '../assets/styles/about.css';
import Footer from './footer';

const AboutPage = () => {
  return (
    <>
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      
      <section className="about-content">
        <h2>Welcome to Our Learning Platform</h2>
        <p>
          Our platform is designed to make learning fun and interactive. 
          Whether you’re a beginner or looking to deepen your understanding, 
          we provide easy-to-follow tutorials, quizzes, and games to help you grasp the fundamentals of Linked Lists.
        </p>

        <h3>Our Mission</h3>
        <p>
          We aim to empower students and professionals by providing an engaging, 
          user-friendly platform to enhance their coding skills, especially in data structures like Linked Lists.
        </p>

        <h3>What We Offer</h3>
        <ul>
          <li>Interactive tutorials on Linked List concepts</li>
          <li>Quiz challenges to test your knowledge</li>
          <li>Fun games for a more engaging learning experience</li>
          <li>Video classes from experts in the field</li>
        </ul>
      </section>
    </div>
    <Footer/>
    </>
    
  );
};

export default AboutPage;
