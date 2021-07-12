import { useUser } from "context/user"
import style from "../scss/JobsCats.module.scss"
import JobCatHolder from "../shared/JobCatHolder"


const JobsCats: React.FC = ({ }) => {

    const { user } = useUser()

    return (
        <div>
            <section className={style.jobCats} >
                <span className={style.title} >My Categories</span>
                <div className={style.catogries} >
                    {user?.wantedCatogries &&
                        user?.wantedCatogries.map((cat, i) => (
                            <JobCatHolder job={cat} key={i} />
                        ))
                    }
                </div>
            </section>
        </div>
    )
}

export default JobsCats
