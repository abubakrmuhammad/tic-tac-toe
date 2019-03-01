import React from 'react';
import './Status.css';

const Status = props => {
  const winner = props.calculateWinner(props.squares);

  let status, statusPlayer, winnerClass;

  if (winner) {
    status = 'Winner is: ';
    statusPlayer = winner;
    winnerClass = 'Winner';
  } else {
    winnerClass = '';
    status = 'Player Turn: ';
    if (props.xIsNext === true) {
      statusPlayer = 'x';
    } else {
      statusPlayer = 'o';
    }
  }

  return (
    <div className='StatusBox'>
      <div className={`Status ${winnerClass}`}>
        {status} <span className={statusPlayer}>{statusPlayer}</span>
      </div>
    </div>
  );
};

export default Status;
