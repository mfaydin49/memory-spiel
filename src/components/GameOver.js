import React, { useContext, useState } from "react";
import CardContext from "../context/CardContext";

const GameOver = () => {
  const { playersData } = useContext(CardContext);
  const { playerOne, playerTwo } = playersData;

  console.log(playerOne.name);
  return (
    <div className="gameOver">
      {playerOne.score === playerTwo.score ? (
        <di>
          Draw ! <br />
          <img src="/img/draw.png" alt={"draw"} />
        </di>
      ) : playerOne.score > playerTwo.score ? (
        <di>
          {playerOne.name} Win!
          <br />
          <img src="/img/cup.png" alt={"cup"} />
        </di>
      ) : (
        <di>
          {playerTwo.name} Win! <br />
          <img src="/img/cup.png" alt={"cup"} />
        </di>
      )}
    </div>
  );
};

export const handleGameOver = ({ playersData }) => {
  return playersData.playerOne.score + playersData.playerTwo.score === 6
    ? true
    : false;
};

export default GameOver;
