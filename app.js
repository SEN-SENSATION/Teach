const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

let config;

fs.readFile("./config.json", (err, data) => {
  config = JSON.parse(data);
});

app.use(express.static(path.join(__dirname, "public")));

app.use("/", (req, res, next) => {
  return res.render("main", {
    date: config.DATE,
  });
});

app.listen(8000);
