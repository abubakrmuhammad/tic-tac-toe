import React from 'react';
import './Square.css';

const Square = props => {
  return (
    <button className={`Square ${props.value}`} onClick={() => props.clicked()}>
      {props.value}
    </button>
  );
};

export default Square;
