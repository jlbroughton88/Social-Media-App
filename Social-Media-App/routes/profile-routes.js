const router = require("express").Router();

// Authcheck
const authCheck = (req, res, next) => {
    if (!req.user) {
        res.redirect("/auth/login");
    } else {
        next();
    }
}


// profile route
router.get("/", authCheck, (req, res, next) => {
    console.log("profile fetched for " + req.user.userName);
    next();
})

module.exports = router;