const express = require("express");
const next = require("next");
const server = express();
const passportSetup = require("./config/passport-setup")
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth-routes");
const passport = require("passport");
const session = require("express-session")
const profileRoutes = require("./routes/profile-routes")
require("dotenv").config();
const instantListen = require("instant-listen");
const MONGODB_URI = process.env.MONGODB_URI;

const handler = instantListen(async () => {
    const app = next({ dev: process.env.NODE_ENV !== 'production' })
    const handle = app.getRequestHandler();
    await app.prepare();
    return handle;
})


// app.prepare().then(() => {

// Connect to mongoose
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, () => {
    console.log("Mongodb Connected!")
});




server.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    // cookie: { secure: true }
}))
server.use(passport.initialize());
server.use(passport.session());


server.use("/auth", authRoutes);
server.use("/profile", profileRoutes)
server.get("*", handler);

server.listen(5000, () => {
    console.log("Server listening at port 5000")
    handler.init()
})

