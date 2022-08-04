const setPlayerTurn = (playerOne, playerTwo, setPlayersData) => {
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
};

export default setPlayerTurn;
