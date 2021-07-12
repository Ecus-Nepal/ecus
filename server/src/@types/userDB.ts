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


export interface IJobsDB extends Document {
    title: string,
    description: string,
    expDate: string,
    jobsCategories: string[],
    salary: number,
    employeeApplied: string[],
    aprovedEmployee: number,
    pendingEmployee: number,
    rejectedEmployee: number,
    creatorId: string,
    creatorName: string,
}