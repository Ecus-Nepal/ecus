import mongoose, { Schema } from "mongoose"
import { IJobsDB } from "src/@types/userDB"

const JobsSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    creatorId: {
        type: String,
        required: true
    },
    creatorName: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    expDate: {
        type: String,
        required: true
    },
    jobsCategories: {
        type: Array,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    employeeApplied: Array,
    aprovedEmployee: Number,
    pendingEmployee: Number,
    rejectedEmployee: Number
},
    {
        timestamps: true
    }
)

export default mongoose.model<IJobsDB>("Jobs", JobsSchema)