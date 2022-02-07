import styled from "@emotion/styled";

export const MainWrapper = styled.div `
    display: inline-table;
    width: 100%;
    table {
        width: inherit;
    }

`

export const TableHeader = styled.div`
    box-shadow: 0 0 10px #181818;
    height: 3em;
`

export const TableBody = styled.div `
    width: 100%;    
    td {
        border-bottom: .05em solid white;
        width: inherit;
    }
`