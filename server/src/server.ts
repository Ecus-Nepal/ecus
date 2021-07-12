import cors from "cors";
import express from "express";
import mongoose from "mongoose";


const app = express()
const PORT = process.env.port || 5000

// * CORS 
app.use(cors({
    origin: process.env.CLIENT_END_POINT,
    credentials: true
}))

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


app.get("/", (_, res) => {
    res.send(`Server running at: PORT`)
})

app.listen(PORT, () => {
    console.log("Server at PORT:", PORT)
})