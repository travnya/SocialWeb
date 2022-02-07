import Content from "./Content/Content"
import FriendsShort from "./FriendsShort/FriendsShort"
import MusicShort from "./MusicShort/MusicShort"
import Posts from "./Posts/Posts"
import { PostWrapper, ProfileInformation, ShortModules } from "./Profile.styles"


const Profile = () => {
    return (
        <>
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