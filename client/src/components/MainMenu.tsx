import React from 'react';
import styles from './MainMenu.module.css';

const MainMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      <button className={styles.menuItem}>exercise 1</button>
      <button className={styles.menuItem}>exercise 2</button>
      <button className={styles.menuItem}>exercise 3</button>
    </div>
  );
};

export default MainMenu;

