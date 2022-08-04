import React, { useContext, useState } from "react";
import CardContext from "../context/CardContext";

const UserForm = ({ shuffleCards }) => {
  const { playersData, setPlayersData, startGame, setStartGame } =
    useContext(CardContext);
  const { playerOne, playerTwo } = playersData;
  const [form, setForm] = useState({ playerOneName: "", playerTwoName: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.playerOneName === "" || form.playerTwoName === "") {
      setStartGame(false);
      alert("Name eingeben, um das Spiel zu starten");
      return false;
    }
    setStartGame(true);
    setPlayersData({
      playerOne: { ...playersData.playerOne, name: form.playerOneName },
      playerTwo: {
        ...playersData.playerTwo,
        name: form.playerTwoName,
      },
    });
    setForm({ playerOneName: "", playerTwoName: "" });
  };

  return (
    <form className="playerName" onSubmit={onSubmit}>
      <div>
        <span className={playerOne.turn ? "dot" : "displayNone"}></span>
        <h3>Name: {playerOne.name}</h3>
        <h3>Score: {playerOne.score}</h3>
        <input
          className={startGame ? "unclickable" : ""}
          name="playerOneName"
          value={form.playerOneName}
          placeholder="Player 1"
          onChange={onChangeInput}
        />
      </div>
      <div>
        <button
          onClick={shuffleCards}
          className={startGame ? "unclickable" : ""}
        >
          Start
        </button>
      </div>
      <div>
        <span className={playerTwo.turn ? "dot" : "displayNone"}></span>
        <h3>Name: {playerTwo.name}</h3>
        <h3>Score: {playerTwo.score}</h3>
        <input
          className={startGame ? "unclickable" : ""}
          name="playerTwoName"
          value={form.playerTwoName}
          placeholder="Player 2"
          onChange={onChangeInput}
        />
      </div>
    </form>
  );
};

export default UserForm;
