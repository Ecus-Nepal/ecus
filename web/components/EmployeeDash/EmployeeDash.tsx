import style from "../scss/UserInfo.module.scss"
import UserProfile from "../shared/UserProfile"
import AboutEmployee from "./AboutEmployee"
import JobsCats from "./JobsCats"

const EmployeeDash: React.FC = ({ }) => {

    return (
        <>
            <div className={style.userInfo} >
                <UserProfile />
                <JobsCats />
                <AboutEmployee />
            </div>
        </>
    )
}

export default EmployeeDash
