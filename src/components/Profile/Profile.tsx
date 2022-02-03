import Content from "./Content/Content"
import FriendsShort from "./FriendsShort/FriendsShort"
import Posts from "./Posts/Posts"
import { PostWrapper, ProfileInformation } from "./Profile.styles"


const Profile = () => {
    return (
        <div>
            <ProfileInformation>
                <Content />
                <FriendsShort />
            </ProfileInformation>

            <PostWrapper>
                <Posts />
            </PostWrapper>
        </div>
    )
}

export default Profile