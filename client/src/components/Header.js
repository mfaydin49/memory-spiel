import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import CardContext from "../context/CardContext";

const Header = ({ getCards }) => {
  const { startGame } = useContext(CardContext);
  return (
    <div className="header">
      <h1>Memory-Spiel</h1>
      <button className={!startGame ? "unclickable" : ""} onClick={getCards}>
        New Game
      </button>
      <Link to={"/winners"} className={startGame ? "unclickable" : ""}>
        <button>Winners</button>
      </Link>
    </div>
  );
};

export default Header;
