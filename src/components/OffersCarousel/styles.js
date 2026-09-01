import styled from "styled-components";
import { Link } from 'react-router-dom'
export const Container = styled.div`

.carousel-item{
    padding-right:2.40rem;
     
}


overflow-x:hidden;

.react-multi-carousel-list{
   overflow: visible;
   
}

.react-multiple-carousel__arrow--left {
    left: 1rem;
    top: 0.1rem;
}

.react-multiple-carousel__arrow--right {
    top: 0.1rem;
}



padding-left:2.40rem;
padding-bottom: 2.5rem;


`

export const Title = styled.h2`
font-size: 2rem;
font-weight: 800;
color:${(props) => props.theme.green};
padding-bottom: 1rem;
position: relative;
text-align: center;
margin:3.4rem 0;


&::after {
    content: '';
  position: absolute;
  bottom: 10px;
  width: 3.6rem;
  height: 0.26rem;
  left: calc(50% - 1.7rem);
    background-color: ${(props) => props.theme.green};

}

`

export const CategoryButton = styled(Link)`


`
