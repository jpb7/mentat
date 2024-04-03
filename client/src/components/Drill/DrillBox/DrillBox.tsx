import React from 'react';
import styles from './DrillBox.module.css';

type DrillObject = {
  number1: number;
  number2: number;
  operator: string;
  solution: number;
};

type DrillBoxProps = {
  drill: DrillObject | null;
};

const DrillBox: React.FC<DrillBoxProps> = ({ drill }) => {
  if (!drill) {
    return <div className={styles.drillBox}></div>;
  }

  const { number1, number2, operator } = drill;

  return (
    <div className={styles.drillBox}>
      <p>{number1} {operator} {number2}</p>
    </div>
  );
};

export default DrillBox;

