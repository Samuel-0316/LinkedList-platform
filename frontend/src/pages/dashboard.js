import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../assets/styles/dashboard.css';
import pro_pic from '../assets/images/pro_pic.jpg';

const Dashboard = () => {
  const [completed, setCompleted] = useState(true);
  const [completedMessage, setcompletedMessage] = useState(" ");
  const navigate = useNavigate();
  const [ouruser, setUsername] = useState('');

  useEffect(() => {
    const storedusername = localStorage.getItem('username');
    setUsername(storedusername || " ");
  }, []);

  const user = {
    name: "Samuel Srujan B",
    profilePic: "",
    courses: [
      {
        id: 1,
        title: "Introduction and Operations of Linked List",
        totalLessons: 6
      },
      {
        id: 2,
        title: "Single Linked List",
        totalLessons: 7
      },
      {
        id: 3,
        title: "Double Linked List",
        totalLessons: 7
      },
      {
        id: 4,
        title: "Circular Linked List",
        totalLessons: 7
      },
      {
        id: 5,
        title: "Stack implementation using Linked List",
        totalLessons: 9
      },
      {
        id: 6,
        title: "Queue implementation using Linked List",
        totalLessons: 8
      }
    ]
  };

  // Calculate overall progress
  const calculateOverallProgress = () => {
    const totalProgress = user.courses.reduce((sum, course) => sum + course.progress, 0);
    return Math.round(totalProgress / user.courses.length);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUsername('');
    navigate('/login');
  };

  const handleCertificate = async () => {
    if (!completed) {
      setcompletedMessage("first course complete mado laude");
      return;
    }
    try {
      setcompletedMessage("Downloading...")
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/certificate', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ isCompleted: true }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Certificate.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      } else {
        const errorData = await response.json();
        console.error('Error:', errorData);
      }
    } catch (error) {
      console.error('Error generating certificate:', error);
    }
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <div className="user-header animate__fadeIn">
          <div className="profile-section">
            <img
              src={pro_pic}
              alt="Profile"
              className="profile-pic"
            />
            <div className="greeting-container">
              <div className="greeting-header">
                <div className="greeting">
                  <h1>Welcome, {ouruser}</h1>
                  <p>Continue your learning journey</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            </div>
          </div>

          <div className="overall-progress">
            <h3>Overall Course Progress</h3>
            <div className="main-progress-bar">
              <div
                className="main-progress-fill"
                style={{ width: `${calculateOverallProgress()}%` }}
              ></div>
            </div>
            <p className="progress-text">{calculateOverallProgress()}% Complete</p>
          </div>

          <div className="quick-stats">
            <div className="stat-card">
              <i className="fas fa-book-open"></i>
              <div>
                <h3>Current Courses</h3>
                <p>{user.courses.length}</p>
              </div>
            </div>
            <div className="stat-card">
              <i className="fas fa-clock"></i>
              <div>
                <h3>Learning Hours</h3>
                <p>24</p>
              </div>
            </div>
          </div>
        </div>

        <section className="courses-section">
          <h2>Your Courses</h2>
          <div className="courses-grid">
            {user.courses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <div className="progress-badge">
                    {course.progress}%
                  </div>
                </div>
                <div className="course-stats">
                  <p>Total no of {course.totalLessons} lessons</p>
                </div>
                <Link
                  to={`/learn/${course.id}`}
                  className="continue-btn"
                >
                  {course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </section>
        <div className='generate-certificate-container'>
          <button onClick={handleCertificate}>Generate Certificate</button>
          <div className='not-completed-message'>
            <p>{completedMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;