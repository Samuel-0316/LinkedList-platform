import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../assets/styles/dashboard.css';
import pro_pic from '../assets/images/pro_pic.jpg'

const Dashboard = () => {
  const navigate = useNavigate();
  // This would typically come from your auth/user context
  const user = {
    name: "John Doe",
    profilePic: "",
    courses: [
      {
        id: 1,
        title: "Data Structures Fundamentals",
        progress: 65,
        totalLessons: 24,
        completedLessons: 16,
      },
      {
        id: 2,
        title: "Algorithm Analysis",
        progress: 30,
        totalLessons: 18,
        completedLessons: 6,
      },
      {
        id: 3,
        title: "Advanced Problem Solving",
        progress: 15,
        totalLessons: 30,
        completedLessons: 4,
      }
    ]
  };

  const handleLogout = () => {
    // Add your logout logic here
    navigate('/login');
  };

  return (
    <div className="dashboard-page">
      <div className="dashboard-content">
        <div className="user-header animate__fadeIn">
          <div className="profile-section">
            <img 
            //   src={user.profilePic} 
              src={pro_pic}
              alt="Profile" 
              className="profile-pic"
            />
            <div className="greeting-container">
              <div className="greeting-header">
                <div className="greeting">
                  <h1>Welcome, {user.name}</h1>
                  <p>Continue your learning journey</p>
                </div>
                <button onClick={handleLogout} className="logout-btn">
                  <i className="fas fa-sign-out-alt"></i>
                  Logout
                </button>
              </div>
            </div>
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
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="course-stats">
                  <p>{course.completedLessons} of {course.totalLessons} lessons completed</p>
                </div>
                <Link to={`/course/${course.id}`} className="continue-btn">
                  Continue Learning
                  <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;