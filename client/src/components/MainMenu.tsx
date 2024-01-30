import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './MainMenu.module.css';

const MainMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
			<Link to='/exercise1'><MenuItem label="exercise 1" /></Link>
			<Link to='/exercise2'><MenuItem label="exercise 2" /></Link>
			<Link to='/exercise3'><MenuItem label="exercise 3" /></Link>
		</div>
  );
};

export default MainMenu;

