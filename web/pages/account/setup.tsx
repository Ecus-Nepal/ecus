import AccountTypeCard from "components/shared/AccountTypeCard"
import NavBar from "components/shared/NavBar"
import withAuth from "components/shared/withAuth"
import Second from "components/SignUpForm/Second"
import { setsetupInfo } from "global/accountSetup"
import router from "next/router"
import { useState } from "react"
import style from "../../scss/setup.module.scss"
type TAccount = "employer" | "employee"

const Setup: React.FC = ({ }) => {

    const [formState, setFormState] = useState<"first" | "second">("first")

    const handelTypeSelect = (type: TAccount) => {
        if (type === "employee") {
            setFormState("second")
        } else {
            setsetupInfo({
                type: "employer",
                about: "",
                wantedCategories: []
            })
            router.push("/account/final")
        }
    }

    return (
        <>
            <NavBar />
            <div className={style.setup}>
                <div className={style.setup__wraper}>
                    {
                        formState === "first" &&
                        <>
                            <div className={style.setup__container}>
                                <div className={style.welcome}>
                                    Welcome <span className="highlight">Joe</span>
                                </div>
                                <div className={style.text}>
                                    Who are you?
                                </div>
                                <section className={style.cardsSection}>
                                    <div className={style.cards}>
                                        <AccountTypeCard type="employee" onClick={() => handelTypeSelect("employee")} />
                                        <AccountTypeCard type="employer" onClick={() => handelTypeSelect("employer")} />
                                    </div>
                                </section>
                            </div>
                        </>

                    }

                    {
                        formState === "second" &&
                        <Second changePage={setFormState} />
                    }


                </div>
            </div>
        </>
    )
}

export default withAuth(Setup)
