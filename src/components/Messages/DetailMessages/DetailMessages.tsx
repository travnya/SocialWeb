import { useState } from "react"
import { MainWrapper, TableHeader, TableBody, BottomBorder, Messages } from "./DetailMessages.styles"

const DetailMessages = () => {

    const [messages] = useState([
        'Привет, как твои дела?',
        'Да вроде неплохо, а твои?',
        'Да вот делаю бэк',
        'Сочувствую'
    ])

    return(
        <MainWrapper>
            <table>
                <TableHeader>
                    <h1>Александр Иванов</h1>
                </TableHeader>
                <Messages>
                {messages.map((message) => (
                    <TableBody>
                        <p>{message}</p>
                        <BottomBorder />
                    </TableBody>
                ))}
                </Messages>
            </table>
        </MainWrapper>
    )    
}

export default DetailMessages