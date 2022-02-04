import Content from "./Content/Content"
import FriendsShort from "./FriendsShort/FriendsShort"
import MusicShort from "./MusicShort/MusicShort"
import Posts from "./Posts/Posts"
import { PostWrapper, ProfileInformation, ShortModules } from "./Profile.styles"


const Profile = () => {
    return (
        <div>
            <ProfileInformation>
                <Content />
                <ShortModules >
                    <FriendsShort />
                    <MusicShort/>
                </ShortModules>
            </ProfileInformation>

            <PostWrapper>
                <Posts />
            </PostWrapper>
        </div>
    )
}

export default Profile