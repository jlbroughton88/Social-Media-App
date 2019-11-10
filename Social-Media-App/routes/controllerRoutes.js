const express = require("express");
const router = express.Router();
const server = express();
const user_controller = require("../controllers/controller");

server.get("/user/makepersonal", user_controller.personal_entry_info)
server.get("/user/personal", user_controller.get_personal_entry_info)

module.exports = server;