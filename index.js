const express = require("express");
const data = require("./data.json");
const app = express();
const cors = require("cors");
app.use(cors());

const getTemp = () => {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
};

app.get("/notifications", (req, res) => {
  res.json(data.datasets[getTemp()]);
});

app.listen("3000", () => {
  console.log("app is listening at 3000");
});
