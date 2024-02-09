import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Drill, MainMenu, TitleBar } from 'Components';
import styles from './App.module.css';

const n = 3;
const exercises = Array.from({ length: n }, (_, i) => ({
  path: `/exercise${i + 1}`,
  drillId: `exercise${i + 1}`
}));

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Link to='/' className={styles.titleLink}>
          <TitleBar title='mentat' />
        </Link>

        <Routes>
          <Route path='/' element={
            <MainMenu exercises={exercises} />
          }/>
          {exercises.map(exercise => (
            <Route key={exercise.path} path={exercise.path}
              element={
                <Drill drillId={exercise.drillId} />
              }/>
          ))}
         </Routes>

      </div>
    </Router>
  );
};

export default App;

