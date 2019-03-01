import React from 'react';
import Move from './Move/Move';
import './Moves.css';

const Moves = props => {
  const moves = props.history.map((step, move) => {
    const cellID = step.clickIndex;

    const col = cellID % 3;
    const row = Math.floor(cellID / 3);

    const clickPosition = `(row: ${row}, col: ${col})`;
    const description = move ? `Go to move #${move} ${clickPosition}` : 'Restart game';

    let current = props.stepNumber === move ? 'Current' : '';
    current = move ? current : 'Restart';

    return (
      <Move
        key={move}
        clicked={() => {
          props.clicked(move);
        }}
        currentClass={current}
        description={description}
      />
    );
  });

  return (
    <div className='Moves'>
      <ul>{moves}</ul>
    </div>
  );
};

export default Moves;
