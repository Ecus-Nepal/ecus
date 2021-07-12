import style from "../scss/EmployerDash.module.scss"
import CreatNewJob from "./CreatNewJob"
import EmployerProfile from "./EmployerProfile"


const EmployerDash: React.FC = ({ }) => {
    return (
        <div className={style.employerDash} >
            <EmployerProfile />
            <CreatNewJob />
            <div className={style.extraSpace} ></div>

        </div>
    )
}

export default EmployerDash
