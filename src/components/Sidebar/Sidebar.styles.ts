import styled from "@emotion/styled";

export const SidebarWrapper = styled.div `
    grid-row: 2;
    grid-column: 1/2;
    text-align: center;
    height: 20em;
    width: fit-content;
`

export const NavMenu = styled.nav`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    align-items: center;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: inherit;
`

export const MenuButton = styled.button`
    width: 7em;
    margin: 5px;
`