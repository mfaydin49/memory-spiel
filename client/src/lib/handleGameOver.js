const handleGameOver = (playersData, count = 6) => {
  return playersData.playerOne.score + playersData.playerTwo.score === count
    ? true
    : false;
};

export default handleGameOver;
