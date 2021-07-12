import style from "../scss/shared/DropDown.module.scss"

interface Props {
    options: string[]
    returnOptionFunction: (option: string) => any
}

const DropDownMenu: React.FC<Props> = ({ options, returnOptionFunction }) => {

    const handleOptionClick = (option: string) => {
        returnOptionFunction(option)
    }


    return (
        <div className={style.dropDown} >
            <ul>
                {
                    options.map((option, i) => (
                        <li key={i} onClick={() => handleOptionClick(option)} >{option}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default DropDownMenu
