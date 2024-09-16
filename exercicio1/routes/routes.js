const express = require("express");
const router = express.Router();
const controller = require("../controllers/calculadora");

router.post("/calculadora", controller);

module.exports = router;