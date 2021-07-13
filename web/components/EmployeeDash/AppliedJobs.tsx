import AppliedJobsBox from "components/shared/AppliedJobBox"
import JobInfoArea from "components/shared/JobInfoArea"
import { useState } from "react"
import style from "../scss/AppliedJobs.module.scss"

const AppliedJobs: React.FC = ({ }) => {

    const [showInfo, setShowInfo] = useState(false)
    const [showInfoApproved, setShowInfoApproved] = useState(false)

    return (
        <div className={style.appliedJobs} >
            <span className={style.title}>Applied Jobs</span>
            <div className={style.cards} >
                <div >
                    <AppliedJobsBox
                        title="A random title"
                        job_by="John Mayer"
                        onClick={() => setShowInfo(true)}
                    />
                    <AppliedJobsBox
                        title="A random title 12"
                        job_by="John Mayer"
                        onClick={() => setShowInfoApproved(true)}
                    />
                </div>
            </div>

            {showInfo &&
                <JobInfoArea state="waiting" type="employee" setInfoShow={setShowInfo} title={"A test title"} />
            }
            {showInfoApproved &&
                <JobInfoArea state="approved" type="employee" setInfoShow={setShowInfoApproved} title={"A test title"} />
            }
        </div>
    )
}

export default AppliedJobs
