import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Drill, MainMenu, TitleBar } from 'Components';
import styles from './App.module.css';

const App: React.FC = () => {
  const [drillIds, setDrillIds] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then(response => response.json())
      .then(fetchedDrillIds => setDrillIds(fetchedDrillIds))
      .catch(error => console.error('Failed to fetch drill IDs:', error));
  }, []);

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

