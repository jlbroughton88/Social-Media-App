const router = require("express").Router();

router.get("/login", () => {
    res.send("Login")
});

router.get("/logout", (req, res) => {
    res.logout();
});

module.exports = router;