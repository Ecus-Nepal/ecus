import style from "../scss/shared/JobCatType.module.scss";

interface Props {
    onDelete?: (job: string) => any
    job: string
}

const JobCatHolder: React.FC<Props> = ({ job, onDelete }) => {
    return (
        <>
            <div className={style.jobCatHolder} >
                <div>{job}</div>
                {onDelete &&
                    <div className={style.cancle} onClick={() => onDelete(job)}>
                        &times;
                    </div>}
            </div>

        </>
    )
}

export default JobCatHolder
