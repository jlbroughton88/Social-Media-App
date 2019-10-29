const router = require("express").Router();

router.get("/login", () => {
    res.send("Login")
});

router.get("/logout", (req, res) => {
    res.logout();
});

router.get("/auth/facebook", passport.authenticate("facebook"));

router.get("/auth/facebook/callback", passport.authenticate("facebook", {
    failureRedirect: "/auth/login"
}), (req, res) => {
    // Successful authentication, redirect home
    res.redirect("/profile/")
})

module.exports = router;