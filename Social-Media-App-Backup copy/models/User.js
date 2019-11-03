const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userId: String,
    userName: String,
})

const User = mongoose.model("user", UserSchema);

module.exports = User;