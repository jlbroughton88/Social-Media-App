const router = require("express").Router();

// Authcheck
const authCheck = (res, req, next) => {
    if (!req.user) {
        res.redirect("/auth/login")
    } else {
        next()
    }
}


// profile route
router.get("/profile/", authCheck(), (req, res) => {
    res.redirect("/profile/")
})