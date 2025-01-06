import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseData from '../data/courseData';
import '../assets/styles/learning_interface.css';

const LearningInterface = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [activeMode, setActiveMode] = useState('tutorial');
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  // Get course data based on courseId
  const course = courseData[courseId];

  useEffect(() => {
    // Redirect if invalid course ID
    if (!course) {
      navigate('/dashboard');
    }
  }, [course, navigate]);

  if (!course) return null;

  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
  };

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const renderTutorialMode = () => (
    <div className="tutorial-container animate__fadeIn">
      <div className="content-area">
        <h2>{course.tutorials.sections[currentSection].title}</h2>
        <div className="video-container">
          <img 
            src={course.tutorials.sections[currentSection].videoUrl}
            alt="Video content" 
            className="video-placeholder"
          />
        </div>
        <div className="notes-section">
          <h3>Notes</h3>
          <div className="notes-content">
            {course.tutorials.sections[currentSection].content}
          </div>
        </div>
      </div>
      <div className="sidebar">
        <h3>Contents</h3>
        <ul className="contents-list">
          {course.tutorials.sections.map((section, index) => (
            <li 
              key={section.id}
              className={currentSection === index ? 'active' : ''}
              onClick={() => handleSectionChange(index)}
            >
              {section.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderInteractiveMode = () => (
    <div className="interactive-container animate__fadeIn">
      <div className="placeholder-content">
        <i className="fas fa-code"></i>
        <h2>Interactive Learning Mode</h2>
        <p>Interactive exercises for {course.title} will be available soon.</p>
      </div>
    </div>
  );

  const renderQuizMode = () => (
    <div className="quiz-container animate__fadeIn">
      {course.quizzes.length > 0 ? (
        <>
          <div className="quiz-progress">
            Question {currentQuestion + 1} of {course.quizzes.length}
          </div>
          <div className="question-card">
            <h2>{course.quizzes[currentQuestion].question}</h2>
            <div className="options-grid">
              {course.quizzes[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button ${
                    selectedAnswers[course.quizzes[currentQuestion].id] === index 
                      ? 'selected' 
                      : ''
                  }`}
                  onClick={() => handleAnswerSelect(course.quizzes[currentQuestion].id, index)}
                >
                  <span className="option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  {option}
                </button>
              ))}
            </div>
            <div className="quiz-navigation">
              <button 
                className="nav-button"
                disabled={currentQuestion === 0}
                onClick={() => setCurrentQuestion(curr => curr - 1)}
              >
                <i className="fas fa-arrow-left"></i> Previous
              </button>
              <button 
                className="nav-button"
                disabled={currentQuestion === course.quizzes.length - 1}
                onClick={() => setCurrentQuestion(curr => curr + 1)}
              >
                Next <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="placeholder-content">
          <i className="fas fa-question-circle"></i>
          <h2>No Quizzes Available</h2>
          <p>Quizzes for this section will be added soon.</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="learning-interface-page">
      <div className="mode-switcher">
        <button 
          className={`mode-button ${activeMode === 'tutorial' ? 'active' : ''}`}
          onClick={() => handleModeSwitch('tutorial')}
        >
          <i className="fas fa-book"></i>
          Tutorial
        </button>
        <button 
          className={`mode-button ${activeMode === 'interactive' ? 'active' : ''}`}
          onClick={() => handleModeSwitch('interactive')}
        >
          <i className="fas fa-laptop-code"></i>
          Interactive
        </button>
        <button 
          className={`mode-button ${activeMode === 'quiz' ? 'active' : ''}`}
          onClick={() => handleModeSwitch('quiz')}
        >
          <i className="fas fa-question-circle"></i>
          Quiz
        </button>
      </div>
      <div className="mode-content">
        {activeMode === 'tutorial' && renderTutorialMode()}
        {activeMode === 'interactive' && renderInteractiveMode()}
        {activeMode === 'quiz' && renderQuizMode()}
      </div>
    </div>
  );
};

export default LearningInterface;