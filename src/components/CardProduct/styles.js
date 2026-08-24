import styled from "styled-components"


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap:  3.125rem;
padding:1.25rem;
border-radius:0.5rem;
background-color: ${(props) => props.theme.white};
box-shadow: rgba(0, 0, 0, 0.35) 0px 0.3125rem 0.9375rem;
cursor: grab;
position: relative;

div{
    width: 100%;
    height: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap:0.3125rem;
}
p{
    font-size: 0.8rem;
    color:  ${(props) => props.theme.orange};
    line-height: 1.25rem;
    font-weight: 700;
    margin-top: 2.5rem;
}

strong{
font-size: 1.375rem;
color:  ${(props) => props.theme.black};
font-weight: 800;
line-height: 1.25rem;
}
`

export const CardImage = styled.img`
height: 5.25rem;
position: absolute;
top: -2.5rem;

`