import React from 'react';
import DrillBox from './DrillBox';
import DrillButton from './DrillButton';

type DrillProps = {
  drillId: string;
};

const Drill: React.FC<DrillProps> = ({ drillId }) => {
  return (
    <>
      <DrillBox drillId={drillId} />
      <DrillButton />
    </>
  );
};

export default Drill;

