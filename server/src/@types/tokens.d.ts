declare interface IRefToken {
    userID: string
}

declare interface IJWToken {
    _id: string,
    name: string,
    firstName: string,
    email: string,
    profilePic: string,
    newAccount: boolean
    accountType: "employer" | "employee",

}