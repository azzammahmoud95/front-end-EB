// TriangleStack.jsx
import React from 'react';
import './TriangleStack.scss';
import Triangle from '../../Assets/Images/triangle.svg';

const TriangleStack = () => {
  return (
    <div className="triangle-container">
      <div className="Triangle-1">
        <img src={Triangle} alt={`Triangle-1`} />
      </div>
      <div className="Triangle-2">
        <img src={Triangle} alt={`Triangle-2`} />
      </div>
      <div className="Triangle-3">
        <img src={Triangle} alt={`Triangle-3`} />
      </div>
      <div className="Triangle-4">
        <img src={Triangle} alt={`Triangle-4`} />
      </div>
    </div>
  );
};

export default TriangleStack;
