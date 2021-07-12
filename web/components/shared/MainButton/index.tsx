import style from "./style.module.scss"


interface Props {
    type: "submit" | "reset" | "button",
    onClick?: () => any,
    disable?: boolean,
}
const MainButton: React.FC<Props> = ({ type, children, onClick, disable }) => {


    return (
        <>
            <button
                type={type}
                id={style.main_action_button}
                onClick={onClick ? () => onClick() : () => { }}
                disabled={disable ? disable : false}
            >{children}</button>
        </>
    )
}

export default MainButton
