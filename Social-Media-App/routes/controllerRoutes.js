const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/controller");

router.get("/user/personal", user_controller.personal)

module.exports = router;