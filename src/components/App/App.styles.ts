import styled from "@emotion/styled";

export const ContentWrapper = styled.div`
    display: grid;
    width: 60em;
    margin: 0 auto;
    grid-template-columns: 1fr;
    grid-template-rows: 4em 1fr;
`

export const HeaderWrapper = styled.div `
    grid-row: 1;
    grid-column: 1;
`

export const RegWrapper = styled.div `
    grid-row: 2;
    grid-column: 1;
    box-shadow: 0 0 1em #111;
    border-radius: .5em;
    height: 20em;
    margin-top: 1em;
`