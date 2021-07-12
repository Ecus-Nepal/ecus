import AppliedJobsBox from "components/shared/AppliedJobBox"
import JobInfoArea from "components/shared/JobInfoArea"
import { useState } from "react"
import style from "../scss/AppliedJobs.module.scss"

const AppliedJobs: React.FC = ({ }) => {

    const [showInfo, setShowInfo] = useState(false)

    return (
        <div className={style.appliedJobs} >
            <span className={style.title}>Applied Jobs</span>
            <div className={style.cards} >
                <div onClick={() => setShowInfo(true)}>
                    <AppliedJobsBox
                        title="A random title"
                        job_by="John Mayer"
                    />
                </div>
            </div>

            {showInfo &&
                <JobInfoArea type="employee" setInfoShow={setShowInfo} title={"A test title"} />
            }
        </div>
    )
}

export default AppliedJobs
