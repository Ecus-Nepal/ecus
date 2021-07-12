import style from "../scss/shared/DetailedProfile.module.scss"
import JobCatHolder from "./JobCatHolder"

interface Props {
    name?: string,
    profilePic?: string,
    about?: string,
    wantedCats: string[]
}

const DetailedProfile: React.FC<Props> = ({ name, profilePic, about, wantedCats }) => {
    return (
        <div className={style.detailedProfile} >
            <div className={style.userProfile} >
                <div className={style.pic} >
                </div>
                <div className={style.name} >Aakash Khanal</div>
            </div>
            <div className={style.about} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean ut purus non mi lobortis lacinia. Vestibulum
                egestas neque nunc, nec venenatis sapien tempus sit
                amet. Vivamus nibh libero, fringilla at erat id,
                gravida accumsan sem.
            </div>
            <div className={style.wantedCat} >
                {
                    wantedCats.map((job, i) => (
                        <JobCatHolder job={job} key={i} />
                    ))
                }
            </div>
        </div>
    )
}

export default DetailedProfile
