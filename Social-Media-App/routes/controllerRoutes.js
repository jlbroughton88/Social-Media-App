const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/controller");

router.get("/user/makepersonal", user_controller.personal_entry_info)
router.get("/user/personal", user_controller.get_personal_entry_info)

module.exports = router;