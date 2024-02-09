import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './MainMenu.module.css';

type MainMenuProps = {
  exercises: { path: string; drillId: string }[];
};

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

