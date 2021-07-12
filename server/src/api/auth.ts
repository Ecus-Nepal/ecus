import express from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import User from "../models/user";
import { createRefToken, createToken } from "../utils/jwt_generator";
import { validateUser } from "../utils/verifyUser";


const route = express()

route.get('/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

route.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/auth/google/failure',
        session: false,
    }), async (req, res) => {
        if (req.user) {
            const profile = req.user as IUser
            const currentUser = await User.findOne({ email: profile.email })
            res.cookie("ref", createRefToken({ userID: currentUser?.id }), {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            })
            if (currentUser?.newAccount) {
                return res.redirect(`${process.env.CLIENT_END_POINT}/account/setup`)
            }
            return res.redirect(`${process.env.CLIENT_END_POINT}/dash`)
        }

    });

route.get("/google/failure", (_, res) => {
    return res.send("Failed")
})


route.get('/getToken', async (req, res) => {
    const token = req.cookies.ref

    // If cookie tooken does not exists
    if (!token) {
        return res.json({ ok: false, message: "No Token Found" })
    }

    try {
        const payload = jwt.verify(token, process.env.REF_JWT_TOKEN) as IRefToken //? Ref Token
        if (payload) {
            const user = await User.findById(payload.userID)
            // If user exists
            if (user) {
                return res.json({
                    ok: true,
                    token: createToken(user)
                })
            } else {
                return res.json({ ok: false, message: "User Not Found" })
            }
            // If Ref Token is invalid
        } else {
            return res.json({ ok: false, message: "Error validating token" })
        }
    } catch (e) {
        return res.json({ ok: false, message: "Unknown error !!" })
    }
})

route.get("/logout", validateUser, async (_, res) => {
    try {
        res.clearCookie("ref")
        res.json({
            ok: true,
            message: "Loged out"
        })
    } catch {
        res.json({
            ok: false.valueOf,
            message: "Error logging out"
        })
    }
})


export default route