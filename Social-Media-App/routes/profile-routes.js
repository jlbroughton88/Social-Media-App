const router = require("express").Router();

// Authcheck
const authCheck = (req, res, next) => {
    if (!req.user) {
        console.log("Not a user")
        res.redirect("/auth/login");
    } else {
        next();
    }
}

// profile route
router.get("/profile", authCheck, (req, res, next) => {
    console.log("profile fetched for " + req.user.userName);
    next();
})

module.exports = router;