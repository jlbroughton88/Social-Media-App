const router = require("express").Router();
const passport = require("passport");

router.get("/login", (req, res) => {
    console.log("Redirected to login!")
});

// router.get("/logout", (req, res) => {
//     res.logout();
// });

router.get("/facebook", passport.authenticate("facebook"))

router.get("/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/auth/login",
    successRedirect: "/profile"
}))

module.exports = router;