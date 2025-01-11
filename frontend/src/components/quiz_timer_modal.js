import React, { useState, useEffect } from 'react';
import { Timer } from "lucide-react";

const QuizTimerModal = ({ isOpen, onStart, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(6 * 60); // 6 minutes in seconds
  const [timerStarted, setTimerStarted] = useState(false);

  useEffect(() => {
    let timer;
    if (timerStarted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            onTimeUp();
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [timerStarted, timeLeft, onTimeUp]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setTimerStarted(true);
    onStart();
  };

  return (
    <div className="quiz-timer-container">
      {!timerStarted && isOpen ? (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Ready to Start the Quiz?</h2>
            <p className="modal-description">
              You will have 6 minutes to complete this quiz. The timer will start as soon as you click 'Start Quiz'.
            </p>
            <button
              onClick={handleStart}
              className="start-quiz-btn"
            >
              Start Quiz
            </button>
          </div>
        </div>
      ) : timerStarted && (
        <div className="timer-display">
          <Timer className="timer-icon" size={20} />
          <span className="time-text">
            {formatTime(timeLeft)}
          </span>
        </div>
      )}
    </div>
  );
};

export default QuizTimerModal;