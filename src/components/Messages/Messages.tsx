import { useState } from "react"
import DetailMessages from "./DetailMessages/DetailMessages"
import { MessageAuthorImage, MessageItem, MessageList } from "./Messages.styles"
import Head from 'next/head'

const Messages = () => {

    const createMessage = (authorName: string, text: string, id: number) => {
        return {
            Author: authorName,
            Avatar: 'https://meragor.com/files/styles//ava_800_800_wm/funny-standoff-_meragor-com_349.jpg',
            Message: text,
            id: id
        }
    }

    const [messages] = useState([
        createMessage('Александр Иванов', "Привет, как твои дела?", 0),
        createMessage('Кто-то', "Олололо", 1),
        createMessage('Кто-то', "Олололо", 2),
        createMessage('Кто-то', "Олололо", 3),
        createMessage('Кто-то', "Олололо", 4)
    ])

    const [active, setActive] = useState(false)

    const renderMessage = () => {
        return (
            <>
                <Head>
                    <title>Сообщения</title>
                </Head>
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
            </>
        )
    }

    return renderMessage() 
}

export default Messages