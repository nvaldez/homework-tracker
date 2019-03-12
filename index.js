const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(parser.json());
app.use(cors());

app.use(require("./routes/index"));

app.listen(3001, () => console.log("This app is running on port 3001"));
