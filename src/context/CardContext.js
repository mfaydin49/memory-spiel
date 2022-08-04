import { createContext, useState } from "react";
const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [playersData, setPlayersData] = useState({
    playerOne: { name: "", score: 0, turn: true },
    playerTwo: { name: "", score: 0, turn: false },
  });
  const [cards, setCards] = useState([]);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [startGame, setStartGame] = useState(false);

  const values = {
    playersData,
    setPlayersData,
    cards,
    setCards,
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    disabled,
    setDisabled,
    gameOver,
    setGameOver,
    startGame,
    setStartGame,
  };
  return <CardContext.Provider value={values}>{children}</CardContext.Provider>;
};

export default CardContext;
