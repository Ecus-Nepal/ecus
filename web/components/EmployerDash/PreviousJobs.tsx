import { Dispatch, SetStateAction, useContext } from "react"
import style from "../scss/PreviousJobs.module.scss"
import { SelJobsContext } from "./EmployerProfile"
import PrevJobsCard from "./PrevJobsCard"

interface Props {
    setShowJobsInfo: Dispatch<SetStateAction<boolean>>
}

const PreviousJobs: React.FC<Props> = ({ setShowJobsInfo }) => {

    const { setJobId } = useContext(SelJobsContext)

    const handleCardClick = (id: string) => {
        setJobId(id)
        setShowJobsInfo(true)
    }

    return (
        <div className={style.previousJobs} >
            <span className={style.title} >Previous Jobs</span>
            <PrevJobsCard title="A random job title random job title random job title "
                onClick={() => handleCardClick("..dfsdfsdf")}
            />
        </div>
    )
}

export default PreviousJobs
