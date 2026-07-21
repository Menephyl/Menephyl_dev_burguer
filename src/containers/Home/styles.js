import styled from "styled-components";
import BannerHome from '../../assets/banner-home.svg'
export const Banner = styled.div`
   background: url(${BannerHome});
   background-size: cover;
   background-position: center;
   height:23.75rem ;
   width: 100%;
     color: aliceblue;
     
     h1{
        font-family: 'Road Rage', cursive;
        font-size: 5rem;
        font-weight: 200;
        line-height: 100%;
        color: #f4f4f4;
        position: absolute;
        top: 10%;
        right: 20%;
     }
`

export const Container = styled.section`
  background: linear-gradient(
    rgba(255,255,255,0.5),
    rgba(255,255,255,0.5)  
    );
    
`
export const Content = styled.div`
padding-bottom: 4,375rem;
`
export const ContainerButton = styled.div`
   
`
