import Content from "./Content/Content"
import FriendsShort from "./FriendsShort/FriendsShort"
import MusicShort from "./MusicShort/MusicShort"
import Posts from "./Posts/Posts"
import { PostWrapper, ProfileInformation, ShortModules } from "./Profile.styles"
import Head from "next/head"


const Profile = () => {
    return (
        <>
            <Head>
                <title>Профиль</title>
            </Head>
            <ProfileInformation>
                <Content />
                <ShortModules >
                    <FriendsShort />
                    <MusicShort/>
                    <PostWrapper>
                        <Posts />
                    </PostWrapper>
                </ShortModules>
            </ProfileInformation>

        </>
    )
}

export default Profile