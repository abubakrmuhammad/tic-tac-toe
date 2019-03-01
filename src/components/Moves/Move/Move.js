import React from 'react';
import './Move.css';

const Move = props => {
  return (
    <li className='Move'>
      <button onClick={() => props.clicked()} className={props.currentClass}>{props.description}</button>
    </li>
  );
};

export default Move;
