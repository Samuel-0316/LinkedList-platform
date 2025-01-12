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
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizResults, setQuizResults] = useState(null);
  const [answerResults, setAnswerResults] = useState([]);
  const [attemptCount, setAttemptCount] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(360);
  const [timerExpired, setTimerExpired] = useState(false);
  const [tutorialCompleted, setTutorialCompleted] = useState(false);
  const [courseCompleted, setCourseCompleted] = useState(false);

  // Get course data based on courseId
  const course = courseData[courseId];

  useEffect(() => {
    // Redirect if invalid course ID
    if (!course) {
      navigate('/dashboard');
    }
  }, [course, navigate]);

  // Timer effect
  useEffect(() => {
    let timer;
    if (quizStarted && !quizSubmitted && !timerExpired && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setTimerExpired(true);
            handleTimeUp();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, quizSubmitted, timerExpired]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleMarkCourseComplete = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:5000/api/course/update-progress', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "courseId": courseId }), // Ensure this matches the backend expected field
      });
  
      if (!response.ok) {
        throw new Error('Failed to mark course as completed');
      }
      const data = await response.json();
      setCourseCompleted(true);
      alert('Congratulations! Course marked as completed.');
      navigate('/dashboard');
    } catch (error) {
      console.error('Error marking course as complete:', error);
      alert('Failed to mark course as completed. Please try again.');
    }
  };

  const handleTimeUp = () => {
    setQuizSubmitted(true);
    setAttemptCount(prev => prev + 1);
    setQuizResults({
      score: 0,
      total: course.quizzes.length,
      passed: false,
      timeExpired: true
    });
  };

  const handleModeSwitch = (mode) => {
    if (mode === 'quiz' && !tutorialCompleted) {
      alert('Please complete the tutorial first before accessing the quiz.');
      return;
    }
    
    setActiveMode(mode);
    if (mode === 'quiz') {
      setQuizStarted(false);
      setQuizSubmitted(false);
      setQuizResults(null);
      setCurrentQuestion(0);
      setSelectedAnswers({});
      setTimeRemaining(360);
      setTimerExpired(false);
    }
  };

  const handleQuizStart = () => {
    setQuizStarted(true);
    setTimeRemaining(360);
    setTimerExpired(false);
  };

  const handleSectionChange = (index) => {
    setCurrentSection(index);
  };

  const handleNextSection = () => {
    if (currentSection < course.tutorials.sections.length - 1) {
      setCurrentSection(currentSection + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
  };

  const handleAnswerSelect = (questionId, optionIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: optionIndex
    });
  };

  const evaluateQuiz = () => {
    let correctAnswers = 0;
    const detailedResults = course.quizzes.map(question => {
      const isCorrect = selectedAnswers[question.id] === question.correctAnswer;
      if (isCorrect) correctAnswers++;
      
      return {
        questionId: question.id,
        question: question.question,
        selectedAnswer: selectedAnswers[question.id],
        correctAnswer: question.correctAnswer,
        isCorrect: isCorrect,
        options: question.options
      };
    });
    
    const passed = correctAnswers >= 4;
    
    if (!passed) {
      setAttemptCount(prev => prev + 1);
    }
    
    setAnswerResults(detailedResults);
    setQuizResults({
      score: correctAnswers,
      total: course.quizzes.length,
      passed
    });
    setQuizSubmitted(true);
  };

  const handleRetryQuiz = () => {
    if (attemptCount < 3) {
      handleModeSwitch('quiz');
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < course.quizzes.length - 1) {
      setCurrentQuestion(curr => curr + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(curr => curr - 1);
    }
  };

  const handleStartQuiz = () => {
    if (tutorialCompleted) {
      setActiveMode('quiz');
      setQuizStarted(false);
      setTimeRemaining(360);
      setTimerExpired(false);
    } else {
      alert('Please complete the tutorial first before starting the quiz.');
    }
  };

  const renderTutorialMode = () => (
    <div className="tutorial-container animate__fadeIn">
      <div className="content-area">
        {/* <h2>{courseId}</h2> */}
        <h2>{course.tutorials.sections[currentSection].title}</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={course.videoUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="notes-section">
          <h3>Notes</h3>
          <div
            className="notes-content"
            dangerouslySetInnerHTML={{ __html: course.tutorials.sections[currentSection].content }}
          ></div>
          <div className="tutorial-navigation">
            <button 
              className="nav-button"
              onClick={handlePreviousSection}
              disabled={currentSection === 0}
            >
              <i className="fas fa-arrow-left"></i> Previous
            </button>
            {currentSection === course.tutorials.sections.length - 1 ? (
              <button 
                className="complete-button"
                onClick={() => {
                  setTutorialCompleted(true);
                  handleStartQuiz();
                }}
              >
                <i className="fas fa-check-circle"></i> Complete & Start Quiz
              </button>
            ) : (
              <button 
                className="nav-button"
                onClick={handleNextSection}
              >
                Next <i className="fas fa-arrow-right"></i>
              </button>
            )}
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

  const renderQuizMode = () => {
    if (quizSubmitted) {
      return (
        <div className="quiz-results animate__fadeIn">
          <div className="results-card">
            <div className="results-header">
              <i className={`fas ${quizResults.passed ? 'fa-check-circle' : 'fa-times-circle'}`}></i>
              <h2>{quizResults.timeExpired ? 'Time Over!' : (quizResults.passed ? 'Congratulations!' : 'Keep Practicing')}</h2>
            </div>
            
            <div className="score-display">
              <div className="score-circle">
                <div className="score-number">{quizResults.score}</div>
                <div className="score-total">out of {quizResults.total}</div>
              </div>
            </div>
  
            <div className="result-message">
              {quizResults.timeExpired ? (
                <p className="failure-message">You ran out of time. Please try again.</p>
              ) : quizResults.passed ? (
                <>
                  <p className="success-message">Great job! You've passed the quiz!</p>
                  <p className="score-description">
                    You got {quizResults.score} questions right out of {quizResults.total}.
                  </p>
                </>
              ) : (
                <>
                  <p className="failure-message">You didn't pass this time.</p>
                  <p className="score-description">
                    You needed 4 correct answers to pass.
                    {attemptCount >= 3 ? 
                      " You've reached the maximum number of attempts." :
                      ` You have ${3 - attemptCount} attempts remaining.`}
                  </p>
                </>
              )}
            </div>
  
            <div className="answers-review">
              <h3>Detailed Results</h3>
              {answerResults.map((result, index) => (
                <div key={result.questionId} className={`answer-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="question-number">Question {index + 1}</div>
                  <div className="question-text">{result.question}</div>
                  <div className="answer-details">
                    <div className="your-answer">
                      <strong>Your Answer:</strong> {result.options[result.selectedAnswer]}
                      <span className={`answer-icon ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                        <i className={`fas ${result.isCorrect ? 'fa-check' : 'fa-times'}`}></i>
                      </span>
                    </div>
                    {!result.isCorrect && (
                      <div className="correct-answer">
                        <strong>Correct Answer:</strong> {result.options[result.correctAnswer]}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
  
            <div className="results-actions">
              {quizResults.passed ? (
                <>
                  {!courseCompleted && (
                    <button 
                      className="complete-course-button"
                      onClick={handleMarkCourseComplete}
                    >
                      <i className="fas fa-graduation-cap"></i>
                      Mark Course Completed
                    </button>
                  )}
                  <button 
                    className="review-button"
                    onClick={() => setActiveMode('tutorial')}
                  >
                    <i className="fas fa-book"></i>
                    Review Material
                  </button>
                </>
              ) : (
                <>
                  {attemptCount < 3 && (
                    <button 
                      className="retry-button"
                      onClick={handleRetryQuiz}
                    >
                      <i className="fas fa-redo"></i>
                      Try Again
                    </button>
                  )}
                  <button 
                    className="review-button"
                    onClick={() => setActiveMode('tutorial')}
                  >
                    <i className="fas fa-book"></i>
                    Review Material
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="quiz-container animate__fadeIn">
        {!quizStarted ? (
          <div className="quiz-start-section">
            <h2>Ready to Start the Quiz?</h2>
            <div>
              <h4 className="quiz-instructions" id="ins">
                You will have 6 minutes to complete this quiz. <br />The timer will start as soon as you click 'Start Quiz'.
              </h4>
              <button
                className="start-quiz-btn"
                onClick={handleQuizStart}
              >
                Start Quiz
              </button>
            </div>
          </div>
        ) : course.quizzes.length > 0 ? (
          <>
            <div className="quiz-header">
              <div className="quiz-progress">
                <span>Question {currentQuestion + 1} of {course.quizzes.length}</span>
                <span className="timer">Time Remaining: {formatTime(timeRemaining)}</span>
              </div>
            </div>
            <div className="question-card">
              <h3>{course.quizzes[currentQuestion].question}</h3>
              <div className="options-grid">
                {course.quizzes[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    className={`option-button ${selectedAnswers[course.quizzes[currentQuestion].id] === index ? 'selected' : ''}`}
                    onClick={() => handleAnswerSelect(course.quizzes[currentQuestion].id, index)}
                  >
                    <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                    {option}
                  </button>
                ))}
              </div>
              <div className="quiz-navigation">
                <button
                  className="nav-button"
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                >
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                {currentQuestion === course.quizzes.length - 1 ? (
                  <button
                    className="submit-quiz-button"
                    onClick={evaluateQuiz}
                    disabled={Object.keys(selectedAnswers).length < course.quizzes.length}
                  >
                    <i className="fas fa-check-circle"></i> Submit Quiz
                  </button>
                ) : (
                  <button
                    className="nav-button"
                    onClick={handleNextQuestion}
                  >
                    Next <i className="fas fa-arrow-right"></i>
                  </button>
                )}
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
  };

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
          disabled={!tutorialCompleted}
        >
          <i className="fas fa-question-circle"></i>
          Quiz {!tutorialCompleted && '(Complete Tutorial First)'}
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