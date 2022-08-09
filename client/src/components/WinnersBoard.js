import React, { useEffect, useState } from "react";
import { getWinnerData } from "../api/services";
import handleScoreDate from "../lib/handleScoreDate";
import { Link, useLocation } from "react-router-dom";

const WinnersBoard = () => {
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    const renderPosts = async () => {
      try {
        let res = await getWinnerData();
        setWinners(...winners, res);
      } catch (err) {
        console.log(err);
      }
    };
    renderPosts();
  }, []);

  return (
    <div>
      <div>
        <h3 id="winner-title">Winners Board</h3>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
      <table id="winner-board">
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {winners.map((winner) => (
            <tr key={winner._id}>
              <td>{winner.name}</td>
              <td>{winner.score}</td>
              <td>{handleScoreDate(winner.date)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WinnersBoard;
