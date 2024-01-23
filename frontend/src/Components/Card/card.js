import React from 'react';
import './card.scss';

const Card = ({ question, subQuestion, children }) => {
  return (
    <div className='card'>
      <div className='question'>{question}</div>
      <div className='sub-question'>{subQuestion}</div>
      {children}
    </div>
  );
};

export default Card;