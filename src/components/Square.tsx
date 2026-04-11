import React from 'react';

type Player = 'X' | 'O';
type SquareValue = Player | null;

interface SquareProps {
  value: SquareValue;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button 
      className={`square ${value ? value.toLowerCase() : ''}`}
      onClick={onClick}
      disabled={value !== null}
    >
      {value}
    </button>
  );
};

export default Square;