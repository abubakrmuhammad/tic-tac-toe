import React from 'react';
import Status from '../Status/Status';
import Moves from '../Moves/Moves';
import './Info.css';

const Info = props => (
  <div className='GameInfo'>
    <Status squares={props.squares} xIsNext={props.xIsNext} calculateWinner={props.calculateWinner} />
    <Moves history={props.history} stepNumber={props.stepNumber} clicked={props.jumpTo} />
  </div>
);

export default Info;
