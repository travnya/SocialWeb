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
        createFriend('Владислав', 'Самсонов', 'https://sun9-69.userapi.com/impf/c850428/v850428210/fe855/nyTezU6TZcs.jpg?size=960x1280&quality=96&sign=90c5608e48772f4293d655aee909b59d&type=album', 0)
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