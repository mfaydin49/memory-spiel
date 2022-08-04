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
import reset from "../lib/reset";
import GameOver from "./GameOver";
import CardContext from "../context/CardContext";

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

  const arrangedImages = countOfImage(images);

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

  return (
    <>
      <div className="header">
        <h1>Memory-Spiel</h1>
        <button onClick={getCards}>New Game</button>
      </div>
      <UserForm getCards={getCards} />
      {handleGameOver(playersData) && <GameOver />}
      {startGame ? (
        <div className="cards">
          {cards.map((card) => (
            <Card
              key={card.id}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
            />
          ))}
        </div>
      ) : (
        ""
      )}
      <p>* Name eingeben, um das Spiel zu starten</p>
    </>
  );
};

export default Cards;
