import style from "../scss/shared/AppliedJobBox.module.scss"

interface Props {
    title: string,
    job_by: string,
    onClick: () => any
}

const AppliedJobsBox: React.FC<Props> = ({ title, job_by, onClick }) => {
    return (
        <div className={style.appliedJob} onClick={onClick} >
            <div className={style.info} >
                <span className={style.title} >{title}</span>
                <span className={style.name} >{job_by}</span>
            </div>
        </div>
    )
}

export default AppliedJobsBox
