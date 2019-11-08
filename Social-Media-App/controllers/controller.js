const User = require("../models/User");
const mongoose = require("mongoose");
const db = mongoose.connection;


exports.personal_entry_info = (req, res) => {
    if (req.user) {
        let currentUserId = req.user.userId
        db.model("User").findOne({ userId: currentUserId }, (err, result) => {
            res.send(result)
        })
    } else {
        console.log("No user info found")
    }
}

exports.get_personal_entry_info = (req, res) => {
    res.send(req.user)
}