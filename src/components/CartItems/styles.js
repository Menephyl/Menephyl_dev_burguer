import styled from "styled-components"


export const ProductImage = styled.img`
height: 80px;
width: 80px;
border-radius: 16px;
`


export const ButtonGroup = styled.div`
display:flex;
align-items:center;
gap:12px;


button{
    display: flex;
    align-items:center;
    height: 30px;
    width: 30px;
    color: #fff;
    border-radius:4px;
    background-color:#9758a6;

    &:hover{
        background:#fff ;
        color: #9758a6;
    }

}
`





export const EmptyCart = styled.p`
font-size:20px;
text-align:center;
font-weight:bold;

`

export const ProductTotalPrice = styled.p`
font-weight:bold;
`

export const TrashImage = styled.img`
width: 28px;
height: 28px;
cursor: pointer;
`