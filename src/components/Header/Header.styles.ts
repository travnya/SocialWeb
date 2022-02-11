import styled from '@emotion/styled'

export const MainWrapper = styled.div`
    border: 1px solid white;
    border-radius: 0.5em;
    grid-row: 1;
    grid-column: 1/3;
    img {
        width: 3.5em;
        height: 3.5em;
    }
`

export const SLink = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    width: fit-content;
    height: 3.5em;
    :hover {
        color: inherit;
    }
    margin-left: 12%;
`