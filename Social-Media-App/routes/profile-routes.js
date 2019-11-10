// const router = require("express").Router();
const express = require("express")
const router = express.Router();
const server = express()
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== 'production' })

// Check status
const loggedIn = (req, res, next) => {
    if (!req.user) {
        console.log("Not a registered user.")
        res.redirect("/auth/login");
    } else {
        console.log("Logged in already!")
        next();
    }
}

// profile route
// app.prepare().then(() => {
router.get("/", loggedIn, (req, res) => {
    return app.render(req, res, "/profile", req.query)

})
// })


module.exports = server;