import ActionBtn from "components/shared/ActionBtn"
import NavBar from "components/shared/NavBar"
import withAuth from "components/shared/withAuth"
import { getsetupInfo } from "global/accountSetup"
import { useFetch } from "hooks/useFetch"
import router from "next/router"
import { useEffect } from "react"
import style from "../../scss/final.module.scss"
const Final: React.FC = ({ }) => {

    useEffect(() => {
        console.log(
            getsetupInfo()
        )
    }, [])

    const handleStart = async () => {
        const payload = getsetupInfo()
        const res = await useFetch(
            "POST",
            `profile/update`,
            payload
        )
        console.log(res?.data)
        router.push("/dash")
    }

    return (
        <div>
            <NavBar />
            <div className={style.final} >
                <div className={style.final__wraper} >
                    <div className={style.final__container} >
                        <div className={style.txt}>
                            <section className={style.heading}>
                                All done. It’s that easy
                            </section>
                            <section className={style.welcome}>
                                <span className="highlight">WELCOME</span>
                            </section>
                            <section className={style.typeInfo} >
                                All the best for your journy as a Employer
                            </section>
                            <section className={style.actionBtn}>
                                <ActionBtn type="button" action="bad"
                                    onClick={
                                        () => router.push("/account/setup")
                                    }

                                >change account type</ActionBtn>
                                <ActionBtn
                                    type="button"
                                    action="good"
                                    onClick={handleStart}><b>Start</b> </ActionBtn>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAuth(Final)
