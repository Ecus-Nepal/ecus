
import { useFetch } from "hooks/useFetch"
import router from "next/router"
import style from "../scss/shared/Header.module.scss"
import ActionBtn from "./ActionBtn"

interface Props {
    withLogout?: boolean
}

const NavBar: React.FC<Props> = ({ withLogout }) => {

    const handleLogout = async () => {
        const res = await useFetch<{ ok: boolean, message: string }>(
            "GET",
            "auth/logout",
        )
        if (res?.data.ok) {
            router.push("/")
        } else {
            console.log("Error logging out")
        }
    }

    return (
        <header className={style.header} >
            <nav>
                <div className={style.logo}>
                    ECUS
                </div>
                {
                    withLogout &&
                    <ActionBtn type="button" action="bad" onClick={handleLogout}>Log Out</ActionBtn>
                }
            </nav>
        </header>
    )
}

export default NavBar
