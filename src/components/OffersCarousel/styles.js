import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled.div`
.carousel-item{
    padding-right: 40px;
    
}
padding-left:30px;
`

export const Title = styled.h2`
font-size: 22px;
color: #9758a6;
padding-bottom: 1rem;
position: relative;
text-align: center;
margin-top:1rem;
&::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 56px;
    height: 4px;
    background-color: #9758a6;
}

`
export const ContainerItems = styled.div`
display: flex;
background:url('${props => props.imageUrl}') no-repeat;
align-items: center;
width: 100%;
padding: 20px 10px;
height: 250px;
background-position:center;
background-size: cover;
padding-left:30px;
border-radius: 14px;

p{
    color: #ffffff;
    font-size: 22.5px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    padding: 10px 30px;
    margin-top: 50px;
}
`
export const CategoryButton = styled(Link)`




`