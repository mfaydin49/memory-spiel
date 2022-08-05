import React, { useContext } from "react";
import CardContext from "../context/CardContext";
import { addName } from "../api/services";

const GameOver = () => {
  const { playersData } = useContext(CardContext);
  const { playerOne, playerTwo } = playersData;

  if (playerOne.score > playerTwo.score) {
    addName({ name: playerOne.name, score: playerOne.score });
  }
  if (playerOne.score < playerTwo.score) {
    addName({ name: playerTwo.name, score: playerTwo.score });
  }

  return (
    <div className="gameOver">
      {playerOne.score === playerTwo.score ? (
        <div>
          Draw ! <br />
          <img src="/img/draw.png" alt={"draw"} />
        </div>
      ) : playerOne.score > playerTwo.score ? (
        <div>
          {playerOne.name} Win!
          <br />
          <img src="/img/cup.png" alt={"cup"} />
        </div>
      ) : (
        <div>
          {playerTwo.name} Win! <br />
          <img src="/img/cup.png" alt={"cup"} />
        </div>
      )}
    </div>
  );
};

export default GameOver;
