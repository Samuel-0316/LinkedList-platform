import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import courseData from '../data/courseData';
import '../assets/styles/learning_interface.css';
import QuizTimerModal from '../components/quiz_timer_modal';

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
  const [showQuizPrompt, setShowQuizPrompt] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

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
    if (mode === 'quiz') {
      setShowQuizPrompt(true);
      setQuizStarted(false);
      setQuizSubmitted(false);
      setQuizResults(null);
      setCurrentQuestion(0);
      setSelectedAnswers({});
    }
  };

  const handleQuizStart = () => {
    setShowQuizPrompt(false);
    setQuizStarted(true);
  };
  
  const handleTimeUp = () => {
    if (!quizSubmitted) {
      evaluateQuiz();
    }
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

  const renderTutorialMode = () => (
    <div className="tutorial-container animate__fadeIn">
      <div className="content-area">
        <h2>{course.tutorials.sections[currentSection].title}</h2>
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={course.videoUrl}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="notes-section">
          <h3>Notes</h3>
          <div
            className="notes-content"
            dangerouslySetInnerHTML={{ __html: course.tutorials.sections[currentSection].content }}
          ></div>
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
              <h2>{quizResults.passed ? 'Congratulations!' : 'Keep Practicing'}</h2>
            </div>
            
            <div className="score-display">
              <div className="score-circle">
                <div className="score-number">{quizResults.score}</div>
                <div className="score-total">out of {quizResults.total}</div>
              </div>
            </div>

            <div className="result-message">
              {quizResults.passed ? (
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
              {!quizResults.passed && attemptCount < 3 && (
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
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="quiz-container animate__fadeIn">
        <QuizTimerModal 
          isOpen={showQuizPrompt}
          onStart={handleQuizStart}
          onTimeUp={handleTimeUp}
        />
        {quizStarted && course.quizzes.length > 0 ? (
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
                  onClick={handlePreviousQuestion}
                >
                  <i className="fas fa-arrow-left"></i> Previous
                </button>
                {currentQuestion === course.quizzes.length - 1 ? (
                  <button
                    id='submit_button'
                    className="submit-button"
                    onClick={evaluateQuiz}
                    disabled={Object.keys(selectedAnswers).length < course.quizzes.length}
                  >
                    Submit Quiz
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
        ) : !quizStarted ? null : (
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