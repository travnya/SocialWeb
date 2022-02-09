import styled from "@emotion/styled";

export const MainWrapper = styled.div `
    display: inline-table;
    width: 100%;
    table {
        width: inherit;
    }

`

export const TableHeader = styled.div`
    background-color: #333;
    box-shadow: 0 0 10px #181818;
    height: fit-content;
    display: flex;
    justify-content: center;
    margin: auto auto;
    border-radius: .25em;
    h1 {
        font-size: 2em;
    }
`

export const TableBody = styled.div `
    width: 100%;
    height: 3em;
    margin: .5em auto .5em auto;
    p {
        line-height: 220%;
        margin-left: 2em;
        width: inherit;
    }
    :first-child {
        margin-top: 1em;
    }
`

export const BottomBorder = styled.div `
    border-bottom: .05em solid #444;
    margin: 0 auto;
    width: 65%;

    :last-child {
        
    }
`

export const Messages = styled.div `
    margin-top: 1em;
`