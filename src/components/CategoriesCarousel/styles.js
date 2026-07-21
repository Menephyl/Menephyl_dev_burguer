import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
.carousel-item{
    padding-right: 3.5rem;
    
}
cursor: grab;

.react-multiple-carousel__arrow--left {
    left: 0.9375rem;
    top: 0.625rem;
}

.react-multiple-carousel__arrow--right {
    top: 0.25rem;
}
padding-left:1.875rem;


`

export const Title = styled.h2`
font-size: 1.875rem;
font-weight: 800;
color: #9758a6;   // ${(props) => props.theme.purple};
padding-bottom: 1rem;
position: relative;
text-align: center;
margin-top:1rem;
&::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 56px;
    height: 4px;
    left: calc(50% - 28px);
    background-color: #9758a6; // ${(props) => props.theme.purple};
    
}

`
export const ContainerItems = styled.div`
display: flex;
background:url('${props => props.imageUrl}') no-repeat;
align-items: center;
background-position:center;
background-size: cover;
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
        background-color:  #9758a6;//${(props) => props.theme.purple};
    }


`