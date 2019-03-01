import React, { Component } from 'react';
import Board from '../../components/Board/Board';
import Info from '../../components/Info/Info';
import './Game.css';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null),
        clickIndex: null
      }
    ],
    xIsNext: true,
    stepNumber: 0
  };

  calculateWinner = squares => {
    const lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (const line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  };

  squareClickHandler = id => {
    const history = [...this.state.history].slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];

    if (squares[id] || this.calculateWinner(squares)) {
      return;
    }

    squares[id] = this.state.xIsNext ? 'x' : 'o';

    this.setState({
      history: history.concat([{ squares: squares, clickIndex: id }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  };

  jumpTo = step => {
    this.setState({ stepNumber: step, xIsNext: step % 2 === 0 });
  };

  render() {
    const history = [...this.state.history];
    const current = history[this.state.stepNumber];
    const squares = [...current.squares];

    return (
      <div className='Game'>
        <div className='Title'>
          <h3>Tic Tac Toe</h3>
        </div>
        <div className='GameBoard'>
          <Board squares={squares} squareClicked={this.squareClickHandler} cells={[0, 1, 2, 3, 4, 5, 6, 7, 8]} />
        </div>
        <Info
          squares={squares}
          history={this.state.history}
          stepNumber={this.state.stepNumber}
          xIsNext={this.state.xIsNext}
          calculateWinner={this.calculateWinner}
          jumpTo={this.jumpTo}
        />
      </div>
    );
  }
}

export default Game;
