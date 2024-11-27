import React, { useState, useEffect } from "react";
import QuestionData from "./questionData";
const QuizPage = ({ setPage, setScore, selectedModule }) => {
  const questions = QuestionData[selectedModule];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
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
      setSelectedAnswer(index); // Show the wrong answer
    }
  };

  const handleTimeout = () => {
    setSelectedAnswer(null); // Reset selection
    setNextQuestion();
  };
  const setNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30); // Reset timer
      setSelectedAnswer(null); // Reset selected answer
    } else {
      setScore(correctAnswers);
      setPage("result");
    }
  };
  return (
    <div>
      <nav className="navtimer">
        <div className="timer" >{timeLeft}S</div>
      </nav>
      <h2 className="question">{questions[currentQuestidon].question}</h2>

      {questions[currentQuestion].options.map((option, index) => (
        <button
          className={`reponse ${
            selectedAnswer !== null
              ? option.correct
                ? "correct"
                : selectedAnswer === index
                ? "wrong"
                : ""
              : ""
          }`}
          key={index}
          onClick={() => handleAnswerClick(option.correct, index)}
          disabled={selectedAnswer !== null}
        >
          {option.text}
        </button>
      ))}
      {selectedAnswer !== null && (
        <button className="next-btn" onClick={setNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
};
export default QuizPage;
