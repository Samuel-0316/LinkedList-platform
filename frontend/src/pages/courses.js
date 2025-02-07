import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../assets/styles/courses.css';
import Footer from '../components/footer';

const CoursesPage = () => {
  const courses = [
    {
      id: 1,
      title: "Introduction and Operations of Linked List",
      description: "Master the fundamentals of linked lists and their basic operations. Perfect for beginners starting their data structures journey.",
      totalLessons: 18,
      duration: "4 weeks",
      level: "Beginner",
      highlights: ["Basic Operations", "Memory Management", "Traversal Techniques"]
    },
    {
      id: 2,
      title: "Single Linked List",
      description: "Deep dive into single linked lists - the backbone of linear data structures. Learn implementation and advanced operations.",
      totalLessons: 18,
      duration: "3 weeks",
      level: "Intermediate",
      highlights: ["Node Implementation", "Insertion/Deletion", "Search Operations"]
    },
    {
      id: 3,
      title: "Double Linked List",
      description: "Explore bidirectional linked lists and their advanced applications in modern programming.",
      totalLessons: 30,
      duration: "5 weeks",
      level: "Intermediate",
      highlights: ["Bidirectional Traversal", "Complex Operations", "Real-world Applications"]
    },
    {
      id: 4,
      title: "Circular Linked List",
      description: "Master circular linked lists and their unique applications in system programming.",
      totalLessons: 30,
      duration: "4 weeks",
      level: "Advanced",
      highlights: ["Circular Operations", "Memory Efficiency", "System Programming"]
    },
    {
      id: 5,
      title: "Stack implementation using Linked List",
      description: "Learn how to implement stacks using linked lists for efficient memory usage and dynamic sizing.",
      totalLessons: 30,
      duration: "3 weeks",
      level: "Advanced",
      highlights: ["Stack Operations", "Dynamic Memory", "Performance Analysis"]
    },
    {
      id: 6,
      title: "Queue implementation using Linked List",
      description: "Master queue implementation using linked lists for flexible and efficient data management.",
      totalLessons: 30,
      duration: "3 weeks",
      level: "Advanced",
      highlights: ["Queue Operations", "Dynamic Sizing", "Application Design"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="courses-page">
      <div className="main-section">
        <motion.div 
          className="main-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Master Data Structures</h1>
          <p>Learn the fundamentals of linked lists through hands-on, interactive courses</p>
        </motion.div>
      </div>

      <motion.div 
        className="courses-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {courses.map((course) => (
          <motion.div
            key={course.id}
            className="course-card"
            variants={cardVariants}
          >
            <div className="card-content">
              <div className="level-badge">{course.level}</div>
              <h2>{course.title}</h2>
              <p className="description">{course.description}</p>
              
              <div className="course-details">
                <div className="detail">
                  <i className="fas fa-book"></i>
                  <span>{course.totalLessons} Lessons</span>
                </div>
                <div className="detail">
                  <i className="fas fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
              </div>

              <div className="highlights">
                {course.highlights.map((highlight, index) => (
                  <div key={index} className="highlight">
                    <i className="fas fa-check"></i>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <Link to={`/learn/${course.id}`} className="enroll-btn">
                Start Learning
                <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <Footer />
    </div>
  );
};

export default CoursesPage;