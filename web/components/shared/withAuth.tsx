import { useUser } from "context/user";
import Router from "next/router";
import { useEffect } from "react";
import { refreshToken } from "utils/refresh_token";


type withAuth = (Component: React.FC) => React.FC;

const withAuth: withAuth = (Component) => {


    const Authenticated: React.FC = (): JSX.Element | null => {


        const { user, setUser } = useUser();

        useEffect(() => {
            (async () => {
                if (user?.accountType === "" || !user) {
                    const decoded = await refreshToken()
                    if (decoded) {
                        const { user } = decoded
                        console.log(user)
                        setUser(user)
                    } else {
                        Router.replace("/")
                    }
                }
            })()
        }, [])

        return <Component />;

    };

    return Authenticated;
};



export default withAuth;