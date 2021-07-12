import { Document } from "mongoose";

export interface IUserDB extends Document {
    name: string,
    firstName: string,
    email: string,
    profilePic: string,
    wantedCatogries: string[],
    accountType: "employer" | "employee",
    about: string,
    applied: string[],
    newAccount: boolean
}