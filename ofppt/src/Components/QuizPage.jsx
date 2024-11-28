import React, { useState, useEffect } from "react";
import QuestionData from "./questionData";
import "bootstrap/dist/css/bootstrap.min.css"; 
const QuizPage = ({ setPage, setScore, selectedModule }) => {
  const questions = QuestionData[selectedModule];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(15);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  useEffect(() => {
    if (timeLeft === 0) {
      handleTimeout();
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswerClick = (isCorrect, index) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
      setNextQuestion();
    } else {
      setSelectedAnswer(index);
    }
  };
  const handleTimeout = () => {
    setSelectedAnswer(null); 
    setNextQuestion();
  };
  const setNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(15); 
      setSelectedAnswer(null); 
    } else {
      setScore(correctAnswers);
      setPage("result");
    }
  };
  return (
    <div className="container py-4">
      <nav className="navbarbg-primary mb-4">
        <div className="container-fluid justify-content-center">
          <span className="badge bg-primary fs-5">{timeLeft}S</span>
        </div>
      </nav>

      <div className="row mb-3">
        <div className="col text-center">
          <h2 className="question text-dark">{questions[currentQuestion].question}</h2>
        </div>
      </div>
      <div className="row">
        {questions[currentQuestion].options.map((option, index) => (
          <div className="col-12 col-md-6 mb-3" key={index}>
            <button
              className={`btn btn-lg w-100 ${
                selectedAnswer !== null
                  ? option.correct
                    ? "btn-success"
                    : selectedAnswer === index
                    ? "btn-danger"
                    : "btn-outline-secondary"
                  : "btn-outline-white"
              }`}
              style={{
                backgroundColor: selectedAnswer === null ? "white" : "",
                color: selectedAnswer === null ? "black" : "",
                border: "3px solid #333",
              }}
              onClick={() => handleAnswerClick(option.correct, index)}
              disabled={selectedAnswer !== null}
            >
              {option.text}
            </button>
          </div>
        ))}
      </div>
      {selectedAnswer !== null && (
        <div className="row mt-4">
          <div className="col text-center">
            <button className="btn btn-primary btn-lg" onClick={setNextQuestion}>
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default QuizPage;
