const express = require("express");
const next = require("next");
const server = express();
const passportSetup = require("./config/passport-setup")
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const passport = require("passport");
const session = require("express-session")
// const profileRoutes = require("./routes/profile-routes")
const path = require("path")
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();



// Connect to mongoose
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Mongodb Connected!")
})

// Home route
server.get("/", (req, res) => {
    res.send("Hello")
});


server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
}))
server.use(passport.initialize());
server.use(passport.session());

server.use("/auth/", authRoutes);
// server.use("/profile/", profileRoutes)


// Production deploy stuff
// if(process.env.NODE_ENV === "production") {
//     server.use(express.static("client/build"));
//     server.get("/*", (req, res) => {
//       res.sendFile(path.join(__dirname, "./client/build/index.html"))
//     })
//   } else {
//     server.use(express.static(path.join(__dirname, "/client/public")));
//     server.get("/*", (req, res) => {
//       res.sendFile(path.join(__dirname, "./client/public/index.html"))
//     })
//   }



// Server start
server.listen(process.env.PORT || 5000, () => {
    console.log("Server listening at port 5000");
});