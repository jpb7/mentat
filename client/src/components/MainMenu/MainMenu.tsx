import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { MainMenuProps } from 'Types';
import styles from './MainMenu.module.css';

const MainMenu: React.FC<MainMenuProps> = ({ exercises }) => {
  return (
    <div className={styles.menu}>
      {exercises.map(exercise => (
        <Link key={exercise.path} to={exercise.path}>
          <MenuItem label={exercise.drillId} />
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;

