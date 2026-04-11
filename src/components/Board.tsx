import React from 'react';
import Square from './Square';

type Player = 'X' | 'O';
type SquareValue = Player | null;

interface BoardProps {
  squares: SquareValue[];
  onSquareClick: (index: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onSquareClick }) => {
  return (
    <div className="board">
      {squares.map((square, index) => (
        <Square
          key={index}
          value={square}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;