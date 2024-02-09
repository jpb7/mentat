import React from 'react';
import styles from './MenuItem.module.css';

type MenuItemProps = {
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => {
	return (
		<button className={styles.menuItem}>
			{label}
		</button>
	);
};

export default MenuItem;

