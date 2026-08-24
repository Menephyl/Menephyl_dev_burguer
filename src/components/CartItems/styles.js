import styled from "styled-components"


export const ProductImage = styled.img`
height: 80%;
width: 80%;
border-radius: 1rem;
`


export const ButtonGroup = styled.div`
display:flex;
align-items:center;
gap:0.75rem;


button{
    display: flex;
    align-items:center;
    justify-content: center;
    height: 1.875rem;
    width: 1.875rem;
    color: ${(props) => props.theme.white};
    border-radius:0.25rem;
    background-color: ${(props) => props.theme.purple};
    transition: background-color 0.3s;
        border: none;
        cursor: pointer;

    &:hover{
        background: ${(props) => props.theme.secondDarkPurple}; ;
        color: ${(props) => props.theme.white};
    }

}
`
export const EmptyCart = styled.p`
font-size:1rem;
text-align:center;
font-weight:bold;
padding:0.625rem;

`

export const ProductTotalPrice = styled.p`
font-weight:bold;

`

export const TrashImage = styled.img`
width: 1.75rem;
height: 1.75rem;
cursor: pointer;
transition: filter 0.3s;
`