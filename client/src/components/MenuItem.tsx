import React from 'react';
import styles from './MenuItem.module.css';

type MenuItemProps = {
	//drillId: string;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => { // {drillId, label}
	return (
		<button className={styles.menuItem}>
			{label}
		</button>
	);
};

export default MenuItem;

