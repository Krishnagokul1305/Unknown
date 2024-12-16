const express = require("express");
const compile = require("./c.controller");

const router = express.Router();

router.route("/").post(compile);

module.exports = router;