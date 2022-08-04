import React, { useContext } from "react";
import CardContext from "../context/CardContext";

const GameOver = () => {
  const { playersData } = useContext(CardContext);
  const { playerOne, playerTwo } = playersData;

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
