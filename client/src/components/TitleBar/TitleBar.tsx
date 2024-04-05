import React from 'react';
import { TitleBarProps } from 'Types';
import styles from './TitleBar.module.css';

const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
	return (
		<h1 className={styles.title}>{title}</h1>
	);
};

export default TitleBar;

