import styled from "@emotion/styled";

export const FriendListWrapper = styled.div`
    width: 100%;
    height: 5em;
    margin-top: .8em;
    border-radius: .5em;
    box-shadow: 0 0 10px #111;
    padding: .85em;
    display: flex;
    transition: .2s;
    cursor: pointer;
    img {
        width: 3.2em;
        border-radius: 50%;
        object-fit: cover;
        transition: .5s;
        border: 0.1em solid azure;    
    }
    h1 {
        margin: .15em 0 0 1em;
        height: fit-content;
        font-size: 2em;
        line-height: 1.1em;
        transition: .3s;
    }
    :first-of-type {
        margin: 0;
    }
    :hover {
        background-color: #444;
    }
`