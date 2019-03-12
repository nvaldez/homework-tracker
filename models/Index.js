const mongoose = require("../db/connection");

const Homeworks = new mongoose.Schema({
  name: String,
  week: String,
  completed: String
});

const Homework = mongoose.model("Homework", Homeworks);

module.exports = Homework;
