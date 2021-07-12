import style from "../scss/JobsFeed.module.scss"
const JobsFeed: React.FC = ({ }) => {
    return (
        <div className={style.jobsFeed} >
            <div className={style.header} >
                Jobs For You
            </div>
        </div>
    )
}

export default JobsFeed
