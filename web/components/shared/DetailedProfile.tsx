import { FaArrowCircleDown } from "react-icons/fa"
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
            <div className={style.userProf__container} >
                <div className={style.userProfile} >
                    <div className={style.pic} >
                    </div>
                    <div className={style.name} >Aakash Khanal</div>
                </div>
                <div className={style.downloadCV} >
                    <span>CV</span>
                    <FaArrowCircleDown />
                </div>
            </div>
            <div className={style.about} >
                <h3>About Me</h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Aenean ut purus non mi lobortis lacinia. Vestibulum
                egestas neque nunc, nec venenatis sapien tempus sit
                amet. Vivamus nibh libero, fringilla at erat id,
                gravida accumsan sem.
            </div>
            <div className={style.about} >
                <h3>Message</h3>
                In eget lorem malesuada, viverra mi at, malesuada
                dolor. Fusce in tortor non lacus pellentesque finibus
                ut condimentum turpis. Praesent blandit feugiat
                lorem id porttitor. Fusce justo justo, rutrum at
                tellus sed, cursus lacinia est. Duis finibus
                facilisis magna eget mattis.
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
