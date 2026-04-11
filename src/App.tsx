import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './utils/gameLogic.ts';

type Player = 'X' | 'O';
type SquareValue = Player | null;

function App() {
  const [squares, setSquares] = useState<SquareValue[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(square => square !== null);

  const handleSquareClick = (index: number) => {
    if (squares[index] || winner) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[index] = isXNext ? 'X' : 'O';
    setSquares(newSquares);
    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  const getStatus = () => {
    if (winner) {
      return `Winner: ${winner}`;
    } else if (isDraw) {
      return "It's a draw!";
    } else {
      return `Next player: ${isXNext ? 'X' : 'O'}`;
    }
  };

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      <div className={`game-info ${winner ? 'winner' : isDraw ? 'draw' : ''}`}>
        {getStatus()}
      </div>
      <Board 
        squares={squares} 
        onSquareClick={handleSquareClick} 
      />
      <button className="reset-button" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default App;