import React from 'react';
import Row from './Row/Row';
import Square from './Square/Square';
import './Board.css';

const Board = props => {
  const rowsArray = [0, 1, 2];
  let counter = 1;

  return (
    <div className='Board'>
      {rowsArray.map(row => (
        <Row key={row}>
          {props.cells.slice(row * 3, counter++ * 3).map(cellID => (
            <Square key={cellID} value={props.squares[cellID]} clicked={() => props.squareClicked(cellID)} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Board;
