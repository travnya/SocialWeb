import Content from "./Content/Content"
import FriendsShort from "./FriendsShort/FriendsShort"
import Posts from "./Posts/Posts"
import { PostWrapper, ProfileInformation, ProfileWrapper } from "./Profile.styles"


const Profile = () => {
    return (
        <ProfileWrapper>
            <ProfileInformation>
                <Content />
                <FriendsShort />
            </ProfileInformation>

            <PostWrapper>
                <Posts />
            </PostWrapper>
        </ProfileWrapper>
    )
}

export default Profile