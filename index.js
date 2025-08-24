const express = require("express");
const data = require("./data.json");
const todo = require("./Todo.json");
const app = express();
const cors = require("cors");
const { id } = require("zod/v4/locales");
app.use(cors());

const getTemp = () => {
  return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
};

app.get("/notifications", (req, res) => {
  if (!data.datasets[getTemp()]) {
    return res.status(404).json({ error: "not found" });
  }
  res.json(data.datasets[getTemp()]);
});

app.get("/todo", (req, res) => {
  const reqId = parseInt(req.query.id, 10); // convert to number
  const resultTodo = todo.todos.find((x) => x.id === reqId);

  if (!resultTodo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json({ todo: resultTodo });
});
app.listen("3000", () => {
  console.log("app is listening at 3000");
});
