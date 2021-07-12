import ActionBtn from "components/shared/ActionBtn"
import DropDownMenu from "components/shared/DropDownMenu"
import InputBox from "components/shared/InputBox"
import JobCatHolder from "components/shared/JobCatHolder"
import { setsetupInfo } from "global/accountSetup"
import router from "next/router"
import { Dispatch, SetStateAction, useRef, useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { escapeRegExp } from "utils/escapeRexChar"
import style from "./second.module.scss"
type TAccount = "employer" | "employee"


interface IUserInfo {
    type: TAccount,
    wantedCatogoties: string[],
    about: string,

}


interface Props {
    changePage: Dispatch<SetStateAction<"first" | "second">>,
}

const Second: React.FC<Props> = ({ changePage }) => {

    const jobTypeInput = useRef<string>("")

    const jobList = [
        "Web Dev",
        "Graphic Designing",
        "Video Editing",
        "Logo designing",
        "App Development",
        "Interior designer",
        "Maid",
        "Tutor",
        "Consultant",
        "Content Writing"
    ]

    const [jobsTypeList, setJobsTypeList] = useState(jobList)
    const [selectedJobs, setSelectedJobs] = useState<string[]>([])

    const aboutMe = useRef<HTMLTextAreaElement>(null)

    const handleOptionSelected = (option: string) => {
        setSelectedJobs(prev => prev?.concat(option))
        jobTypeInput.current = ""

    }

    const handleJobTypeInput = (input?: string) => {
        if (input)
            jobTypeInput.current = input
        setJobsTypeList(_ => {
            return jobList.filter(job => {
                if (input) {
                    const jobRex = new RegExp(escapeRegExp(input), "gi")
                    return jobRex.test(job)
                }
            })
        })
    }

    const handleRegister = () => {
        setsetupInfo({
            type: "employee",
            about: aboutMe.current!.value,
            wantedCategories: selectedJobs

        })
        router.push("/account/final")
    }

    const handleUnselect = (job: string) => {
        setSelectedJobs(prev => prev.filter(selJobs => (
            selJobs !== job
        )))
    }

    return (
        <div className={style.secondForm}>
            <div className={style.workAs}>
                <span>I want to work as</span>
                <div className={style.workSelector}>
                    <InputBox onChangeFunction={handleJobTypeInput} />
                </div>
                {jobTypeInput.current?.trim() !== "" && jobsTypeList.length !== 0 &&
                    <DropDownMenu
                        options={jobsTypeList}
                        returnOptionFunction={handleOptionSelected}
                    />
                }
            </div>
            <div className={style.selectedJobDisplay}>

                {
                    selectedJobs?.map((selJob, i) => {
                        return (
                            <JobCatHolder
                                onDelete={handleUnselect}
                                key={i}
                                job={selJob}
                            />
                        )
                    })
                }

            </div>
            <div className={style.about}>
                <span>About Me</span>
                <textarea ref={aboutMe} />
            </div>
            <div className={style.actionBtn} >
                <ActionBtn
                    type="button"
                    action="bad"
                    onClick={() => changePage("first")}
                ><FaArrowLeft /></ActionBtn>
                <ActionBtn type="button" action="good" onClick={handleRegister}>Register</ActionBtn>
            </div>
        </div>
    )
}

export default Second
