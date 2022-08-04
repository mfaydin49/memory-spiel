import React, { useContext } from "react";
import "../App.css";
import CardContext from "../context/CardContext";

const Card = ({ card, flipped }) => {
  const { choiceOne, setChoiceOne, setChoiceTwo, disabled } =
    useContext(CardContext);

  const handleClick = () => {
    !disabled && handleChoice(card);
  };

  const handleChoice = (choice) => {
    choiceOne ? setChoiceTwo(choice) : setChoiceOne(choice);
  };

  return (
    <div className="card-container" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="back" src={card.src} alt={card.alt} />
        <img
          className="front"
          src="/img/frage.png"
          alt="frage"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Card;
