const express = require("express");
const router = express.Router();
const server = express();
const user_controller = require("../controllers/controller");

server.get("/user/personal", user_controller.personal_entry_info)

module.exports = server;