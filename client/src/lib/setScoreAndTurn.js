const setScoreAndTurn = (playerOne, playerTwo, setPlayersData) => {
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
};

export default setScoreAndTurn;
