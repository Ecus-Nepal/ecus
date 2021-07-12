import { ChangeEvent, CSSProperties, Dispatch, MutableRefObject, SetStateAction } from "react"

interface Props {
    setInput?: Dispatch<SetStateAction<string | undefined>>;
    onChangeFunction?: (input?: string) => any
    inputRef?: MutableRefObject<any>,
    placeHolder?: string,
}


const InputBox: React.FC<Props> = ({ setInput, onChangeFunction, inputRef, placeHolder }) => {

    const InputStyle: CSSProperties = {
        width: "300px",
        height: "30px",
        borderRadius: "10px",
    }
    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (setInput) {
            setInput(e.target.value)
        }
        if (onChangeFunction) {
            onChangeFunction(e.target.value)
        }
    }

    return (
        <>
            <input placeholder={placeHolder} type="text" onChange={handleInput} style={InputStyle} ref={inputRef} />
        </>
    )
}

export default InputBox
