import { useState } from "react"
import DetailMessages from "./HiddenMenu/DetailMessages"
import { MessageAuthorImage, MessageItem, MessageList } from "./Messages.styles"

const Messages = () => {

    const createMessage = (authorName: string, text: string, id: number) => {
        return {
            Author: authorName,
            Avatar: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
            Message: text,
            id: id
        }
    }

    const [messages, setMessage] = useState([
        createMessage('Александр Иванов', "Привет, как твои дела?", 0),
        createMessage('Кто-то', "Привет, как твои дела?", 1),
        createMessage('Кто-то', "Привет, как твои дела?", 2),
        createMessage('Кто-то', "Привет, как твои дела?", 3),
        createMessage('Кто-то', "Привет, как твои дела?", 4)
    ])

    const [active, setActive] = useState(false)

    if (active) {
        return <DetailMessages />
    } 
    else {
        return (
            <MessageList >
                {messages.map((message) => (
                    <MessageItem key={message.id}
                        onClick={() => setActive(!active)}>
                        <MessageAuthorImage src={message.Avatar}/>
                        <h5>{message.Author}</h5>
                        <p>{message.Message}</p>
                    </MessageItem>
                ))}
            </MessageList>
        )
    }
}

export default Messages