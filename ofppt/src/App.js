import React, { useState } from 'react';
import HomePage from './Components/HomePage';
import QuizPage from './Components/QuizPage';
import ResultPage from './Components/ResultPage';
import './App.css'
function App() {
  const [page, setPage] = useState('home');
  const [score, setScore] = useState(null);
  const [selectedModule, setSelectedModule] = useState(null);  
  return (
    <div className="App">
      {page === 'home' && <HomePage setPage={setPage} setSelectedModule={setSelectedModule} />}
      {page === 'quiz' && <QuizPage setPage={setPage} setScore={setScore} selectedModule={selectedModule} />}
      {page === 'result' && <ResultPage score={score} setPage={setPage} />}
    </div>
  );
}
export default App;