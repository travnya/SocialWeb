import Head from 'next/head'
import { useState } from 'react'
import { FriendListWrapper } from './Friends.styles'

const Friends = () => {

    const createFriend = (name: string, surname: string, photo: string, id: number) => {
        return (
            {
                Name: name,
                Surname: surname,
                Photo: photo,
                id: id
            }
        )
    }
        
        const [friends] = useState([
            createFriend('Александр', 'Иванов','https://sun9-11.userapi.com/impg/JMX3A1zVamMI0lhvojaB-0SI6-mrkJXHhNpRcQ/9yi0MswI468.jpg?size=720x1280&quality=95&sign=e76c5224e9039ff3c01e6d39cb6ffd41&type=album', 1),
            createFriend('Кристина', 'Шапцова', 'https://sun9-65.userapi.com/impg/5QBNT1blNraX29KbYZfDQRL8yjoavs9dHEcAfw/w8oKoQW4Oe0.jpg?size=1620x2160&quality=96&sign=6bb340721e5e4bab773555048e24df69&type=album', 2),
            createFriend('Татьяна', 'Притыкина', 'https://sun9-63.userapi.com/impf/c855120/v855120759/15a77b/vmusPb0xBJQ.jpg?size=898x1080&quality=96&sign=d1a23680a08c92a9f213522c2e529370&type=album', 3),
            createFriend('Владислав', 'Самсонов', 'https://sun9-69.userapi.com/impf/c850428/v850428210/fe855/nyTezU6TZcs.jpg?size=960x1280&quality=96&sign=90c5608e48772f4293d655aee909b59d&type=album', 4)
        ])

        const renderFriends = () => {
            return (
                <>
                    <Head>
                        <title>Друзья</title>
                    </Head>
                    <>
                        {friends.map((friend) => (
                            <FriendListWrapper key={friend.id}>
                                <img src={friend.Photo} />
                                <h1 onClick={() => {return null}}>{`${friend.Name} ${friend.Surname}`}</h1>
                            </FriendListWrapper>
                        ))}
                    </>
                </>
            )
        }
    
    return renderFriends()
}

export default Friends