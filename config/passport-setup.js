const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy
require("dotenv").config();
const clientID = process.env.clientID;
const clientSecret = process.env.clientSecret;

passport.use(new FacebookStrategy({
    clientID,
    clientSecret,
    callbackURL: "http://localhost:5000/auth/facebook/callback"
}, (accessToken, refreshToken, profile, cb) => {
    
}))