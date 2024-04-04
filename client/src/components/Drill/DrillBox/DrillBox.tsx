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
  showSolution: boolean;
};

const DrillBox: React.FC<DrillBoxProps> = ({ drill, showSolution }) => {
  if (!drill) {
    return <div className={styles.drillBox}></div>;
  }

  const { number1, number2, operator, solution } = drill;

  return (
    <div className={styles.drillBox}>
      {
        (showSolution)
          ? <p>{solution}</p>
          : <p>{number1} {operator} {number2}</p>
      }
    </div>
  );
};

export default DrillBox;

