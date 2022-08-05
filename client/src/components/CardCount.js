import React from "react";

const CardCount = ({ cardCountChange }) => {
  return (
    <form>
      <label htmlFor="cardCount">Choose the number of cards: </label>
      <select name="cardCount" id="cardCount" onChange={cardCountChange}>
        <option value={12}>Number</option>
        <option value={12}>12</option>
        <option value={20}>20</option>
      </select>
    </form>
  );
};

export default CardCount;
