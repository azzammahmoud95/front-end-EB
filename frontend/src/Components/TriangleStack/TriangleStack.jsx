// TriangleStack.jsx
import React from 'react';
import './TriangleStack.scss';
import Triangle from '../../Assets/Images/triangle.svg';

const TriangleStack = () => {
  return (
    <div className="triangle-container">
      {[1, 2, 3, 4].map((index) => (
        <div key={index} className={`triangle triangle-${index}`}>
          <img src={Triangle} alt={`Triangle ${index}`} />
        </div>
      ))}
    </div>
  );
};

export default TriangleStack;
