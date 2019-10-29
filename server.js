const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path")
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
},() => {
    console.log("Mongodb Connected!")
})

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/build/index.html"))
    })
  } else {
    app.use(express.static(path.join(__dirname, "/client/public")));
    app.get("/*", (req, res) => {
      res.sendFile(path.join(__dirname, "./client/public/index.html"))
    })
  }

app.get("/", (req, res) => {
    res.send("Hello")
});

app.listen(process.env.PORT || 5000 , () => {
    console.log("Server listening at port 3000");
});