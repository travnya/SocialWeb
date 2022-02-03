import styled from "@emotion/styled"

export const PostWrapper = styled.div `
    width: 23em;
    grid-row: 2;
    grid-column: 1;
    h5 {
        grid-row: 1;
        grid-column: 2;
        margin-top: .45em;
        color: #ffe1dd;
    }
`

export const Item = styled.div`
    margin: .5em auto 0 auto;
    box-shadow: 0 0 3px whitesmoke;
    border-radius: 3px;
    display: grid;
    justify-content: center;
    grid-template-columns: 3em 1ft 1em;
    grid-template-rows: 3em 1fr;
    grid-gap: .5em;
    padding: .5em .5em 0 .5em;
    width: 20em;
    p {
        grid-row: 2;
        grid-column: 1/3;
    }
`

export const ItemImage = styled.img `
    grid-row: 1;
    grid-column: 1;
    width: 3em;
    height: 3em;
    border-radius: 50%;
`

export const PostInput = styled.input `
    width: 20em;
`

export const DeleteButton = styled.button`
    grid-row: 1/3;
    grid-column: 3;
    position: relative;
    width: 100%;
    left: .7em;
    height: 1.6em;
    bottom: .2em;
`