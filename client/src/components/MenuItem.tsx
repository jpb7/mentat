import React from 'react';
//import { useNavigate } from 'react-router-dom';
import styles from './MenuItem.module.css';

type MenuItemProps = {
	//drillId: string;
	label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ label }) => { // {drillId, label}
	//let navigate = useNavigate();

	const navigateToDrill = () => {
		console.log('Not yet ready for prime time!');
		//navigate(`/drill/${drillId}`);
	};

	return (
		<button className={styles.menuItem} onClick={navigateToDrill}>
			{label}
		</button>
	);
};

export default MenuItem;

