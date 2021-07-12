import mongoose, { Schema } from "mongoose"
import { IUserDB } from "src/@types/userDB"

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profilePic: {
        type: String,
        required: true
    },
    wantedCatogries: Array,
    accountType: {
        type: String
    },
    about: {
        type: String,
    },
    appliedJobs: Array,
    newAccount: {
        type: Boolean,
        default: true,
        required: true
    }
},
    {
        timestamps: true
    }
)

export default mongoose.model<IUserDB>("User", UserSchema)