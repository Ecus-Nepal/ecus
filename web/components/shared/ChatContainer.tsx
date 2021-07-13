import { FormEvent, useEffect, useRef, useState } from "react"
import { RiSendPlaneFill } from "react-icons/ri"
import style from "../scss/shared/ChatContainer.module.scss"
import ActionBtn from "./ActionBtn"

interface IMessage { type: "received" | "sent", message: string }

interface Props {
    header?: string,
    messagesList: IMessage[]
}

const ChatContainer: React.FC<Props> = ({ header, messagesList }) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const chatContainer = useRef<HTMLDivElement>(null)


    const [messages, setMessages] = useState<IMessage[]>(messagesList)

    useEffect(() => {

        const chatAreaSize = chatContainer.current!.scrollHeight
        chatContainer.current?.scrollTo(0, chatAreaSize)

    }, [chatContainer.current?.scrollHeight])

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        if (inputRef.current?.value.trim() === "") return
        const message = inputRef.current!.value
        setMessages(prev => {
            return prev.concat({
                type: "sent",
                message: message
            })
        })
        inputRef.current!.value = ""

    }

    return (
        <div className={style.chats} >
            <div className={style.title} >
                {header}
            </div>
            <div className={style.wraper} >
                <div className={style.chatContainer} ref={chatContainer}>


                    {
                        messages.map(message => (
                            <div className={`${style.message} ${style[message.type]}`}>
                                {message.message}
                            </div>
                        ))
                    }

                </div>
            </div>
            <div className={style.inputChatMsg} >
                <form onSubmit={handleSendMessage}>
                    <input type="text" ref={inputRef} />
                    <ActionBtn type="submit" action="good" ><RiSendPlaneFill /></ActionBtn>
                </form>
            </div>
        </div>
    )
}

export default ChatContainer
