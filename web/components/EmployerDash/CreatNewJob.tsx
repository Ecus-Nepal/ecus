import ActionBtn from "components/shared/ActionBtn"
import InputBox from "components/shared/InputBox"
import JobCatHolder from "components/shared/JobCatHolder"
import { useFetch } from "hooks/useFetch"
import { useAlert } from "pages/_app"
import { FormEvent, useEffect, useRef, useState } from "react"
import style from "../scss/CreateNewJob.module.scss"

const CreatNewJob: React.FC = ({ }) => {

    const { setAlert } = useAlert()

    const jobTitle = useRef(null)
    const jobDesc = useRef<HTMLTextAreaElement>(null)
    const jobExpDate = useRef<HTMLInputElement>(null)
    const jobSalaty = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (jobExpDate.current) {
            jobExpDate.current!.min = new Date().toISOString().slice(0, -14);
        }
    }, [jobExpDate])

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

    const [jobsCatList, setJobsCatsList] = useState<string[]>([])

    const handleAddJobsCats = (cat: string) => {
        if (jobsCatList.includes(cat)) return
        setJobsCatsList(prev => prev.concat(cat))
    }

    const handleRemoveJobsCat = (cat: string) => {
        setJobsCatsList(prev => prev.filter(job => (
            job !== cat
        )))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        if (!jobTitle.current || !jobDesc.current || !jobExpDate.current) return

        if (
            (jobTitle.current as any).value.trim() === "" ||
            jobDesc.current?.value.trim() === "" ||
            jobExpDate.current?.value.trim() === "" ||
            parseInt(jobSalaty.current!.value) == null ||
            jobsCatList.length === 0
        ) {
            return setAlert({
                message: "Form not filled correctly!!!"
            })
        }


        const payload = {
            title: (jobTitle.current as any).value,
            desc: jobDesc.current?.value,
            expDate: jobExpDate.current?.value,
            salary: parseInt(jobSalaty.current!.value),
            categories: jobsCatList
        }
        const res = await useFetch<{ ok: boolean, message: string }>(
            "POST",
            "jobs/add",
            payload
        )
        if (res?.data.ok) {
            (jobTitle.current as any).value = ""
            jobDesc.current!.value = ""
            jobExpDate.current!.value = ""
            jobSalaty.current!.value = ""
            setJobsCatsList([])

            setAlert({
                type: "message",
                message: "New Job Registered"
            })
        } else {
            setAlert({
                message: "Error while saving job"
            })
        }

    }


    return (
        <div className={style.createNewJobs} >
            <section className={style.header}>
                Create a new Job
            </section>
            <div className={style.jobForm} >
                <form onSubmit={handleSubmit}>
                    <div className={style.jobTitle} >
                        <label> Title for the job</label>
                        <InputBox inputRef={jobTitle} />
                    </div>
                    <div className={style.jobDesc} >
                        <label>Job Description</label>
                        <textarea ref={jobDesc} />
                    </div>

                    <div className={style.jobDesc} >
                        <label>Job Salary</label>
                        <input ref={jobSalaty} type="number" />
                    </div>


                    <div className={style.jobDesc} >
                        <label>Job Expiration Date</label>
                        <input
                            type="date"
                            ref={jobExpDate}
                            id={style.inputDate}
                        />
                    </div>
                    <div>
                        <label>Jobs Categories</label>
                        <div className={style.jobsChoosing}>
                            <div className={style.allJobs} >
                                <div className={style.selectedJobs} >
                                    {
                                        jobsCatList.map((job, i) => (
                                            <JobCatHolder
                                                job={job}
                                                onDelete={() => handleRemoveJobsCat(job)}
                                                key={i}
                                            />
                                        ))
                                    }
                                </div>


                                {
                                    jobList.map((job, i) => (
                                        <span
                                            key={i}
                                            className="highlight"
                                            onClick={() => handleAddJobsCats(job)}
                                        >
                                            {job}
                                        </span>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.submit} >
                        <ActionBtn type="submit" action="good">Registe</ActionBtn>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatNewJob
