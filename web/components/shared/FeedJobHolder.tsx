import { IoMdPerson } from "react-icons/io"
import style from "../scss/shared/FeedJobHolder.module.scss"

interface Props {
    title: string,
    issuedDate: string,
    about: string,
    jobsCats: string[],
    expDate: string,
    salary: number,
    rejected: number,
    accepted: number,
    pending: number,
    onClick?: () => any
}

const FeedJobHolder: React.FC<Props> = ({ onClick, title, rejected, accepted, pending, issuedDate, about, jobsCats, expDate, salary }) => {
    return (
        <div className={style.feedJobHoder} onClick={onClick}>
            <div className={style.container} >
                <div className={style.header} >
                    <div className={style.leftPart} >
                        <div className={style.title} >
                            {title}
                        </div>
                        <div className={style.issuedDate} >
                            Issued Date: {new Date(issuedDate).toDateString()}
                        </div>
                    </div>
                    <div className={style.number} >
                        <section className={style.employeeApplied} >
                            <div className={`${style.entity} ${style.accepted}`} >
                                <IoMdPerson size="2rem" />
                                <div className={style.number} >{accepted}</div>
                            </div>
                            <div className={`${style.entity} ${style.pending}`} >
                                <IoMdPerson size="2rem" />
                                <div className={style.number}>{pending}</div>
                            </div>
                            <div className={`${style.entity} ${style.rejected}`} >
                                <IoMdPerson size="2rem" />
                                <div className={style.number}>{rejected}</div>
                            </div>
                        </section>
                    </div>
                </div>
                <div className={style.about} >
                    {about}
                </div>
                <div className={style.jobsCats} >
                    <ul> {
                        jobsCats.map((job, i) => (
                            <li key={i}> <span className="highlight" >{job}</span> </li>
                        ))
                    }
                    </ul>
                </div>
                <div className={style.footer} >
                    <section className={style.expName} >
                        Exp Date: {new Date(expDate).toDateString()}
                    </section>
                    <section className={style.salary} >
                        Rs {salary.toLocaleString()}
                    </section>
                </div>

            </div>
        </div>
    )
}

export default FeedJobHolder
