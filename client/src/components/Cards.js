import React, { useEffect, useContext, useState } from "react";
import "../App.css";
import Card from "./Card";
import UserForm from "./UserForm";
import fetchImages from "../lib/fetchImages";
import countOfImage from "../lib/countOfImage";
import shuffleCards from "../lib/shuffleCards";
import setScoreAndTurn from "../lib/setScoreAndTurn";
import handleGameOver from "../lib/handleGameOver";
import setPlayerTurn from "../lib/setPlayerTurn";
import gridTemplate from "../lib/gridTemplate";
import reset from "../lib/reset";
import GameOver from "./GameOver";
import CardContext from "../context/CardContext";
import CardCount from "./CardCount";

const Cards = () => {
  const {
    playersData,
    setPlayersData,
    cards,
    setCards,
    choiceOne,
    setChoiceOne,
    choiceTwo,
    setChoiceTwo,
    setDisabled,
    startGame,
    setStartGame,
  } = useContext(CardContext);
  const { playerOne, playerTwo } = playersData;
  const [images, setImages] = useState([]);
  const [count, setCount] = useState(6);
  const arrangedImages = countOfImage(images, count);

  const getCards = () => {
    const cards = shuffleCards(arrangedImages);
    setCards(cards);
    setChoiceOne(null);
    setChoiceTwo(null);
    setPlayersData({
      playerOne: { name: "", score: 0, turn: true },
      playerTwo: { name: "", score: 0, turn: false },
    });
    setStartGame(false);
  };

  useEffect(() => {
    fetchImages(setImages);
  }, []);

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((cards) => {
          return cards.map((card) =>
            card.src === choiceOne.src ? { ...card, matched: true } : card
          );
        });
        reset(setChoiceOne, setChoiceTwo, setDisabled);
        setScoreAndTurn(playerOne, playerTwo, setPlayersData);
      } else {
        setTimeout(() => {
          setPlayerTurn(playerOne, playerTwo, setPlayersData);
          reset(setChoiceOne, setChoiceTwo, setDisabled);
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choiceOne, choiceTwo, playerOne, playerTwo]);

  const cardCountChange = (e) => {
    setCount(e.target.value / 2);
  };

  return (
    <>
      <div className="header">
        <h1>Memory-Spiel</h1>
        <button onClick={getCards}>New Game</button>
      </div>
      <UserForm getCards={getCards} />
      {handleGameOver(playersData, count) && <GameOver />}
      {startGame ? (
        <div className="cards" style={gridTemplate(count)}>
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      ) : (
        <div>
          <CardCount cardCountChange={cardCountChange} />
          <p>* Enter name to start the game</p>
        </div>
      )}
    </>
  );
};

export default Cards;
