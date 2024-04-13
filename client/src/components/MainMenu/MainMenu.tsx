import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from './MenuItem';
import { MainMenuProps } from 'Types';
import styles from './MainMenu.module.css';

const MainMenu: React.FC<MainMenuProps> = ({ drillIds }) => {
  return (
    <div className={styles.menu}>
      {drillIds.map(drillId => (
        <Link key={drillId} to={`/${drillId}`}>
          <MenuItem label={drillId} />
        </Link>
      ))}
    </div>
  );
};

export default MainMenu;

