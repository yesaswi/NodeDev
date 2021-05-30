const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  ingridients: {
    type: String,
    required: true,
    min: 6
  },
  description: {
    type: String,
    required: true,
    min: 6
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Recipe", recipeSchema);
