const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("hello");
});

mongoose
  .connect(process.env.mongoDB_KEY)
  .then(() => console.log("Connection successful!"))
  .catch((e) => console.log(e.message));

app.listen("3000", () => {
  console.log("Hello");
});
