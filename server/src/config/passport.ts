import passport from "passport";
import { Strategy } from "passport-google-oauth2";
import User from "../models/user";
// import { User } from "../entities/Users";
// import { getConnection } from "typeorm";

//? Google Auth
passport.use(new Strategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, //IVvMi7-ERFHKj6NayInh5QBn
    callbackURL: `${process.env.SERVER_END_POINT}/auth/google/callback`,
    passReqToCallback: true,
},
    async (_: any, __: any, ___: any, profile: any, done: any) => {
        const { displayName, given_name, email, picture } = profile
        try {
            const user = new User({
                name: displayName,
                firstName: given_name,
                email,
                profilePic: picture,
                accountType: "",
                about: "",
                applied: [],
                wantedJobs: []

            })
            await user.save()
            done(null, profile)
        } catch (e) {
            // If the account exists
            if (e.code === 11000) {
                return done(null, profile)
            }

            console.log(e)
        }

    }
));
