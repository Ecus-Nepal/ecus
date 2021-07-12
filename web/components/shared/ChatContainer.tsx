import { FormEvent, useRef, useState } from "react"
import { RiSendPlaneFill } from "react-icons/ri"
import style from "../scss/shared/ChatContainer.module.scss"
import ActionBtn from "./ActionBtn"

interface IMessage { type: "received" | "sent", message: string }

const ChatContainer: React.FC = ({ }) => {

    const inputRef = useRef<HTMLInputElement>(null)
    const chatContainer = useRef<HTMLDivElement>(null)
    const messagesList: IMessage[] = [
        {
            type: "received",
            message: "fsdfsdfsfd"
        },
        {
            type: "sent",
            message: "fsdfsdfsfd"
        }
    ]

    const [messages, setMessages] = useState<IMessage[]>(messagesList)

    const handleSendMessage = (e: FormEvent) => {
        e.preventDefault()
        if (inputRef.current?.value.trim() === "") return
        setMessages(prev => prev.concat({
            type: "sent",
            message: inputRef.current!.value
        }))
        chatContainer.current?.scrollTo(0, chatContainer.current.scrollHeight)
    }

    return (
        <div className={style.chats} >
            <div className={style.title} >
                Chats
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
