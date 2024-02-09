import React from 'react';
import styles from './DrillBox.module.css';

type DrillBoxProps = {
  drillId: string;
}

const DrillBox: React.FC<DrillBoxProps> = ({ drillId }) => {
  return (
    <div className={styles.drillBox}>
      <p>{drillId}</p>
    </div>
  );
};

export default DrillBox;

