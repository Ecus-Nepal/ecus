import { IoMdPerson } from "react-icons/io"
import style from "../scss/shared/FeedJobHolder.module.scss"
import JobCatHolder from "./JobCatHolder"

interface Props {
    title: string,
    issuedDate: string,
    about: string,
    jobsCats: string[],
    expDate: string,
    salary: number
}

const FeedJobHolder: React.FC<Props> = ({ title, issuedDate, about, jobsCats, expDate, salary }) => {
    return (
        <div className={style.feedJobHoder} >
            <div className={style.container} >
                <div className={style.header} >
                    <div className={style.leftPart} >
                        <div className={style.title} >
                            {title}
                        </div>
                        <div className={style.issuedDate} >
                            Issued Date: {issuedDate}
                        </div>
                    </div>
                    <div className={style.number} >
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
                    </div>
                </div>
                <div className={style.about} >
                    {about}
                </div>
                <div className={style.jobsCats} >
                    {
                        jobsCats.map((job, i) => (
                            <JobCatHolder job={job} key={i} />
                        ))
                    }
                </div>
                <div className={style.footer} >
                    <section className={style.expName} >
                        Exp Date: {expDate}
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
