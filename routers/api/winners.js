const express = require("express");
const router = express();
const { check, validationResult } = require("express-validator");

const Winner = require("../../models/winners");

router.get("/", async (req, res) => {
  try {
    const winners = await Winner.find().sort({ date: 1 });
    res.json(winners);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  try {
    const newWinner = new Winner({
      name: req.body.name,
      score: req.body.score,
    });
    const winner = await newWinner.save();
    res.json(winner);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
