const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "server on" });
});

app.get("/test", (req, res) => {
  const randomNumber = Math.floor(Math.random() * 101);
  res.json({ message: `당신이 생성한 랜덤한 숫자는 ${randomNumber}` });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server compolate Road / port : ${port}`);
});
