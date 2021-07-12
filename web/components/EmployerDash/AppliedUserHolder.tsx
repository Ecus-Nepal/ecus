import { HiCheck, HiX } from "react-icons/hi"
import style from "../scss/AppliedUserHolder.module.scss"

interface Props {
    profilePic: string,
    name: string,
    onClick: () => void,
    onAccept: () => any
    onReject: () => any
}

const AppliedUserHolder: React.FC<Props> = ({ profilePic, name, onClick, onAccept, onReject }) => {
    return (
        <div className={style.appliedUserCard} >
            <section className={style.profile} onClick={onClick}>
                <div className={style.pic} ></div>
                <div className={style.name} >{name}</div>
            </section>

            <section className={style.action} >
                <span className={style.tick} onClick={onAccept}>
                    <HiCheck />
                </span>
                <span className={style.cross} onClick={onReject}>
                    <HiX />
                </span>
            </section>
        </div>
    )
}

export default AppliedUserHolder
