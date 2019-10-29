const router = require("express").Router();

// Authcheck
const authCheck = (err, user) => {
    if(!user) {
        res.redirect("/auth/login")
    }
    next();
}

// profile route
router.get("/profile/", authCheck, (req, res) => {

})