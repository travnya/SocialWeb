import styled from "@emotion/styled";

export const FriendListWrapper = styled.div`
    width: 100%;
    height: 6em;
    margin-top: .8em;
    border-radius: .5em;
    box-shadow: 0 0 10px #111;
    padding: .85em;
    display: flex;
    transition: .2s;
    img {
        width: 4em;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
        transition: .5s;
        border: 0.1em solid azure;
        :hover {
            filter: blur(1px);
        }
    }
    h1 {
        margin: .15em 0 0 1em;
        height: fit-content;
        font-size: 2em;
        line-height: 150%;
        transition: .3s;
        cursor: pointer;
        :hover {
            color: #06D6B5;
        }
    }
    :first-of-type {
        margin: 0;
    }
    :hover {
        background-color: #444;
    }
`