import styled from 'styled-components'

export const MainWrapper = styled.div`
    border: 1px solid white;
    border-radius: 0.5em;
    grid-row: 1;
    grid-column: 1/3;
    img {
        width: 3.5em;
        height: 3.5em;
    };
`

export const Link = styled.a`
    display: inline-flex;
    text-decoration: none;
    color: inherit;
    :hover {
        color: inherit;
    }
`