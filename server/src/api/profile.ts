import express from "express";
import User from "../models/user";
import { validateUser } from "../utils/verifyUser";

const route = express()

interface userData {
    type: "employee" | "employer",
    about: string,
    wantedCategories: string[]
}

route.post('/update', validateUser, async (req, res) => {
    const data: userData = req.body;

    // console.log(req.user)

    try {
        // console.log(
        //     await User.findById(req.user._id)

        // )

        const x = await User.find({});
        console.log(
            x[0]._id,
            req.user._id
        )
        // console.log(req.user)
        const respond = await User.updateOne({
            _id: req.user._id
        },
            {
                $set:
                {
                    newAccount: false,
                    accountType: data.type,
                    wantedCatogries: data.wantedCategories,
                    about: data.about
                }
            }
        )
        console.log(respond)
        res.json({ ok: true, message: "done" })
    } catch (e) {
        console.log(e)
        res.json({ ok: false, message: "Error!" })
    }
})

route.get("/userAdditionInfo", validateUser, async (req, res) => {
    const user = await User.findById(req.user._id)
    console.log(user)
    if (user) {
        res.json({
            ok: true,
            about: user?.about,
            wantedCatogries: user?.wantedCatogries
        })
    } else {
        res.json({
            ok: false,
            message: "Error"
        })
    }
})

export default route
