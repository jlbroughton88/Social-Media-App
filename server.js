const express = require("express");
const app = express();
const passportSetup = require("./config/passport-setup")
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const passport = require("passport");
const session = require("express-session")
// const profileRoutes = require("./routes/profile-routes")
const path = require("path")
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;



// Connect to mongoose
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Mongodb Connected!")
})

// Home route
app.get("/", (req, res) => {
    res.send("Hello")
});






app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
}))
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth/", authRoutes);
// app.use("/profile/", profileRoutes)


// Production deploy stuff
// if(process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//     app.get("/*", (req, res) => {
//       res.sendFile(path.join(__dirname, "./client/build/index.html"))
//     })
//   } else {
//     app.use(express.static(path.join(__dirname, "/client/public")));
//     app.get("/*", (req, res) => {
//       res.sendFile(path.join(__dirname, "./client/public/index.html"))
//     })
//   }



// Server start
app.listen(process.env.PORT || 5000, () => {
    console.log("Server listening at port 5000");
});