const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/homework");
mongoose.Promise = Promise;
module.exports = mongoose;
