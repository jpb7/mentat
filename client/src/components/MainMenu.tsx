import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import styles from './MainMenu.module.css';

const n = 3;
const exercises = Array.from({ length: n }, (_, i) => ({
  path: `/exercise${i + 1}`,
  label: `exercise${i + 1}`
}));

const MainMenu: React.FC = () => {
  return (
    <div className={styles.menu}>
      {exercises.map(exercise => (
        <Link key={exercise.path} to={exercise.path}>
          <MenuItem label={exercise.label} />
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;

