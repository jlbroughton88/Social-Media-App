const User = require("../models/User");
const mongoose = require("mongoose");
const db = mongoose.connection;


exports.personal = (req, res) => {
    console.log(req.user)
    let currentUserId = req.user.userId
    db.model("User").findOne({ userId: currentUserId }, (err, result) => {
        res.send(result)
    })
}