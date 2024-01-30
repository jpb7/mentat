import React from 'react';
import styles from './TitleBar.module.css';

type TitleBarProps = {
	title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
	return (
		<h1 className={styles.title}>{title}</h1>
	);
};

export default TitleBar;

