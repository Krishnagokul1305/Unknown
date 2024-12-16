const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const router = require("./c.route");

const app = express();

dotenv.config({
  path: "./config/config.env",
});

app.use(express.json());
app.use(morgan("dev"));

app.use("/", router);

module.exports = app;
