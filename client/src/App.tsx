import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Drill, MainMenu, TitleBar } from 'Components';
import styles from './App.module.css';

const drillIds = Array.from({ length: 3 }, (_, i) => `exercise${i + 1}` );

const App: React.FC = () => {
  return (
    <Router>
      <div className={styles.container}>
        <Link to='/' className={styles.titleLink}>
          <TitleBar title='mentat' />
        </Link>

        <Routes>
          <Route path='/' element={ <MainMenu drillIds={drillIds} /> }/>
          <Route path='/:drillId' element={ <Drill /> }/>
       </Routes>
      </div>
    </Router>
  );
};

export default App;

