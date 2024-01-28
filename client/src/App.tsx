import React from 'react';
import MainMenu from './components/MainMenu';
import styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
			<h1 className={styles.title}>mentat</h1>
      <MainMenu />
    </div>
  );
};

export default App;

