const express = require("express");
const router = express.Router();
const controller = require("../controller/cltHello");

router.get("/", controller.hello);
router.post("/hello", controller.helloUser);

module.exports = router;
