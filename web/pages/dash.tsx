import AppliedJobs from "components/EmployeeDash/AppliedJobs";
import EmployeeDash from "components/EmployeeDash/EmployeeDash";
import JobsFeed from "components/EmployeeDash/JobsFeed";
import Search from "components/EmployeeDash/Search";
import EmployerDash from "components/EmployerDash/EmployerDash";
import NavBar from "components/shared/NavBar";
import withAuth from "components/shared/withAuth";
import { useUser } from "context/user";
import { useEffect } from "react";
import style from "../scss/Dash.module.scss";


const Dash: React.FC = () => {

    useEffect(() => {
        document.body.style.overflowY = "auto"
    }, [])

    const { user } = useUser()
    console.log(user?.accountType)

    if (user?.accountType === "employee") {
        return (
            <>
                <NavBar withLogout={true} />
                {user && user.accountType === "employee" &&
                    <>
                        <Search />
                        <div className={style.dash}>
                            <EmployeeDash />
                            <JobsFeed />
                            <AppliedJobs />
                        </div>
                    </>
                }
            </>
        )
    }

    if (user?.accountType === "employer") {
        return (
            <>
                <NavBar withLogout={true} />
                <>
                    <div className={style.dash}>
                        <EmployerDash />
                    </div>
                </>
            </>
        )
    }

    return (
        <h1>Loading</h1>
    )
}
export default withAuth(Dash)
