declare interface IUser {
    _id: string,
    name: string,
    firstName: string,
    email: string,
    profilePic: string,
    wantedCatogries: TWantedCatogries[],
    accountType: "employer" | "employee" | "",
    about: string,
    applied: string[],
    newAccount: boolean
}

declare interface IUserConxt {
    user: IUser | null,
    setUser: (user: IUser) => any
}