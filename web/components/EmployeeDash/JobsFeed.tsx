import FeedJobHolder from "components/shared/FeedJobHolder"
import style from "../scss/JobsFeed.module.scss"
const JobsFeed: React.FC = ({ }) => {
    return (
        <div className={style.jobsFeed} >
            <div className={style.header} >
                Jobs For You
            </div>
            <div className={style.jobs} >
                <FeedJobHolder
                    title="A random random job ititle"
                    issuedDate="26 June 2021"
                    about="Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy text 
                        ever since the 1500s"
                    jobsCats={
                        [
                            "Web Dev",
                            "Content Writer"
                        ]
                    }
                    expDate={"26 June 2021"}
                    salary={20000}
                />
            </div>
        </div>
    )
}

export default JobsFeed
