import React, { useEffect, useContext, useState } from "react";
import "../App.css";
import Card from "./Card";
import UserForm from "./UserForm";
import axios from "axios";
import GameOver from "./GameOver";
import CardContext from "../context/CardContext";
import { handleGameOver } from "./GameOver";

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
  const arrangedImages = [];

  const apiImages = () =>
    images.slice(0, 6).forEach((image) => {
      const {
        alt_description: alt,
        urls: { small: src },
      } = image;
      arrangedImages.push({ src, alt, matched: false });
    });

  const shuffleCards = () => {
    apiImages();
    const shuffledImages = [...arrangedImages, ...arrangedImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setPlayersData({
      playerOne: { name: "", score: 0, turn: true },
      playerTwo: { name: "", score: 0, turn: false },
    });
    setStartGame(false);
    setCards(shuffledImages);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios
          .get(
            `https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_CLIENT_ID}`
          )
          .then((res) => res);
        setImages(res.data);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchImages();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        reset();
        playerOne.turn
          ? setPlayersData({
              playerOne: {
                ...playerOne,
                score: playerOne.score + 1,
                turn: true,
              },
              playerTwo: { ...playerTwo, turn: false },
            })
          : setPlayersData({
              playerOne: { ...playerOne, turn: false },
              playerTwo: {
                ...playerTwo,
                score: playerTwo.score + 1,
                turn: true,
              },
            });
      } else {
        setTimeout(() => {
          playerOne.turn
            ? setPlayersData({
                playerOne: { ...playerOne, turn: false },
                playerTwo: { ...playerTwo, turn: true },
              })
            : setPlayersData({
                playerOne: { ...playerOne, turn: true },
                playerTwo: {
                  ...playerTwo,
                  score: playerTwo.score,
                  turn: false,
                },
              });
          reset();
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choiceOne, choiceTwo, playerOne, playerTwo]);

  const reset = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  return (
    <>
      <div className="header">
        <h1>Memory-Spiel</h1>
        <button onClick={shuffleCards}>New Game</button>
      </div>
      <UserForm shuffleCards={shuffleCards} />
      {handleGameOver({ playersData }) && <GameOver />}
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
