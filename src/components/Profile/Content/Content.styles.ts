import styled from "@emotion/styled";

export const ContentWrapper = styled.div `
    grid-row: 1;
    grid-column: 3;
    p {
        text-align: center;
        margin: .5em 0 0 0;
    };
    display: table-column;
    box-shadow: -2px 2px 10px #181818;
    padding: 1.5em;
    text-align: center;
    border-radius: .5em;
    height: fit-content;
`

export const ProfileImage = styled.img`
    width: 10em;
    height: 12em;
    border-radius: 2em;
    background-size: cover;
    background-position: center center;
    box-shadow: 2px 2px 10px rgb(49, 49, 49);
    object-fit: cover;
    box-shadow: 0 0 5px azure;
`

export const ProfileInfo = styled.div `
    margin: 2em .5em 0 .5em;
`