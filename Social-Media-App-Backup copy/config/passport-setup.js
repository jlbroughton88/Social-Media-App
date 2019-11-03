const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy
require("dotenv").config();
const clientID = process.env.clientID;
const clientSecret = process.env.clientSecret;
const User = require("../models/User");

passport.serializeUser((user, done) => {
    console.log("Serializing user...");
    done(null, user);
})

passport.deserializeUser((id, done) => {
    console.log("Deserializing user...");
    done(null, id);
})

passport.use(new FacebookStrategy({
    clientID,
    clientSecret,
    callbackURL: "http://localhost:5000/auth/facebook/callback"
}, (accessToken, refreshToken, profile, cb) => {
    User.findOne({ userId: profile.id }, (currentUser) => {
        if (currentUser) {
            console.log("User already exists!")
            cb(null, currentUser);
        } else {
            new User({
                userId: profile.id,
                userName: profile.displayName
            }).save().then((newUser) => {
                console.log("User has been created!")
                console.log(newUser)
                cb(null, newUser)
            })
        }
    })

}))

