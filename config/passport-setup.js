const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy
require("dotenv").config();
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const url = "https://social-media-app.jlbroughton88.now.sh/auth/facebook"
const User = require("../models/User");

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user)
    })
})

passport.use(new FacebookStrategy({
    clientID,
    clientSecret,
    // callbackURL: "https://social-media-app.jlbroughton88.now.sh/auth/facebook/callback"
    callbackURL: "https://social-media-app.jlbroughton88.now.sh/auth/facebook/callback"
}, (accessToken, refreshToken, profile, cb) => {
    User.findOne({ userId: profile.id }, (err, currentUser) => {
        if (currentUser) {
            cb(null, currentUser);
        } else {
            new User({
                userId: profile.id,
                userName: profile.displayName
            }).save().then((newUser) => {
                cb(null, newUser)
            })
        }
    })

}))

