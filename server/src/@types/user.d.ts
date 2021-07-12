declare interface IUser {
    _id: string,
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

declare namespace Express {
    export interface Request {
        user: IUser
    }
}

