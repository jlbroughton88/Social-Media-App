const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},() => {
    console.log("Mongodb Connected!")
})

app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(process.env.PORT || 3000 , () => {
    console.log("Server listening at port 3000");
});