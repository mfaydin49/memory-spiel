const mongoose = require("mongoose");

const WinnerSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  name: { type: String, required: true },
  score: { type: Number, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Winner = mongoose.model("Winner", WinnerSchema);
