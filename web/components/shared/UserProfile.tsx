import { useUser } from "context/user"
import Image from "next/image"
import style from "../scss/shared/UserProfile.module.scss"


const UserProfile: React.FC = () => {

    const { user } = useUser()

    return (
        <div className={style.userProfile}>
            <section className={style.info}>
                <section className={style.profilePic}>
                    <Image src={user!.profilePic} width="80px" height="80px" />
                </section>
                <span className={style.name} >{user?.name}</span>
            </section>
        </div>
    )
}






export default UserProfile
