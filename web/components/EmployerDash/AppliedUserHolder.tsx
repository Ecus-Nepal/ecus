import { HiCheck, HiX } from "react-icons/hi"
import style from "../scss/AppliedUserHolder.module.scss"

interface Props {
    profilePic: string,
    name: string,
    onClick: () => void
}

const AppliedUserHolder: React.FC<Props> = ({ profilePic, name, onClick }) => {
    return (
        <div className={style.appliedUserCard} onClick={onClick}>
            <div className={style.pic} ></div>
            <div className={style.name} >{name}</div>

            <section className={style.action} >
                <span className={style.tick} >
                    <HiCheck />
                </span>
                <span className={style.cross} >
                    <HiX />
                </span>
            </section>
        </div>
    )
}

export default AppliedUserHolder
