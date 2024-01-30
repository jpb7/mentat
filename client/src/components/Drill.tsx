import React, { useState, useEffect } from 'react';
import styles from './Drill.module.css';

type DrillProps = {
	drillId: string;
}

const Drill: React.FC<DrillProps> = ({ drillId }) => {
	/*
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`/api/drill/${drillId}`);
			const result = await response.json();
			setData(result);
		};

		fetchData();
	}, [drillId]);

	if (!data) {
		return <div>Loading...</div>;
	}
	*/

	return (
		<div>
			<h1 className={styles.construction}>{drillId}: under construction</h1>
		</div>
	);
};

export default Drill;

