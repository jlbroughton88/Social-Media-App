const router = require("next-routes")({
    FBRouter: require("routes/auth-routes"),
    ProfileRouter: require("routes/profile-routes")
}).add("index", "/") // Home
  .add("login")
  .add("profile")



module.exports = router;
