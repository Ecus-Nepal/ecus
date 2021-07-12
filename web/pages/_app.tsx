import AlertBox from 'components/shared/AlertBox'
import UserProvider from 'context/user'
import { AppProps } from 'next/app'
import React, { useContext, useEffect, useState } from 'react'
import { refreshToken } from 'utils/refresh_token'
import '../scss/globals.scss'

// ? For Global Alert ---

type TAlert = "error" | "message"

interface IAlert {
  setAlert: (alertData: { type?: TAlert, message: string }) => void
}

const AlertContext = React.createContext<IAlert>({
  setAlert: (alertData: { type?: TAlert, message: string }) => { }
})

export const useAlert = () => {
  return useContext(AlertContext)
}

// ? --- Ends


function MyApp({ Component, pageProps }: AppProps) {

  const [alert, setAlertState] = useState<{ type?: TAlert, message: string } | null>({
    type: "message",
    message: ""
  })

  const setAlert = (alertData: { type?: TAlert, message: string }) => {
    setAlertState(alertData)
  }

  useEffect(() => {
    let resetAlert: any;
    console.log(alert)
    if (alert?.message !== "") {
      resetAlert = setTimeout(() => {
        setAlert({
          message: ""
        })
      }, 2000) // 2 seconds

    }

    return (
      () => clearTimeout(resetAlert)
    )
  }, [alert])

  const value = {
    alert: alert,
    setAlert: setAlert
  }

  useEffect(() => {
    const tokenReq = setInterval(async () => {
      //? Dont Run if it is in logio page
      if (!(window.location.pathname === "/")) {
        console.log(await refreshToken())
      }
    }, 1000 * 60 * 13) // 13 minutes
    return (() => clearInterval(tokenReq))
  }, [])

  return (
    <>
      <UserProvider>
        <AlertContext.Provider value={value}>
          {alert?.message !== "" && <AlertBox type={alert!.type || "error"}>{alert?.message}</AlertBox>}
          <Component {...pageProps} />
        </AlertContext.Provider>
      </UserProvider>
    </>
  )
}

export default MyApp
