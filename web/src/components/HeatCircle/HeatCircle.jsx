import React  from 'react';
import './HeatCircle.scss';
const HeatCircle = ({ width = 100, height = 100, backgroundColor = 'blue' }) => {
  return (
    <div className="heat-circle" style={{
      width,
      height,
      backgroundColor,
    }}>
      Circle
    </div>
  );
};

export default HeatCircle;
