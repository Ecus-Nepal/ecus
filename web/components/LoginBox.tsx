import { FaGoogle } from "react-icons/fa"
import style from "./scss/LoginBox.module.scss"
import MainButton from "./shared/MainButton"

const LoginBox: React.FC = ({ }) => {

    const handleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/auth/google`
    }


    return (
        <div className={style.loginBox}>
            <div className={style.loginBox__ecusLogo}>
                <span className={style.name}><h1>ECUS</h1></span>
                <span className={style.sub}>Transfering work economy</span>
            </div>

            <div className={style.welcome}>
                <span className={style.title} >
                    Hey There,
                </span>
                <p>
                    This is one place for all Nepla’s work marketplace <br />
                    Lets begin your journy with a simple click
                </p>
            </div>

            <div className={style.btn}>
                <MainButton type="button" onClick={handleLogin}>
                    <FaGoogle /> Login with Google
                </MainButton>
            </div>
        </div>
    )
}

export default LoginBox
