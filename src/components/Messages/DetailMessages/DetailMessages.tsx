import { useState } from "react"
import { getHeapStatistics } from "v8"
import { MainWrapper, TableHeader, TableBody, BottomBorder, Messages } from "./DetailMessages.styles"

const DetailMessages = (status: any) => {

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