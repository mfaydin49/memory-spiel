import React from "react";

const GameOver = () => {
  return <div className="gameOver">Game Over</div>;
};

export const handleGameOver = ({ playersData }) => {
  return playersData.playerOne.score + playersData.playerTwo.score === 6
    ? true
    : false;
};

export default GameOver;
