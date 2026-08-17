import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Container = styled.div`
.carousel-item{
    padding-right: 2.5rem;
    
}

.react-multiple-carousel__arrow--left {
    left: 15px;
    
}

.react-multiple-carousel__arrow--right {
    top: 10px;
    
}
/* padding-left:1.875rem; */
cursor: grab;   


`

export const Title = styled.h2`
font-size: 1.875rem;
font-weight: 800;
color:  ${(props) => props.theme.purple};
padding-bottom: 1rem;
position: relative;
text-align: center;
margin-top:2.5rem;
&::after {
    content: '';
    position: absolute;
    bottom: 10px;
    width: 56px;
    height: 4px;
    left: calc(50% - 28px);
    background-color:  ${(props) => props.theme.purple};
    
}

`
export const ContainerItems = styled.div`
background:url('${props => props.imageUrl}') no-repeat;
background-position:center;
background-size: cover;
display: flex;
align-items: center;
justify-content: center;   // massa 
width: 100%;
padding: 20px 10px;
height: 250px;
border-radius: 20px;

p{
    /* color: #ffffff;
    font-size: 22.5px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
    padding: 10px 30px;
    margin-top: 50px; */
}
`
export const CategoryButton = styled(Link)`

 color: #fff;
    background-color: rgba(0,0,0,0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    font-weight: 500;
    text-decoration: none;
    &:hover {
        background-color:  ${(props) => props.theme.secondDarkPurple};
    }


`