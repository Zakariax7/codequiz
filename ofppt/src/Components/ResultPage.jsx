import React from 'react';
const ResultPage = ({ score, setPage }) => {
  return (
    <div className="Resdiv">
      {score >= 10 ? ( 
        <div className="Scorefel">
          <h1> Congratulation!</h1>
          <p>Votre score est : {score}/20</p>
        </div>
      ) : (
        <div className="Scoretry">
          <h1>Try Again</h1>
          <p>Votre score est : {score}/20</p>
        </div>
      )}
      <button className="buttonRec" onClick={() => setPage('home')}>Restart</button>
    </div>
  );
};
export default ResultPage;