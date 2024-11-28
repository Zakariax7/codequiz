import React from 'react';
import Navbar from './Navbar';

const HomePage = ({ setPage, setSelectedModule }) => {
  const handleModuleClick = (module) => {
    setSelectedModule(module);
    setPage('quiz');
  };
  return (
    <>
    <Navbar />
    <div className="container mt-5">
      
      <h1 className="text-center mb-4">DEV.Quiz</h1>
      <h3 className="text-center mb-4">Veuillez choisir une matière :</h3>
      <div className="row g-4">
        {[
          { name: 'React', image: 'react.png', module: 'react' },
          { name: 'MySQL', image: 'mysql.png', module: 'mysql' },
          { name: 'Agile', image: 'agile.png', module: 'agile' },
          { name: 'Laravel', image: 'laravel.png', module: 'laravel' },
          { name: 'nosql', image: 'nosql.png', module: 'nosql' },
          { name: 'cloudnative', image: 'cloud.png', module: 'cloudnative' },
          { name: 'htmlcss', image: 'html.png', module: 'htmlcss' },
          { name: 'python', image: 'python.png', module: 'python' },
          { name: 'poo', image: 'poo.png', module: 'poo' },
          { name: 'umlDiagrams', image: 'uml.png', module: 'umlDiagrams' },
          { name: 'javascript', image: 'js.png', module: 'javascript' },
          { name: 'php', image: 'php.png', module: 'php' },
          { name: 'algorithms', image: 'algorithme.png', module: 'algorithms' },

        ].map(({ name, image, module }) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-7 " key={module}>
            <div className="card text-center shadow-sm">
              <img
                src={`${process.env.PUBLIC_URL}/images/${image}`}
                className="card-img-top"
                alt={name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'contain',
                  backgroundColor: 'rgba(255, 255, 255, 0.871)',
                }}
              />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <button
                  className="btn btn-primary"
                  onClick={() => handleModuleClick(module)}
                >
                  Start
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
export default HomePage;
