import React from 'react';
import styles from './DrillButton.module.css';

type DrillButtonProps = {
  onClick: () => void;
  showSolution: boolean;
};

const DrillButton: React.FC<DrillButtonProps> = ({ onClick, showSolution }) => {
  let buttonText = (showSolution) ? 'next problem' : 'show solution';
  return(
    <button className={styles.drillButton} onClick={onClick}>
      { buttonText }
    </button>
  );
}

export default DrillButton;

