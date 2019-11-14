const router = require("express").Router();
const passport = require("passport");
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const express = require("express")
const server = express()
require("dotenv").config();
console.log("this is auth routes")

// router.get("/login", (req, res) => {
//     return app.render(req, res, "/login", req.query)
// });

// router.get("/logout", (req, res) => {
//     req.logout();
//     console.log("Logged out")
//     res.redirect("/")
// });
server.get("/yeet", (req, res) => {
    res.send(process.env.CLIENT_ID)
})

server.get("/facebook", passport.authenticate("facebook"), () => {
    console.log("facebook route")
}
// , (req, res) => { res.send(200) }
)

server.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/login",
    successRedirect: "/profile"
}));

module.exports = server;