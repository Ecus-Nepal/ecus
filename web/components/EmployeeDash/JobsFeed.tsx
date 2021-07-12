import ActionBtn from "components/shared/ActionBtn";
import FeedJobHolder from "components/shared/FeedJobHolder";
import { useFetch } from "hooks/useFetch";
import { useAlert } from "pages/_app";
import { useEffect, useRef, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import Modal from "react-modal";
import style from "../scss/JobsFeed.module.scss";


Modal.setAppElement('#__next');


interface jobsData {
    title: string,
    desc: string,
    creatorId: string,
    creatorName: string,
    expDate: string,
    jobsCategories: string[],
    salary: number,
    employeeApplied: string[],
    aprovedEmployee: number,
    pendingEmployee: number,
    rejectedEmployee: number,
    createdAt: string,
}



const JobsFeed: React.FC = ({ }) => {
    const [jobs, setJobs] = useState<jobsData[]>([])
    const { setAlert } = useAlert()
    const [showApplyModal, setShowApplyModal] = useState(false)
    const cvInput = useRef<HTMLInputElement>(null)
    useEffect(() => {
        (
            async () => {
                const res = await useFetch<{ ok: boolean, jobs: jobsData[] }>(
                    "GET",
                    "jobs/feed"
                )
                if (res?.data.ok) {
                    setJobs(res.data.jobs)
                }
            }
        )()
    }, [])

    const handleFeedClick = () => {
        setShowApplyModal(true)
    }

    const handleSend = () => {
        setShowApplyModal(false)
        setAlert({
            type: "message",
            message: "Applied to this job"
        })
    }

    return (
        <div className={style.jobsFeed} >
            <div className={style.header} >
                Jobs For You
            </div>
            <div className={style.jobs} >
                {
                    jobs.length !== 0 &&

                    jobs.map((job, i) => (
                        <FeedJobHolder
                            title={job.title}
                            jobsCats={job.jobsCategories}
                            about={job.desc}
                            expDate={job.expDate}
                            issuedDate={job.createdAt}
                            salary={job.salary}
                            key={i}
                            accepted={job.aprovedEmployee}
                            rejected={job.rejectedEmployee}
                            pending={job.pendingEmployee}
                            onClick={handleFeedClick}
                        />
                    ))
                }
            </div>

            <Modal
                isOpen={showApplyModal}
                className={style.applyModal}
                onRequestClose={() => setShowApplyModal(false)}
                shouldCloseOnOverlayClick={true}
                style={
                    {
                        overlay: {
                            background: "rgba(0,0,0,0.7)"
                        }
                    }
                }
            >
                <textarea />
                <div className={style.actionBtn} >
                    <ActionBtn type="button" action="bad" onClick={() => setShowApplyModal(false)} >Cancle </ActionBtn>
                    <ActionBtn type="button" action="good" onClick={handleSend}>Send</ActionBtn>
                    <div className={style.cvUpload} >
                        <span>CV</span>
                        <div className={style.button} onClick={() => cvInput.current?.click()}>
                            <input type="file" ref={cvInput} style={{ display: "none" }} />
                            <FaArrowAltCircleUp /></div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default JobsFeed
