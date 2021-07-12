import { CSSProperties } from "react"

interface Props {
    type: "submit" | "reset" | "button",
    onClick?: () => any,
    disable?: boolean,
    action: "good" | "bad"
}

const ActionBtn: React.FC<Props> = ({ type, children, onClick, disable, action }) => {

    const btnStyle: CSSProperties = {
        backgroundColor: `${action === "good" ? "#4CE8CC" : "#FF7777"}`,
        padding: "0.8rem 3rem",
        borderRadius: "300px",
        color: `${action === "good" ? "black" : "white"}`
    }

    return (
        <div>
            <>
                <button
                    type={type}
                    style={btnStyle}
                    onClick={onClick ? () => onClick() : () => { }}
                    disabled={disable ? disable : false}
                >{children}</button>
            </>
        </div>
    )
}

export default ActionBtn
