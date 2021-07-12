import { useUser } from "context/user"
import style from "../scss/AboutEmployee.module.scss"

const AboutEmployee: React.FC = ({ }) => {

    const { user } = useUser()

    return (
        <div>
            <div className={style.about}>
                <span className={style.title} >About</span>
                <section className={style.info}>
                    <p>
                        {user?.about}
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AboutEmployee
