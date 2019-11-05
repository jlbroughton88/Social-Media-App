const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
    console.log("Redirecting to login!")
});

router.get("/logout", (req, res) => {
    req.logout();
    console.log("Logged out")
    res.redirect("/")
});

router.get("/facebook", passport.authenticate("facebook"))

router.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/auth/login",
    successRedirect: "/profile"
}))

module.exports = router;