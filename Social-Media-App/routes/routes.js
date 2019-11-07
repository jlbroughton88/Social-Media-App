const routes = require("next-routes")

module.exports = routes()
  .add("index", "/") // Home
  .add("login", "/auth/login")
  // .add("profile", "/profile/")

