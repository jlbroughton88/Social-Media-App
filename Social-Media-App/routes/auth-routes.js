const router = require("express").Router();
const passport = require("passport");
const next = require("next");
const app = next({ dev: process.env.NODE_ENV !== 'production' })

router.get("/login", (req, res) => {
    return app.render(req, res, "/login", req.query)
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
}));

module.exports = router;