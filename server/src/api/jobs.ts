import express from "express"
import Jobs from "../models/jobs"
import { validateUser } from "../utils/verifyUser"


const route = express()

interface jobAdddPayload {
    title: string,
    desc: string,
    salary: number,
    expDate: string,
    categories: string[]
}

route.post("/add", validateUser, async (req, res) => {
    const data: jobAdddPayload = req.body
    try {
        await new Jobs({
            title: data.title,
            creatorId: req.user._id,
            creatorName: req.user.name,
            desc: data.desc,
            expDate: data.expDate,
            jobsCategories: data.categories,
            salary: data.salary,
            aprovedEmployee: 0,
            pendingEmployee: 0,
            rejectedEmployee: 0
        }).save()
        res.send({
            ok: true,
            message: "done"
        })
    } catch (e) {
        console.log(e)
        res.send({
            ok: false,
            message: "Error Saving Job"
        })

    }

})

// If you are reading this I hope you have a great great day :)
// Things will always get better uwu

export default route