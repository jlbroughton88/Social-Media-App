const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy

passport.use(new FacebookStrategy({
    clientID: ID,
    clientSecret: clientSecret,
    callbackURL: "asdfasdf"
}, (accessToken, refreshToken, profile, cb) => {

}))

// 8tjDMmM.9Zd9A.a