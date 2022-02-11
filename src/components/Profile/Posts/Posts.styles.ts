import styled from "@emotion/styled"

export const PostWrapper = styled.div `
    width: 21em;
    grid-row: 2;
    grid-column: 1;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-top: .45em;
        color: #ffe1dd;
    }
    box-shadow: 0 0 10px #111;
    padding: .5em;
    border-radius: .5em;
`

export const Item = styled.div`
    margin: .5em auto 0 auto;
    border-radius: .25em;
    display: grid;
    justify-content: center;
    grid-template-columns: 3em 1fr 1em;
    grid-template-rows: 3em 1fr;
    grid-gap: .5em;
    padding: .5em .5em 0 .5em;
    width: 20em;
    height: fit-content;
    transition: .5s;
    overflow-wrap: break-word;
    p {
        grid-row: 2;
        grid-column: 1/3;
    }
    :hover {
        background-color: #333;
        transition: .5s;
    }
`

export const ItemImage = styled.img `
    grid-row: 1;
    grid-column: 1;
    width: 2.5em;
    height: 2.5em;
    border-radius: 50%;
    margin: .2em 0 0 0;
`

export const PostInput = styled.input `
    width: 20em;
`

export const DeleteButton = styled.button`
    grid-row: 1;
    grid-column: 3;
    position: relative;
    width: 100%;
    right: .4em;
    height: 1.6em;
    bottom: .2em;
`

export const AddButton = styled.button`
    background-color: #282828;
`