import { IoMdPerson } from "react-icons/io"
import style from "../scss/shared/PrevJobsCard.module.scss"

interface Props {
    title: string,
    onClick: () => any
}


const PrevJobsCard: React.FC<Props> = ({ title, onClick }) => {


    const handleCardClick = () => {
        onClick()
    }

    return (
        <div className={style.prevJobsCard} onClick={handleCardClick} >
            <span className={style.title} >{title}</span>
            <section className={style.employeeApplied} >
                <div className={`${style.entity} ${style.accepted}`} >
                    <IoMdPerson size="2rem" />
                    <div className={style.number} >16</div>
                </div>
                <div className={`${style.entity} ${style.pending}`} >
                    <IoMdPerson size="2rem" />
                    <div className={style.number}>16</div>
                </div>
                <div className={`${style.entity} ${style.rejected}`} >
                    <IoMdPerson size="2rem" />
                    <div className={style.number}>16</div>
                </div>
            </section>
            <div className={style.expDate} >Exp Date : 2021-02-01 </div>
        </div>
    )
}

export default PrevJobsCard
