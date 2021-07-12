import ActionBtn from "components/shared/ActionBtn"
import InputBox from "components/shared/InputBox"
import { FaSearch } from "react-icons/fa"
import style from "../scss/JobsFeedSearch.module.scss"

interface Props {

}

const Search: React.FC<Props> = ({ }) => {
    return (
        <div className={style.search} >
            <div className={style.inputBar}>
                <InputBox placeHolder="Search" />
                <div className={style.actionbtn} >
                    <ActionBtn type="button" action="good">
                        <FaSearch />
                    </ActionBtn>
                </div>
            </div>
        </div>
    )
}

export default Search
