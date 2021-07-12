import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import auth from "./api/auth";
import "./config/passport";

const app = express()
const PORT = process.env.port || 5000

// * CORS 
app.use(cors({
    origin: process.env.CLIENT_END_POINT,
    credentials: true
}))
// * FOR Them Cookies
app.use(cookieParser())

// * Parser MiddleWare For parsing request data into json
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// * MongoDB SETUP
if (process.env.DATABASE_URI) {
    mongoose.connect(process.env.DATABASE_URI,
        { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
        (e) => {
            if (e) {
                console.log("Problem connecting with Database", e);
            } else {
                console.log("Connected with MongoDB");
            }
        })
} else {
    console.log("ENV for DATABASE not found :(")
}


// TEST TOUTE
app.get("/", (_, res) => {
    res.json({
        message: "The server is running",
        death: "NO MORE CORES. JUST WHYYYYYYYYYYY"
    })
})


//Passport
app.use(passport.initialize())


// * Route
app.use("/auth", auth)


// * Initilize Server
app.listen(PORT, () => {
    console.log("Server at PORT:", PORT)
})