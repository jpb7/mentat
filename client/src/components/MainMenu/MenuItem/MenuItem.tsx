import React from 'react';
import { MenuItemProps } from 'Types';
import styles from './MenuItem.module.css';

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
	return (
		<button className={styles.menuItem}>
			{label}
		</button>
	);
};

export default MenuItem;

