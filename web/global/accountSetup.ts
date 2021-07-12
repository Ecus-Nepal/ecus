type TAccount = "employer" | "employee" | null
interface IUserInfo {
    type: TAccount,
    wantedCategories: string[],
    about: string,

}
let setUpInfo: IUserInfo = {
    type: null,
    about: "",
    wantedCategories: []

}

export const setsetupInfo = (info: IUserInfo) => {
    setUpInfo = info
}

export const getsetupInfo = () => {
    return setUpInfo
}