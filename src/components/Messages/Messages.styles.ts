import styled from "@emotion/styled";

export const MessageList = styled.div`
    overflow: scroll;
    padding: 0;
    height: 30em;
    ::-webkit-scrollbar {
        width: .5em;
    }
`

export const MessageItem = styled.div`
    display: grid;
    grid-gap: .2em;
    width: 100%;
    height: 4em;
    box-shadow: 0 0 10px #181818;
    margin-bottom: .75em;
    padding: .5em;
    grid-template-rows: 1.5em 1fr;
    grid-template-columns: 2em 1fr;
    cursor: pointer;
    border-radius: .5em;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-left: 1.5em;
        font-size: 1.1em;
    }
    p{
        font-size: .95em;
        grid-row: 2;
        grid-column: 2;
        margin-left: 2em;
    }
    :hover {
        background-color: #444;
        transition: 0.3s;
    }
    :last-child {
        margin: 0;
    }
`

export const MessageAuthorImage = styled.img`
    width: 3em;
    border-radius: 50%;
    grid-row: 1/3;
    grid-column: 1;
    border: 1px solid white;
    margin: 0 .25em .25em 0;
`