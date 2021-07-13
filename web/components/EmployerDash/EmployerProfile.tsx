import JobInfoArea from "components/shared/JobInfoArea";
import UserProfile from "components/shared/UserProfile";
import { createContext, useState } from "react";
import style from "../scss/EmployerUserInfo.module.scss";
import PreviousJobs from "./PreviousJobs";

interface ISelJobConxt {
    selectedJobId: string | undefined,
    setJobId: (id: string) => any
}

const contextDefaultValues: ISelJobConxt = {
    selectedJobId: undefined,
    setJobId: (id: string) => { }
};

export const SelJobsContext = createContext<ISelJobConxt>(
    contextDefaultValues
);

const EmployerProfile: React.FC = ({ }) => {

    const [showJobsArea, setShowJobsArea] = useState(false)
    const [currentJob, setCurrentJob] = useState<string>("sdadsads")
    return (
        <>
            <SelJobsContext.Provider
                value={
                    {
                        selectedJobId: currentJob,
                        setJobId: (id: string) => setCurrentJob(id)

                    }

                } >
                {
                    showJobsArea &&
                    <JobInfoArea state="approved" type="employer" title="A random job" setInfoShow={setShowJobsArea} />
                }
                <div className={style.employerProfile} >
                    <UserProfile />
                    <PreviousJobs setShowJobsInfo={setShowJobsArea} />
                </div>
            </SelJobsContext.Provider>
        </>
    )
}

export default EmployerProfile
