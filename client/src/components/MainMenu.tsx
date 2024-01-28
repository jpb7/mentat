import React from 'react';
import MenuItem from './MenuItem';
import styles from './MainMenu.module.css';

const MainMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
			<MenuItem label="exercise 1" />
			<MenuItem label="exercise 2" />
			<MenuItem label="exercise 3" />
    </div>
  );
};

export default MainMenu;

