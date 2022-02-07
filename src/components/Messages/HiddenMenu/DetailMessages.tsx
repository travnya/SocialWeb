import { useState } from "react"
import { MainWrapper, TableHeader, TableBody } from "./DetailMessages.styles"

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
                    <th>Александр Иванов</th>
                </TableHeader>
                {messages.map((message) => (
                    <TableBody>
                        <td>{message}</td>
                    </TableBody>
                ))}
            </table>
        </MainWrapper>
    )    
}

export default DetailMessages