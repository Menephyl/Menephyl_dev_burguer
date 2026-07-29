import styled from "styled-components"

export const Root = styled.table`
width: 100%;
border-collapse: collapse;
background-color: #fff;
border-radius: 20px;
`

export const Header = styled.thead`

`
export const Tr = styled.tr`
background-color: #484848;


`

export const Th = styled.th`
padding: 16px;
text-align: left;

color: #fff;


&:first-child{
border-top-left-radius:20px;

}

&:last-child{
border-top-right-radius:20px;

}

`
export const Td = styled.td`
padding: 16px;
font-weight: 500;
color: #484848;
line-height: 115%;
border-bottom: 1px solid #cdcdcd;
`

export const Body = styled.tbody``