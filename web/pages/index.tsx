import LoginBox from "components/LoginBox"
import NavBar from "components/shared/NavBar"
import { useUser } from "context/user"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import style from "../scss/login.module.scss"

export default function Home() {

  const [loading, setLoading] = useState(false)
  const { setUser } = useUser()

  const router = useRouter()

  useEffect(() => {
    document.body.style.overflow = "hidden"
  })

  return (
    <>
      <NavBar />
      <div className={style.login}>
        <section className={style.login__wave}>
        </section>
        <section className={style.login__box}>
          <LoginBox />
        </section>

      </div>
    </>
  )
}
