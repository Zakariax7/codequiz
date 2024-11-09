import React from 'react';
import Navbar from './Navbar';
const HomePage = ({ setPage, setSelectedModule }) => {
  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setPage('quiz');
  };
  return (
    <div className="dd">
      <Navbar/>
      <h1 className="h1">OFPPT.Quiz</h1>
      <p className="p">Veuillez choisir une matiére :</p>
      <button className="r" onClick={() => handleModuleClick('react')}>
        <img src={`${process.env.PUBLIC_URL}/images/react.png`} alt="React" style={{ width: '150px', height: '150px',backgroundColor:"rgba(255, 255, 255, 0.871)" }} />
        React
      </button>
      <button className="r" onClick={() => handleModuleClick('mysql')}>
        <img src={`${process.env.PUBLIC_URL}/images/mysql.png`} alt="MySQL" style={{ width: '180px', height: '150px',backgroundColor:"rgba(255, 255, 255, 0.871)" }} />
        MySQL
      </button>
      <button className="r" onClick={() => handleModuleClick('agile')}>
        <img src={`${process.env.PUBLIC_URL}/images/agile.png`} alt="Agile" style={{ width: '150px', height: '150px',backgroundColor:"rgba(255, 255, 255, 0.871)" }} />
        Agile
      </button>
      <button className="r" onClick={() => handleModuleClick('laravel')}>
        <img src={`${process.env.PUBLIC_URL}/images/laravel.png`} alt="Laravel" style={{ width: '180px', height: '140px',backgroundColor:"rgba(255, 255, 255, 0.871)" }} />
        Laravel
      </button>
    </div>
  );
};
export default HomePage;