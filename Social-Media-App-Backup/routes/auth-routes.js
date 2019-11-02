const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
    res.send("Login")
});

router.get("/logout", (req, res) => {
    res.logout();
});

router.get("/facebook", passport.authenticate("facebook"));

router.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/auth/login"
}), (req, res) => {
    // Successful authentication, redirect home
    res.redirect("/profile/")
})

module.exports = router;