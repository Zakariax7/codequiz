import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultPage = ({ score, setPage }) => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
     
      <div
        className={`text-center p-5 rounded-4 shadow ${
          score >= 10 ? 'bg-success' : 'bg-danger'
        } text-white`}
      >
        <h1 className="fw-bold">
          {score >= 10 ? 'Congratulation!' : 'Try Again'}
        </h1>
        <p className="fs-4">Your score is: {score}/20</p>
        <button
          className="btn btn-light mt-3 fw-bold px-4 py-2"
          onClick={() => setPage('home')}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default ResultPage;