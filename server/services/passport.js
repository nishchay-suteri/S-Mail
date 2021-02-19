const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

const User = mongoose.model("users"); // Alternative way to require model & export it

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: "/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            const ExistingUser = await User.findOne({ googleId: profile.id });
            if (ExistingUser) {
                // User already exist
                done(null, ExistingUser);
            } else {
                const CreatedUser = await new User({
                    googleId: profile.id,
                }).save();
                done(null, CreatedUser);
            }
        }
    )
);
