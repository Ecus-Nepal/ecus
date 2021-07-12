import Image from "next/image";
import { CSSProperties } from "react";
import style from "../scss/shared/AccountTypeCard.module.scss";

interface Props {
    type: "employee" | "employer",
    onClick: () => any
}

const AccountTypeCard: React.FC<Props> = ({ type, onClick }) => {
    const cardsStyle: CSSProperties = {
        backgroundColor: `${type === "employee" ? "#828EFF" : "#FF7777"}`
    }

    const imgURL = `/assets/accountType/${type}.svg`

    return (
        <div className={style.accountTypeCard} style={cardsStyle} onClick={onClick}>
            {
                type === "employee" ?
                    <h2>Employee</h2> :
                    <h2>Employer</h2>
            }
            <div className={style.avatar}>
                <Image src={imgURL} width="400px" height="250px" ></Image>
            </div>
            <div className={style.info} >
                If you are <span>{type === "employee" ? "looking" : "offering"}</span> for a job
            </div>
        </div>
    )
}

export default AccountTypeCard
